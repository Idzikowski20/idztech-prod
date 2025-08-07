"use client";

import {
    useState,
    useRef,
    useCallback,
    type DragEvent,
    useEffect,
} from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, File as FileIcon, X, CheckCircle } from "lucide-react";

const successIconVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
        },
    },
};

type UploadStatus = "idle" | "dragging" | "uploading" | "success" | "error";

interface FileUploadProps {
    onUploadSuccess?: (file: File) => void;
    onUploadError?: (error: string) => void;
    acceptedFileTypes?: string[];
    maxFileSize?: number;
    currentFile?: File | null;
    onFileRemove?: () => void;
}

interface CardVariants extends Variants {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
    };
    exit: {
        opacity: number;
        y: number;
    };
}

const cardVariants: CardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

interface DropzoneVariants extends Variants {
    idle: {
        scale: number;
        borderColor: string;
        backgroundColor: string;
    };
    dragging: {
        scale: number;
        borderColor: string;
        backgroundColor: string;
        transition: Transition;
    };
}

const dropzoneVariants: DropzoneVariants = {
    idle: {
        scale: 1,
        borderColor: "var(--border-color)",
        backgroundColor: "var(--bg-color)",
    },
    dragging: {
        scale: 1.02,
        borderColor: "var(--primary-color)",
        backgroundColor: "var(--primary-bg)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
        } as Transition,
    },
};

interface IconVariants extends Variants {
    idle: {
        y: number;
        scale: number;
    };
    dragging: {
        y: number;
        scale: number;
        transition: Transition & {
            repeat: number;
            repeatType: "reverse" | "loop" | "mirror";
        };
    };
}

const iconVariants: IconVariants = {
    idle: { y: 0, scale: 1 },
    dragging: {
        y: -5,
        scale: 1.1,
        transition: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse" as const,
            duration: 1,
            ease: "easeInOut" as const,
        },
    },
};

interface ProgressVariants extends Variants {
    initial: {
        pathLength: number;
        opacity: number;
    };
    animate: (progress: number) => {
        pathLength: number;
        opacity: number;
        transition: Transition;
    };
}

const progressVariants: ProgressVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (progress: number) => ({
        pathLength: progress / 100,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" as const } as Transition,
    }),
};

export default function FileUpload({
    onUploadSuccess,
    onUploadError,
    acceptedFileTypes,
    maxFileSize = 5 * 1024 * 1024,
    currentFile: initialFile = null,
    onFileRemove,
}: FileUploadProps) {
    const [file, setFile] = useState<File | null>(initialFile);
    const [status, setStatus] = useState<UploadStatus>("idle");
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (file?.type?.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        return () => setPreviewUrl(null);
    }, [file]);

    const handleFileValidation = (selectedFile: File): boolean => {
        setError(null);
        if (
            acceptedFileTypes &&
            acceptedFileTypes.length > 0 &&
            !acceptedFileTypes.includes(selectedFile.type)
        ) {
            const err = `Nieprawidłowy typ pliku. Dozwolone: ${acceptedFileTypes
                .map((t) => t.split("/")[1])
                .join(", ")
                .toUpperCase()}`;
            setError(err);
            setStatus("error");
            if (onUploadError) onUploadError(err);
            return false;
        }
        if (maxFileSize && selectedFile.size > maxFileSize) {
            const err = `Rozmiar pliku przekracza limit ${formatBytes(
                maxFileSize
            )}.`;
            setError(err);
            setStatus("error");
            if (onUploadError) onUploadError(err);
            return false;
        }
        return true;
    };

    const handleFileSelect = (selectedFile: File | null) => {
        if (!selectedFile) return;

        if (!handleFileValidation(selectedFile)) {
            setFile(null);
            return;
        }

        setFile(selectedFile);
        setError(null);
        setStatus("uploading");
        setProgress(0);
        simulateUpload(selectedFile);
    };

    const handleDragOver = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            if (status !== "uploading" && status !== "success") {
                setStatus("dragging");
            }
        },
        [status]
    );

    const handleDragLeave = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            if (status === "dragging") {
                setStatus("idle");
            }
        },
        [status]
    );

    const handleDrop = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            if (status === "uploading" || status === "success") return;

            setStatus("idle");
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile) {
                handleFileSelect(droppedFile);
            }
        },
        [status, handleFileSelect]
    );

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        handleFileSelect(selectedFile || null);
        if (e.target) e.target.value = "";
    };

    const triggerFileInput = () => {
        if (status === "uploading" || status === "success") return;
        fileInputRef.current?.click();
    };

    const simulateUpload = (uploadingFile: File) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.random() * 10 + 10;
            if (currentProgress >= 100) {
                clearInterval(interval);
                setProgress(100);
                setStatus("success");
                if (onUploadSuccess) {
                    onUploadSuccess(uploadingFile);
                }
            } else {
                setStatus((prevStatus) => {
                    if (prevStatus === "uploading") {
                        setProgress(currentProgress);
                        return "uploading";
                    }
                    clearInterval(interval);
                    return prevStatus;
                });
            }
        }, 200);
    };

    const resetState = () => {
        setFile(null);
        setStatus("idle");
        setProgress(0);
        setError(null);
        setPreviewUrl(null);
    };

    const handleRemoveFile = useCallback(() => {
        setFile(null);
        setStatus("idle");
        setProgress(0);
        setError(null);
        setPreviewUrl(null);
        if (onFileRemove) onFileRemove();
    }, [onFileRemove]);

    const formatBytes = (bytes: number, decimals = 2): string => {
        if (!+bytes) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const unit = sizes[i] || sizes[sizes.length - 1];

        return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${unit}`;
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
            style={
                {
                    "--border-color": "rgb(var(--zinc-800) / 0.5)",
                    "--bg-color": "rgb(var(--zinc-900) / 0.3)",
                    "--primary-color": "rgb(var(--violet-400))",
                    "--primary-bg": "rgb(var(--violet-500) / 0.1)",
                } as React.CSSProperties
            }
        >
            <Card className={`w-full max-w-md mx-auto overflow-hidden min-h-[250px] flex flex-col bg-zinc-900 border-zinc-800/50 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50`}>
                <CardContent className="p-6 flex-1 flex flex-col items-center justify-center text-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                        'from-violet-500/5 via-transparent to-sky-500/5' 
                    }`} />
                    <div className="relative z-10 w-full">
                        <AnimatePresence mode="wait" initial={false}>
                            {file && (status === "success" || status !== "uploading") ? (
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    className="flex flex-col items-center text-center w-full"
                                    aria-live="polite"
                                >
                                    {previewUrl && (
                                        <motion.div
                                            className="relative w-32 h-32 mb-4 rounded-lg overflow-hidden ring-2 ring-violet-500/20"
                                            initial={{ rotate: -10, scale: 0.9 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                            }}
                                        >
                                            <img
                                                src={previewUrl}
                                                alt={`Podgląd ${file.name}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    )}
                                    {!previewUrl && (
                                        <FileIcon
                                            className={`w-16 h-16 mb-4 text-violet-400`}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <h3 className={`text-lg font-semibold mb-2 text-zinc-100`}>
                                        Aktualny plik
                                    </h3>
                                    <div className={`w-full max-w-xs rounded-lg p-3 mb-4 backdrop-blur-sm bg-zinc-800/50`}>
                                        <p className={`text-sm font-medium mb-2 truncate text-zinc-100`} title={file.name}>
                                            {file.name}
                                        </p>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="flex flex-col space-y-1">
                                                <span className="text-zinc-400">
                                                    Rozmiar
                                                </span>
                                                <span className={`font-medium text-zinc-300`}>
                                                    {formatBytes(file.size)}
                                                </span>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <span className="text-zinc-400">
                                                    Typ
                                                </span>
                                                <span className={`font-medium text-zinc-300`}>
                                                    {file.type.split("/")[1].toUpperCase() || "Nieznany"}
                                                </span>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <span className="text-zinc-400">
                                                    Zmodyfikowano
                                                </span>
                                                <span className={`font-medium text-zinc-300`}>
                                                    {new Date(file.lastModified).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="flex flex-col space-y-1">
                                                <span className="text-zinc-400">
                                                    Status
                                                </span>
                                                <span className="font-medium text-emerald-600">
                                                    Gotowy
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleRemoveFile}
                                            type="button"
                                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-red-400 hover:text-red-300 border border-red-800 hover:border-red-700 focus-visible:ring-red-500 focus-visible:ring-offset-zinc-900`}
                                            aria-label="Usuń plik"
                                        >
                                            Usuń
                                        </button>
                                    </div>
                                </motion.div>
                            ) : status === "idle" || status === "dragging" ? (
                                <motion.div
                                    key="dropzone"
                                    variants={dropzoneVariants}
                                    initial="idle"
                                    animate={status === "dragging" ? "dragging" : "idle"}
                                    className={`w-full h-full flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg ${
                                        status === "dragging"
                                            ? 'border-violet-400 bg-violet-500/10'
                                            : 'border-violet-500 bg-violet-50/20'
                                    } transition-all duration-500 ease-in-out backdrop-blur-sm relative overflow-hidden group cursor-pointer`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={triggerFileInput}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            triggerFileInput();
                                        }
                                    }}
                                    aria-label="Strefa upuszczania plików"
                                >
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className={`absolute inset-0 bg-gradient-to-b from-violet-500/[0.02] via-transparent to-violet-500/[0.02] animate-shimmer`} />
                                            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={iconVariants}
                                        initial="idle"
                                        animate={status === "dragging" ? "dragging" : "idle"}
                                    >
                                        <UploadCloud
                                            className={`w-12 h-12 mb-4 transform transition-all duration-500 ease-out ${
                                                status === "dragging"
                                                    ? 'text-violet-400'
                                                    : 'text-violet-600'
                                            }`}
                                            aria-label="Ikona chmury do przesyłania"
                                        />
                                    </motion.div>
                                    <p className={`mb-2 text-sm transition-all duration-500 ${
                                        'text-zinc-400'
                                    }`}>
                                        <span className={`font-semibold transition-colors duration-500 ${
                                            'text-violet-400/90 group-hover:text-violet-400'
                                        }`}>
                                            Kliknij, aby przesłać
                                        </span>{" "}
                                        lub przeciągnij i upuść
                                    </p>
                                    <p className={`text-xs ${
                                        'text-zinc-500/90'
                                    } group-hover:text-zinc-500 transition-colors duration-500`}>
                                        {acceptedFileTypes && acceptedFileTypes.length > 0
                                            ? `Dozwolone: ${acceptedFileTypes
                                                  .map((t) => t.split("/")[1])
                                                  .join(", ")
                                                  .toUpperCase()}`
                                            : "SVG, PNG, JPG lub GIF"}{" "}
                                        {maxFileSize && `(Maks. ${formatBytes(maxFileSize)})`}
                                    </p>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        className="sr-only"
                                        onChange={handleFileInputChange}
                                        accept={acceptedFileTypes?.join(",")}
                                        aria-label="Wybór pliku"
                                    />
                                </motion.div>
                            ) : status === "uploading" && file ? (
                                <motion.div
                                    key="uploading"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    className="w-full flex flex-col items-center"
                                    aria-live="polite"
                                    aria-busy="true"
                                >
                                    <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                                        <motion.svg
                                            className="w-full h-full transform -rotate-90"
                                            viewBox="0 0 36 36"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "linear",
                                            }}
                                            aria-label="Wskaźnik postępu przesyłania"
                                            role="progressbar"
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={progress}
                                        >
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className={`stroke-current ${
                                                    'text-zinc-800'
                                                }`}
                                                strokeWidth="2.5"
                                            />
                                            <motion.circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className={`stroke-current ${
                                                    'text-violet-400'
                                                }`}
                                                strokeWidth="2.5"
                                                strokeDasharray="100"
                                                variants={progressVariants}
                                                initial="initial"
                                                animate="animate"
                                                custom={progress}
                                            />
                                        </motion.svg>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                delay: 0.2,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 25,
                                            }}
                                        >
                                            <FileIcon
                                                className={`w-8 h-8 absolute ${
                                                    'text-violet-400'
                                                }`}
                                                aria-hidden="true"
                                            />
                                        </motion.div>
                                    </div>
                                    <p className={`text-sm font-medium mb-1 truncate max-w-[200px] ${
                                        'text-zinc-100'
                                    }`} title={file.name}>
                                        {file.name}
                                    </p>
                                    <p className={`text-xs ${
                                        'text-zinc-400'
                                    }`}>
                                        Przesyłanie... {Math.round(progress)}%
                                    </p>
                                    <button
                                        onClick={resetState}
                                        type="button"
                                        className={`mt-4 px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-300 ${
                                            'text-red-400 hover:text-red-300 border-red-800/50 hover:bg-red-900/20'
                                        }`}
                                        aria-label="Anuluj przesyłanie"
                                    >
                                        Anuluj
                                    </button>
                                </motion.div>
                            ) : status === "success" && file ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    className="flex flex-col items-center text-center"
                                    aria-live="polite"
                                >
                                    <div className="relative mb-4">
                                        <motion.div
                                            className={`absolute inset-0 blur-2xl rounded-full ${
                                                'bg-emerald-500/20'
                                            }`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1.5 }}
                                            transition={{
                                                delay: 0.1,
                                                duration: 0.8,
                                                ease: "easeOut",
                                            }}
                                        />
                                        <motion.div
                                            variants={successIconVariants}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            <CheckCircle
                                                className={`w-16 h-16 relative z-10 drop-shadow-lg ${
                                                    'text-emerald-400'
                                                }`}
                                                aria-label="Sukces"
                                            />
                                        </motion.div>
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-1 ${
                                        'text-zinc-100'
                                    }`}>
                                        Przesyłanie zakończone sukcesem!
                                    </h3>
                                    <p className={`text-sm mb-4 truncate max-w-[200px] ${
                                        'text-zinc-400'
                                    }`} title={file.name}>
                                        {file.name} ({formatBytes(file.size)})
                                    </p>
                                    <button
                                        onClick={resetState}
                                        type="button"
                                        className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                                            'bg-violet-500 hover:bg-violet-600 shadow-violet-500/10 focus-visible:ring-violet-500 focus-visible:ring-offset-zinc-900'
                                        }`}
                                        aria-label="Prześlij inny plik"
                                    >
                                        Prześlij inny plik
                                    </button>
                                </motion.div>
                            ) : status === "error" ? (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    className={`flex flex-col items-center text-center ${
                                        'text-red-500'
                                    }`}
                                    role="alert"
                                >
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <X className="w-12 h-12 mb-3" aria-hidden="true" />
                                    </motion.div>
                                    <p className="text-sm font-medium mb-1">
                                        Błąd przesyłania
                                    </p>
                                    <p className="text-xs mb-4 max-w-xs">
                                        {error || "Wystąpił nieznany błąd."}
                                    </p>
                                    <button
                                        onClick={resetState}
                                        type="button"
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                                            'text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700/80 focus-visible:ring-zinc-500 focus-visible:ring-offset-zinc-900'
                                        }`}
                                        aria-label="Spróbuj ponownie"
                                    >
                                        Spróbuj ponownie
                                    </button>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
} 