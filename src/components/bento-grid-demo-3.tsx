"use client"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { motion } from "motion/react"
import { User } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BentoGridThirdDemo() {
	const navigate = useNavigate()
	return (
		<section className="md:py-24">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<p className="text-premium-purple font-medium mb-3 uppercase">Co oferujemy</p>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white">Nasze usługi webowe</h2>
					<p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
						Oferujemy kompleksowe rozwiązania, które pomogą Twojej firmie zyskać przewagę konkurencyjną w internecie.
					</p>
				</div>
			</div>
			<BentoGrid className="max-w-6xl mx-auto p-8">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={cn(item.className, "cursor-pointer")}
						onClick={() => navigate(item.link)}
					/>
				))}
			</BentoGrid>
			<div className="ml-5 w-full">
				<img
					src="/images/speedometr2.png"
					alt="Gallery image"
					className="object-contain grow w-full aspect-[1.36]"
				/>
			</div>
		</section>
	)
}

// Website Creation Skeleton
const WebsiteCreationSkeleton = () => {
	return (
		<div className="flex flex-1 w-full h-32 relative overflow-hidden rounded-lg group">
			{/* Browser mockup */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.02, rotateY: 5 }}
				className="bg-gray-700/60 rounded-lg p-4 w-full h-full border border-gray-600/40 relative overflow-hidden"
			>
				{/* Animated glow effect */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-premium-blue/10 to-transparent"
					animate={{ x: [-100, 300] }}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
				/>

				{/* Browser header */}
				<div className="flex items-center space-x-2 mb-3 relative z-10">
					<motion.div
						className="w-3 h-3 bg-red-400/80 rounded-full"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					/>
					<motion.div
						className="w-3 h-3 bg-yellow-400/80 rounded-full"
						animate={{ opacity: [1, 0.5, 1] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
					/>
					<motion.div
						className="w-3 h-3 bg-green-400/80 rounded-full"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
					/>
				</div>

				{/* Page content */}
				<div className="space-y-3 relative z-10">
					<motion.div
						className="w-4/5 h-3 bg-gradient-to-r from-premium-blue to-premium-purple rounded-md"
						animate={{ width: ["80%", "90%", "80%"] }}
						transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
						whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
					/>
					<motion.div
						className="w-full h-2 bg-gray-500/50 rounded-md"
						animate={{ opacity: [0.5, 0.8, 0.5] }}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
					/>
					<motion.div
						className="w-5/6 h-2 bg-gray-500/50 rounded-md"
						animate={{ opacity: [0.8, 0.5, 0.8] }}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
					/>

					<div className="grid grid-cols-3 gap-2 mt-4">
						{[0, 1, 2].map((index) => (
							<motion.div
								key={index}
								className="h-8 bg-gradient-to-br from-premium-blue/20 to-premium-purple/20 rounded-md border border-gray-500/30 relative overflow-hidden"
								animate={{
									y: [0, -2, 0],
									boxShadow: [
										"0 0 0px rgba(59, 130, 246, 0)",
										"0 0 10px rgba(120, 77, 255, 0.3)",
										"0 0 0px rgba(120, 77, 255, 0)",
									],
								}}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									delay: index * 0.3,
								}}
								whileHover={{
									scale: 1.1,
									rotateZ: 5,
									boxShadow: "0 0 20px rgba(120, 77, 255, 0.6)",
								}}
							>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-transparent via-premium-purple/20 to-transparent"
									animate={{ x: [-50, 100] }}
									transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	)
}

// E-commerce Skeleton
const EcommerceSkeleton = () => {
	return (
		<div className="flex flex-1 w-full h-32 relative overflow-hidden rounded-lg group">
			<div className="grid grid-cols-2 gap-3 w-full h-full p-2">
				{[1, 2].map((item, i) => (
					<motion.div
						key={item}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{
							scale: 1,
							opacity: 1,
							y: [0, -3, 0],
						}}
						transition={{
							scale: { duration: 0.3, delay: i * 0.2 },
							opacity: { duration: 0.3, delay: i * 0.2 },
							y: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 1.5 },
						}}
						whileHover={{
							scale: 1.05,
							rotateY: 10,
							boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
						}}
						className="bg-gray-700/60 rounded-lg p-3 border border-gray-600/40 flex flex-col relative overflow-hidden"
					>
						{/* Shimmer effect */}
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-transparent via-premium-pink/10 to-transparent"
							animate={{ x: [-100, 200] }}
							transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.8 }}
						/>

						{/* Product image */}
						<motion.div
							className="w-full h-10 bg-gradient-to-br from-premium-pink/20 to-premium-purple/20 rounded-md mb-2 border border-gray-500/40 relative overflow-hidden"
							animate={{
								boxShadow: [
									"0 0 0px rgba(255, 77, 140, 0)",
									"0 0 15px rgba(255, 77, 140, 0.3)",
									"0 0 0px rgba(255, 77, 140, 0)",
								],
							}}
							transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
							whileHover={{ scale: 1.1, rotateZ: 2 }}
						>
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-transparent"
								animate={{ rotate: [0, 360] }}
								transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
							/>
						</motion.div>

						{/* Product info */}
						<div className="flex-1 space-y-2">
							<motion.div
								className="w-4/5 h-2 bg-gray-400/60 rounded-md"
								animate={{ width: ["80%", "90%", "80%"] }}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
							/>
							<motion.div
								className="w-3/5 h-2 bg-gray-500/50 rounded-md"
								animate={{ opacity: [0.5, 0.8, 0.5] }}
								transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
							/>
						</div>

						{/* Price */}
						<div className="flex justify-between items-center mt-2">
							<motion.div
								className="px-2 py-1 bg-premium-purple/80 border border-premium-purple/60 rounded-md text-xs text-white font-semibold relative overflow-hidden"
								animate={{
									boxShadow: [
										"0 0 0px rgba(120, 77, 255, 0)",
										"0 0 10px rgba(120, 77, 255, 0.4)",
										"0 0 0px rgba(120, 77, 255, 0)",
									],
								}}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.7 }}
								whileHover={{ scale: 1.1, backgroundColor: "rgba(120, 77, 255, 1)" }}
							>
								$99
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
									animate={{ x: [-50, 100] }}
									transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 1.2 }}
								/>
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

// SaaS App Skeleton
const SaaSAppSkeleton = () => {
	return (
		<div className="flex flex-1 w-full h-32 relative overflow-hidden rounded-lg group">
			{/* Animated gradient background */}
			<motion.div
				className="absolute inset-0 rounded-lg"
				animate={{
					background: [
						"linear-gradient(135deg, #0a0a0a, #1f1f1f)",
						"linear-gradient(135deg, #1f1f1f, #0a0a0a)",
					],
				}}
				transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
				style={{ backgroundSize: "200% 200%" }}
				whileHover={{ scale: 1.02 }}
			/>

			{/* Floating particles */}
			{[...Array(6)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-gray-300/40 rounded-full"
					style={{
						left: `${20 + i * 15}%`,
						top: `${30 + (i % 2) * 40}%`,
					}}
					animate={{
						y: [0, -10, 0],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 2 + i * 0.3,
						repeat: Number.POSITIVE_INFINITY,
						delay: i * 0.2,
					}}
				/>
			))}

			{/* Content */}
			<div className="relative z-10 p-4 w-full h-full">
				<motion.div
					className="bg-black/30 rounded-lg p-3 h-full border border-gray-500/30 relative overflow-hidden"
					whileHover={{
						scale: 1.02,
						boxShadow: "0 0 30px rgba(156, 163, 175, 0.3)",
						borderColor: "rgba(156, 163, 175, 0.5)",
					}}
				>
					{/* Scanning line effect */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300/10 to-transparent h-8"
						animate={{ y: [-20, 120] }}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
					/>

					{/* Dashboard header */}
					<div className="flex justify-between items-center mb-3">
						<motion.div
							className="w-16 h-3 bg-gray-300/70 rounded-md"
							animate={{ opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						/>
						<motion.div
							className="w-8 h-8 bg-gray-400/40 rounded-full border border-gray-300/50 relative overflow-hidden flex items-center justify-center"
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
							whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(156, 163, 175, 0.5)" }}
						>
							<User className="h-5 w-5 text-gray-300" />
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent"
								animate={{ x: [-20, 40] }}
								transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
							/>
						</motion.div>
					</div>

					{/* Stats cards */}
					<div className="grid grid-cols-3 gap-2 mb-3">
						{[0, 1, 2].map((index) => (
							<motion.div
								key={index}
								className="bg-black/30 border border-gray-500/40 p-2 rounded-md relative overflow-hidden"
								animate={{
									y: [0, -2, 0],
									boxShadow: [
										"0 0 0px rgba(120, 77, 255, 0)",
										"0 0 8px rgba(120, 77, 255, 0.3)",
										"0 0 0px rgba(120, 77, 255, 0)",
									],
								}}
								transition={{
									duration: 2.5,
									repeat: Number.POSITIVE_INFINITY,
									delay: index * 0.4,
								}}
								whileHover={{
									scale: 1.05,
									backgroundColor: "rgba(0,0,0,0.5)",
									borderColor: "rgba(120, 77, 255, 0.6)",
								}}
							>
								<motion.div
									className="w-4 h-2 bg-gray-300/80 rounded-sm mb-1"
									animate={{ width: ["60%", "80%", "60%"] }}
									transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
								/>
								<motion.div
									className="w-6 h-2 bg-gray-400/60 rounded-sm"
									animate={{ opacity: [0.6, 1, 0.6] }}
									transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
								/>
							</motion.div>
						))}
					</div>

					{/* Chart */}
					<div className="flex items-end justify-around h-10 space-x-1">
						{[
							"var(--premium-blue)",
							"var(--premium-purple)",
							"var(--premium-pink)",
							"var(--premium-blue)",
							"var(--premium-purple)",
							"var(--premium-pink)",
							"var(--premium-blue)",
						].map((color, i) => (
							<motion.div
								key={i}
								initial={{ height: 0, backgroundColor: color }}
								animate={{
									height: [`${[40, 70, 45, 80, 60, 90, 55][i] * 0.8}%`, `${[40, 70, 45, 80, 60, 90, 55][i]}%`, `${[40, 70, 45, 80, 60, 90, 55][i] * 0.8}%`],
									boxShadow: [
										"0 0 0px " + color + "00",
										"0 0 10px " + color + "66",
										"0 0 0px " + color + "00",
									],
								}}
								transition={{
									height: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 },
									boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 },
								}}
								whileHover={{
									scale: 1.1,
									backgroundColor: color,
									opacity: 1,
									boxShadow: "0 0 15px " + color + "AA",
								}}
								className="rounded-sm flex-1 cursor-pointer"
								style={{ backgroundColor: color, opacity: 0.7 }}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	)
}

// SEO Positioning Skeleton
const SEOPositioningSkeleton = () => {
	return (
		<div className="flex flex-1 w-full h-32 relative overflow-hidden rounded-lg group">
			<motion.div
				className="bg-gray-700/60 rounded-lg p-4 h-full w-full border border-gray-600/40 relative overflow-hidden"
				whileHover={{ scale: 1.02, rotateX: 5 }}
			>
				{/* Radar sweep effect */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"
					animate={{ rotate: [0, 360] }}
					transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
					style={{ transformOrigin: "center center" }}
				/>

				<div className="flex items-center space-x-2 mb-3">
					<motion.div
						className="w-3 h-3 bg-green-400/80 rounded-full relative"
						animate={{
							boxShadow: [
								"0 0 0px rgba(34, 197, 94, 0)",
								"0 0 15px rgba(34, 197, 94, 0.8)",
								"0 0 0px rgba(34, 197, 94, 0)",
							],
						}}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					>
						<motion.div
							className="absolute inset-0 bg-gray-300/50 rounded-full"
							animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
							transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						/>
					</motion.div>
					<motion.div
						className="w-12 h-2 bg-gray-400/60 rounded-md"
						animate={{ width: ["48px", "56px", "48px"] }}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
					/>
				</div>

				<div className="space-y-2">
					{[1, 3, 2].map((position, i) => (
						<motion.div
							key={i}
							initial={{ x: -20, opacity: 0 }}
							animate={{
								x: 0,
								opacity: 1,
								y: [0, -1, 0],
							}}
							transition={{
								x: { duration: 0.5, delay: i * 0.2 },
								opacity: { duration: 0.5, delay: i * 0.2 },
								y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.8 },
							}}
							whileHover={{
								scale: 1.02,
								x: 5,
								backgroundColor: "rgba(34, 197, 94, 0.1)",
								borderColor: "rgba(34, 197, 94, 0.5)",
							}}
							className="flex items-center justify-between p-2 bg-gray-600/40 rounded-md border border-gray-500/40 relative overflow-hidden cursor-pointer"
						>
							{/* Pulse effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"
								animate={{ x: [-100, 200] }}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 1.2 }}
							/>

							<div className="flex-1 space-y-1 relative z-10">
								<motion.div
									className="w-16 h-2 bg-gray-400/60 rounded-md"
									animate={{ opacity: [0.6, 0.9, 0.6] }}
									transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
								/>
								<motion.div
									className="w-12 h-1 bg-gray-500/50 rounded-md"
									animate={{ width: ["48px", "56px", "48px"] }}
									transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
								/>
							</div>
							<div className="flex items-center space-x-2 relative z-10">
								<motion.div
									className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold relative overflow-hidden ${
										position === 1
											? "bg-green-500/80 text-white"
											: position <= 3
												? "bg-yellow-500/80 text-gray-800"
												: "bg-red-500/80 text-white"
									}`}
									animate={{
										boxShadow: [
											"0 0 0px rgba(156, 163, 175, 0)",
											"0 0 12px rgba(156, 163, 175, 0.6)",
											"0 0 0px rgba(156, 163, 175, 0)",
										],
									}}
									transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.4 }}
									whileHover={{ scale: 1.2, rotate: 360 }}
								>
									{position}
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent"
										animate={{ rotate: [0, 360] }}
										transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
									/>
								</motion.div>
								<motion.div
									className="w-2 h-2 bg-gray-400/80 rounded-full"
									animate={{
										scale: [1, 1.3, 1],
										opacity: [0.8, 1, 0.8],
									}}
									transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.6 }}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	)
}

// SEO Audit Skeleton
const SEOAuditSkeleton = () => {
	return (
		<div className="flex flex-1 w-full h-32 relative overflow-hidden rounded-lg group">
			<motion.div
				className="bg-gray-700/60 rounded-lg p-4 h-full w-full border border-gray-600/40 relative overflow-hidden"
				whileHover={{ scale: 1.02, rotateY: -5 }}
			>
				{/* Scanning effect */}
				<motion.div
					className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
					animate={{ y: [0, 120] }}
					transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
				/>

				<div className="flex items-center justify-between mb-3">
					<motion.div
						className="w-12 h-2 bg-gray-400/60 rounded-md"
						animate={{ opacity: [0.6, 1, 0.6] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					/>
					<motion.div
						className="text-2xl font-bold text-yellow-300 relative"
						animate={{
							textShadow: [
								"0 0 0px rgba(252, 211, 77, 0)",
								"0 0 10px rgba(252, 211, 77, 0.8)",
								"0 0 0px rgba(252, 211, 77, 0)",
							],
							scale: [1, 1.05, 1],
						}}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
						whileHover={{ scale: 1.1, color: "#FBBF24" }}
					>
						82
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"
							animate={{ x: [-30, 60] }}
							transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						/>
					</motion.div>
				</div>

				<div className="space-y-2">
					{[
						{ score: 95, status: "good" },
						{ score: 78, status: "warning" },
						{ score: 88, status: "good" },
						{ score: 65, status: "error" },
					].map((item, i) => (
						<motion.div
							key={i}
							className="flex items-center space-x-2"
							animate={{ x: [0, 2, 0] }}
							transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
						>
							<motion.div
								className="w-2 h-2 rounded-full"
								animate={{
									scale: [1, 1.3, 1],
									boxShadow: [
										"0 0 0px rgba(252, 211, 77, 0)",
										"0 0 8px rgba(252, 211, 77, 0.6)",
										"0 0 0px rgba(252, 211, 77, 0)",
									],
								}}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
								whileHover={{ scale: 1.5 }}
								style={{
									backgroundColor:
										item.status === "good"
											? "#22c55e"
											: item.status === "warning"
												? "#f59e0b"
												: "#ef4444",
								}}
							/>
							<div className="flex-1 bg-gray-600/50 rounded-full h-2 relative overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									animate={{
										width: `${item.score}%`,
										boxShadow: [
											"0 0 0px rgba(252, 211, 77, 0)",
											"0 0 10px rgba(252, 211, 77, 0.5)",
											"0 0 0px rgba(252, 211, 77, 0)",
										],
									}}
									transition={{
										width: { delay: i * 0.1, duration: 0.8 },
										boxShadow: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.4 },
									}}
									whileHover={{
										opacity: 1,
										boxShadow: "0 0 15px rgba(252, 211, 77, 0.8)",
									}}
									className="h-2 rounded-full relative overflow-hidden cursor-pointer"
									style={{
										backgroundColor:
											item.status === "good"
												? "#22c55e"
												: item.status === "warning"
													? "#f59e0b"
													: "#ef4444",
										opacity: 0.8,
									}}
								>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
										animate={{ x: [-50, 100] }}
										transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.6 }}
									/>
								</motion.div>
							</div>
							<motion.div
								className="text-xs text-gray-400 w-6"
								animate={{ opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
							>
								{item.score}
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	)
}

// SEO Optimization Skeleton
const SEOOptimizationSkeleton = () => {
	return (
		<div className="flex flex-1 w-full h-32 relative overflow-hidden rounded-lg group">
			<motion.div
				className="bg-gray-700/60 rounded-lg p-4 h-full w-full border border-gray-600/40 relative overflow-hidden"
				whileHover={{ scale: 1.02, rotateZ: 1 }}
			>
				{/* Data flow effect */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent"
					animate={{ y: [100, -20] }}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
				/>

				<div className="flex items-center justify-between mb-3">
					<motion.div
						className="w-14 h-2 bg-gray-400/60 rounded-md"
						animate={{ width: ["56px", "64px", "56px"] }}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
					/>
					<div className="flex items-center space-x-1">
						<motion.div
							className="w-2 h-2 bg-blue-400/80 rounded-full relative"
							animate={{
								scale: [1, 1.4, 1],
								boxShadow: [
									"0 0 0px rgba(59, 130, 246, 0)",
									"0 0 12px rgba(59, 130, 246, 0.8)",
									"0 0 0px rgba(59, 130, 246, 0)",
								],
							}}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
						>
							<motion.div
								className="absolute inset-0 bg-gray-300/60 rounded-full"
								animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
								transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
							/>
						</motion.div>
						<motion.div
							className="w-8 h-2 bg-gray-400/60 rounded-md"
							animate={{ opacity: [0.6, 1, 0.6] }}
							transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
						/>
					</div>
				</div>

				<div className="flex items-end justify-between h-10 space-x-1 mb-3">
					{[20, 35, 45, 55, 70, 85, 95].map((height, i) => (
						<motion.div
							key={i}
							initial={{ height: 0, opacity: 0 }}
							animate={{
								height: [`${height * 0.7}%`, `${height}%`, `${height * 0.7}%`],
								opacity: 1,
								boxShadow: [
									"0 0 0px rgba(59, 130, 246, 0)",
									"0 0 8px rgba(59, 130, 246, 0.4)",
									"0 0 0px rgba(59, 130, 246, 0)",
								],
							}}
							transition={{
								height: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 },
								opacity: { duration: 0.5, delay: i * 0.2 },
								boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 },
							}}
							whileHover={{
								scale: 1.1,
								backgroundColor: "rgba(59, 130, 246, 0.8)",
								boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)",
							}}
							className="bg-gradient-to-t from-blue-600/60 to-blue-500/80 rounded-sm flex-1 cursor-pointer relative overflow-hidden"
						>
							<motion.div
								className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
								animate={{ y: [20, -10] }}
								transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
							/>
						</motion.div>
					))}
				</div>

				<div className="flex justify-between text-xs mb-2">
					<motion.div
						className="w-4 h-1 bg-gray-500/50 rounded-sm"
						animate={{ opacity: [0.5, 0.8, 0.5] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					/>
					<motion.div
						className="w-5 h-1 bg-gray-500/50 rounded-sm"
						animate={{ opacity: [0.8, 0.5, 0.8] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
					/>
					<motion.div
						className="w-4 h-1 bg-gray-500/50 rounded-sm"
						animate={{ opacity: [0.5, 0.8, 0.5] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
					/>
				</div>

				<motion.div className="flex items-center space-x-2" whileHover={{ x: 3 }}>
					<motion.div
						className="w-2 h-2 bg-blue-400/80 rounded-full relative"
						animate={{
							scale: [1, 1.2, 1],
							boxShadow: [
								"0 0 0px rgba(59, 130, 246, 0)",
								"0 0 10px rgba(59, 130, 246, 0.6)",
								"0 0 0px rgba(59, 130, 246, 0)",
							],
						}}
						transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
					>
						<motion.div
							className="absolute inset-0 bg-gray-300/50 rounded-full"
							animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
							transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
						/>
					</motion.div>
					<motion.div
						className="w-18 h-2 bg-gray-400/60 rounded-md"
						animate={{ width: ["72px", "80px", "72px"] }}
						transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
					/>
				</motion.div>
			</motion.div>
		</div>
	)
}

const items = [
	{
		title: "Tworzenie stron internetowych",
		description: (
			<span className="text-sm">
				Profesjonalne strony internetowe dostosowane do Twoich potrzeb biznesowych.
			</span>
		),
		header: <WebsiteCreationSkeleton />,
		className: "",
		link: "/tworzenie-stron-internetowych",
	},
	{
		title: "Tworzenie sklepów internetowych",
		description: (
			<span className="text-sm">
				Kompleksowe rozwiązania e-commerce z systemami płatności i zarządzaniem.
			</span>
		),
		header: <EcommerceSkeleton />,
		className: "",
		link: "/sklepy-internetowe",
	},
	{
		title: "Aplikacje Webowe SaaS",
		description: (
			<span className="text-sm">
				Skalowalne aplikacje SaaS z zaawansowanymi funkcjonalnościami.
			</span>
		),
		header: <SaaSAppSkeleton />,
		className: "",
		link: "/aplikacje-webowe",
	},
	{
		title: "Pozycjonowanie SEO",
		description: (
			<span className="text-sm">
				Zwiększ widoczność swojej strony w wynikach wyszukiwania Google.
			</span>
		),
		header: <SEOPositioningSkeleton />,
		className: "",
		link: "/pozycjonowanie-stron",
	},
	{
		title: "Audyt SEO",
		description: (
			<span className="text-sm">
				Kompleksowa analiza SEO Twojej strony z rekomendacjami poprawek.
			</span>
		),
		header: <SEOAuditSkeleton />,
		className: "",
		link: "/audyt-seo",
	},
	{
		title: "Optymalizacja SEO",
		description: (
			<span className="text-sm">
				Ciągła optymalizacja SEO dla lepszych wyników w wyszukiwarkach.
			</span>
		),
		header: <SEOOptimizationSkeleton />,
		className: "",
		link: "/optymalizacja-seo",
	},
] 