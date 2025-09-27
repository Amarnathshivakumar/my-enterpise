"use client";
/**
 * =====================================================
 *  NAME    : Register.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 27/09/25
 *  DESCRIPTION: REGISTER PAGE
 * =====================================================
 */

// DEPENDENCIES
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, useWatch } from "react-hook-form";

// LOGIC
type RegisterProps = { t: (key: string) => string };

// PAGE
const Register: React.FC<RegisterProps> = ({ t }) => {
  const registerSchema = z.object({
    name: z.string().min(1, { message: t("register.nameRequired") }),
    email: z.string().email({ message: t("register.emailInvalid") }),
    password: z.string().min(6, { message: t("register.passwordMinLength") }),
    type: z.enum(["individual", "group", "enterprise"]),
    size: z.number().min(1).max(50),
    description: z.string().optional(),
    number: z.string().optional(),
    logo_url: z.string().optional(),
  });
  type RegisterFormValues = z.infer<typeof registerSchema>;
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      type: "individual",
      size: 1,
      description: "",
      number: "",
      logo_url: "null",
    },
  });
  const typeValue = useWatch({ control: form.control, name: "type" });
  useEffect(() => {
    if (typeValue === "individual") form.setValue("size", 1);
    if (typeValue === "group") form.setValue("size", 2);
    if (typeValue === "enterprise") form.setValue("size", 6);
  }, [typeValue, form]);
  const getSizeProps = () => {
    if (typeValue === "individual") return { disabled: true, min: 1, max: 1 };
    if (typeValue === "group") return { disabled: false, min: 2, max: 5 };
    if (typeValue === "enterprise") return { disabled: false, min: 6, max: 50 };
    return { disabled: false, min: 1, max: 50 };
  };
  const onSubmit = async (values: RegisterFormValues) => {
    const body = {
      action: "start",
      data: {
        entity: {
          name: values.name,
          type: values.type,
          description: values.description || "",
          number: values.number || "",
          size: values.size.toString(),
          logo_url: values.logo_url || "null",
        },
        user: { email: values.email, password: values.password },
      },
    };
    try {
      const res = await fetch("http://localhost:3001/auth/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log("Register response:", data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-8 rounded-3xl shadow-xl sm:p-10"
          >
            <h1 className="text-3xl font-extrabold text-center text-gray-900">
              {t("register.title")}
            </h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.nameLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("register.namePlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.emailLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("register.emailPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.passwordLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("register.passwordPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>{t("register.typeLabel")}</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <Select
                      onValueChange={(val) => field.onChange(val)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="group">Group</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.sizeLabel")}</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} {...getSizeProps()} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.descriptionLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("register.descriptionPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.numberLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("register.numberPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-3 text-lg font-semibold">
              {t("register.submitButton")}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};
export default Register;
