/*
 * @author Vadim Burtelov https://burtelov.ru/
 */

import * as React from "react";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function Commercial() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Stack direction="column">
                <Box style={{
                    backgroundImage: `url('VLOV6818.jpg')`,
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "100vh",
                }}>
                    <Stack
                        direction="column"
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        height="inherit"
                    >
                        <Container maxWidth="disable">
                            <Typography variant="h1">
                                A VISUAL
                            </Typography>
                            <Typography variant="h1" fontStyle="italic">
                                EXPLORER
                            </Typography>
                        </Container>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}