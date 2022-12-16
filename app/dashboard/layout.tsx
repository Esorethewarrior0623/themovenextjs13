import React from "react";
import Sidebar from "../../components/Sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex'>
            <Sidebar />
            <div>{children}</div>
        </main>
    )
}