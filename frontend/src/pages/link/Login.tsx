"use client";

/**
 * =====================================================
 *  NAME    : Login.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 27/09/25
 *  DESCRIPTION: LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User, Lock, Gavel } from "lucide-react";

// LOGIC
type LoginProps = {
  t: (key: string) => string;
};

// PAGE
const Login: React.FC<LoginProps> = ({ t }) => {
  const loginSchema = z.object({
    email: z.string().email({ message: t("login.emailInvalid") }),
    password: z.string().min(6, { message: t("login.passwordMinLength") }),
  });
  type LoginFormValues = z.infer<typeof loginSchema>;
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: LoginFormValues) => {
    const body = {
      action: "login",
      data: {
          email: values.email,
          password: values.password,
      },
    };
    try {
      const res = await fetch("http://localhost:3001/auth/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Credenciales Invalidas");
      const data = await res.json();
      console.table(data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("r_token", data.r_token);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert(`Intenta nuevamente || ${err}`);
    }
  };
  const handleRegisterClick = () => {
    window.location.href = "/register";
  };
  return (
    <main className=" min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 p-8 rounded-3xl shadow-xl sm:p-10 dark:border-gray-950 border-2"
          >
            <h1 className="text-3xl font-extrabold text-center">
              {t("login.title")}
            </h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>{t("login.emailLabel")}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder={t("login.emailPlaceholder")}
                        {...field}
                        className="pl-10"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>{t("login.passwordLabel")}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder={t("login.passwordPlaceholder")}
                        {...field}
                        className="pl-10"
                      />
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    {t("login.passwordDescription")}
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold cursor-pointer"
            >
              {t("login.submitButton")}
            </Button>
            <div className="flex items-center my-4">
              <span className="flex-grow h-px bg-gray-300"></span>
              <span className="mx-2 text-gray-500 font-medium">o</span>
              <span className="flex-grow h-px bg-gray-300"></span>
            </div>
            <Button
              type="button"
              onClick={handleRegisterClick}
              variant="outline"
              className="w-full py-3 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Gavel className="w-5 h-5" />
              {t("login.register")}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};
export default Login;
