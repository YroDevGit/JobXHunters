"use server"

import { Result } from "@/types/result";
import { AuthResponse } from "@/types/user";

export async function handleLogin(
    prevState: Result<AuthResponse> | undefined,
    formData: FormData
): Promise<Result<AuthResponse>> {
    const email = formData.get('email');
    const password = formData.get('password');

   try {
     const url = "";
     const res = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),

    });

    if(!res.ok){
        const errorData = await res.json();
        return { error: errorData.message || "Invalid credentials"}
    }
    //success
    const data = await res.json();
    return {data};

   } catch (err: any) {
        return { error : err.message || "Internal Server Error!" }
   }
}

export async function handleRegister(
   prevState: Result<AuthResponse> | undefined,
   formData: FormData
): Promise<Result<AuthResponse>> {
    //formData
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const url = "";
        const res = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
        });
        if(!res.ok){
            const errorData = await res.json();
            return {error: errorData.message || "Invalid Credentials"}
        }

        //success
        const data = await res.json();
        return {data};

    } catch (err: any) {
        return {error: err.message || "Internal Server Error!"};
    }
}