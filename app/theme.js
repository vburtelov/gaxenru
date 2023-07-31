import {createTheme} from "@mui/material";
import NextLink from "next/link";
import {forwardRef} from "react";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#0057FF',
        },
        secondary: {
            main: '#191919',
        },
        error: {
            main: '#FF5C00',
        },
        text: {
            primary: '#ffffff',
            secondary: '#737373',
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },

    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#0057FF',
        },
        secondary: {
            main: '#fff',
        },
        error: {
            main: '#FF5C00',
        },
        text: {
            primary: '#191919',
            secondary: '#707070',
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },

    },
});