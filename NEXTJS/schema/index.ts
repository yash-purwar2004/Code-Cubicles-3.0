import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    fullname: z.string().min(1, {
        message: "Please enter your name"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    companyname: z.string().min(1,{
        message:"Enter minimum of 1 character"
    }),
    companyurl: z.string().min(1,{
        message:"Please Enter url "
    })
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(4, {
        message: "Password must be at least 6 characters long"
})
})