/*
 * @author Vadim Burtelov https://burtelov.ru/
 */

"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeRegistry from "@/app/ThemeRegistry";
import {useState} from "react";
import {darkTheme, lightTheme} from "@/app/theme";

export default function RootLayout({children}) {

    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme.palette.mode === "dark" ? lightTheme : darkTheme)
    }

    return (
        <html lang="en">
        <head>
            <title>MARK GAXEN | Photographer</title>
            <meta name="description" content="Vadim Burtelov | Java Developer"/>
            <link rel="favicon" href="/favicon.ico" sizes="any"/>
        </head>
        <body>
        <ThemeRegistry theme={theme} options={{key: "mui"}}>
            <Header toggleTheme={toggleTheme} theme={theme}/>
            <main>{children}</main>
            <Footer/>
        </ThemeRegistry>
        </body>
        </html>
    );
}