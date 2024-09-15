"use client";
import axios from 'axios';
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { redirect } from 'next/navigation'
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
      companyname:"",
      companyurl: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      
      
      if (response.ok) {
        const result = await response.json();
        const { token, name, id,companyurl } = result;
        localStorage.setItem("token", token);
        localStorage.setItem("username", name); 
        localStorage.setItem("UserId", id);
        localStorage.setItem("companyurl",companyurl);
        router.push('/loading')
        console.log("navigated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { pending } = useFormStatus();
  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <div className=" flex gap-10 items-center justify-center ">
            <div>
          <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <div className='justify-items-end'>
            <FormField
              control={form.control}
              name="companyname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="companyname" placeholder="Enter your Company Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyurl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Website URL</FormLabel>
                  <FormControl>
                    <Input {...field} type="companyurl" placeholder="Enter your Company Website Url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
          <Button type="submit" className="my-10 w-full" disabled={pending}>
            {loading ? "Loading..." : "Register"}
          </Button>
          </div>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
