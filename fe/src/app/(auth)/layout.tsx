import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black'>
            {children}
        </div>
    );
}