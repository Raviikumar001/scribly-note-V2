'use client'

import { useMutation } from "@tanstack/react-query";


interface LoginCredentials {

    email: string;
    password: string;
}


interface LoginResponsee {
    user: {
        username: string;
        email: string;
        registrationDate: string;
        _id: string;

    };

    token: string;
    message: string;

}


export function useLogin() {

    return useMutation({
        mutationFn: async (credentials: LoginCredentials) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(credentials),
            });


            return response.json() as Promise<LoginResponsee>;
        }
    })
}