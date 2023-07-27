/*
 * @author Vadim Burtelov https://burtelov.ru/
 */

"use client";

import "./globals.css";
import Header from "@/components/Header";
import {CssBaseline} from "@mui/material";
import Footer from "@/components/Footer";
import ThemeRegistry from "@/app/ThemeRegistry";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>GAXEN | Photographer</title>
            <meta name="description" content="Vadim Burtelov | Java Developer"/>
            <link rel="favicon" href="/favicon.ico" sizes="any"/>
        </head>
        <body>
        <ThemeRegistry options={{key: "mui"}}>
            <Header/>
            <CssBaseline/>
            <main>{children}</main>
            <Footer/>
        </ThemeRegistry>
        </body>
        </html>
    );
}