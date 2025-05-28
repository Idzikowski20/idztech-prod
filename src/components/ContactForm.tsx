import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, AlertCircle } from 'lucide-react';
import { useForm as useFormspree } from '@formspree/react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Notification from './ui/Notification';
import { useTheme } from '@/utils/themeContext';
import { useNotification } from './ui/NotificationContext';

const formSchema = z.object({
  name: z.string().min(2, { message: "Imię musi mieć co najmniej 4 znaki" }),
  company: z.string().min(1, { message: "Nazwa firmy jest wymagana" }),
  email: z.string().email({ message: "Nieprawidłowy format email" }),
  phone: z.string().min(9, { message: "Nieprawidłowy numer telefonu" }),
  service: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  // Replace with your valid Formspree form ID
  const [formspreeState, sendToFormspree] = useFormspree("mrbqyaee"); 
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const { showNotification } = useNotification();
  const { theme } = useTheme();

  const onSubmit = async (data: FormValues) => {
    try {
      // Log form submission
      console.log("Wysyłanie formularza do:", data.email);
      console.log("Dane formularza:", data);
      
      // Send form to Formspree
      await sendToFormspree(data);
      
      // Check for errors
      if (formspreeState.errors) {
        throw new Error("Błąd wysyłania formularza");
      }
      
      form.reset();
      showNotification({ sender: 'IDZTECH', message: 'Wiadomość została wysłana! Dziękujemy za kontakt.' });
    } catch (error) {
      console.error("Błąd wysyłania formularza:", error);
      showNotification({ sender: 'IDZTECH', message: 'Błąd wysyłania formularza. Spróbuj ponownie.' });
    }
  };

  return (
    <Form {...form}>
      {formspreeState.errors && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Błąd wysyłania formularza</AlertTitle>
          <AlertDescription>
            {formspreeState.errors && "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie."}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className={theme === 'dark' ? 'text-white' : ''}>Imię i nazwisko*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jan Kowalski"
                    className={`${theme === 'dark' ? 'bg-transparent text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className={theme === 'dark' ? 'text-white' : ''}>Nazwa firmy*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nazwa firmy"
                    className={`${theme === 'dark' ? 'bg-transparent text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className={theme === 'dark' ? 'text-white' : ''}>Email*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="jan@example.com"
                    className={`${theme === 'dark' ? 'bg-transparent text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className={theme === 'dark' ? 'text-white' : ''}>Telefon*</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+48 123 456 789"
                    className={`${theme === 'dark' ? 'bg-transparent text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className={theme === 'dark' ? 'text-white' : ''}>Usługa, którą jesteś zainteresowany</FormLabel>
              <FormControl>
                <select
                  className={`w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:border-premium-purple focus:ring-1 focus:ring-premium-purple/20 ${theme === 'dark' ? 'bg-transparent text-white border-gray-700' : 'bg-white text-black border-gray-300'} border`}
                  {...field}
                >
                  <option value="">Wybierz usługę</option>
                  <option value="web-dev">Tworzenie stron www</option>
                  <option value="ecommerce">Tworzenie sklepów internetowych</option>
                  <option value="seo">Pozycjonowanie stron internetowych</option>
                  <option value="local-seo">Pozycjonowanie lokalne</option>
                  <option value="audyt-seo">Audyt Seo</option>
                  <option value="optymalizacja-seo">Optymalizacja Seo</option>
                  <option value="copywriting-seo">Copywriting Seo</option>
                  <option value="content-plan">Content Plan</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className={theme === 'dark' ? 'text-white' : ''}>Wiadomość</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Opisz swoje potrzeby..."
                  rows={5}
                  className={`${theme === 'dark' ? 'bg-transparent text-white border-gray-700' : 'bg-white text-black border-gray-300'} resize-none`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-premium-gradient hover:bg-black hover:text-white transition-colors"
          disabled={form.formState.isSubmitting || formspreeState.submitting}
        >
          <Send size={16} className="mr-2" />
          {form.formState.isSubmitting || formspreeState.submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
