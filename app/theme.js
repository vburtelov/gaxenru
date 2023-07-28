import {createTheme} from "@mui/material";
import NextLink from "next/link";
import {forwardRef} from "react";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#0057FF', // Behance's primary blue
        },
        secondary: {
            main: '#191919', // Behance's dark gray
        },
        error: {
            main: '#FF5C00', // An orange error color for contrast
        },
        text: {
            primary: '#ffffff', // Behance's dark gray for primary text
            secondary: '#737373', // Behance's medium gray for secondary text
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