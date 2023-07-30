import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Stack} from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                bottom: 0,
                paddingTop: "1rem",
                height: "70px",
            }}
        >
            <Container maxWidth="lg">
                <Stack direction="column" alignItems="center">
                    <Stack direction="row" spacing={4} justifyContent="center">
                        <IconButton
                            size="medium"
                            color="inherit"
                            href="https://www.instagram.com/gaxen/"
                            target="_blank"
                            sx={{
                                "&:hover": {color: "primary.main"},
                            }}
                        >
                            <InstagramIcon fontSize="medium"/>
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="inherit"
                            href="https://t.me/gaxxxen"
                            target="_blank"
                            sx={{
                                "&:hover": {color: "primary.main"},
                            }}
                        >
                            <TelegramIcon fontSize="medium"/>
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="inherit"
                            href="mailto:i@gaxen.ru"
                            target="_top"
                            sx={{
                                "&:hover": {color: "primary.main"},
                            }}
                        >
                            <EmailIcon fontSize="medium"/>
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="inherit"
                            href="https://www.youtube.com/channel/UC1QY8Wks-NnXZMRVRfI9_Sg"
                            target="_blank"
                            sx={{
                                "&:hover": {color: "primary.main"},
                            }}
                        >
                            <YouTubeIcon fontSize="medium"/>
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}