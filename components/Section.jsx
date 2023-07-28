/*
 * @author Vadim Burtelov https://burtelov.ru/
 */

"use client";

import * as React from "react";
import {Divider, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Section({
                                    id,
                                    sectionTitle = "TFP СЪЕМКА",
                                    details = [],
                                    buttonLabel = "ПРИСЛАТЬ ФОТОГРАФИИ",
                                    buttonLink = "mailto:i@gaxen.ru",
                                    bgColor = "",
                                    mdSizes = [3, 7, 2],
                                }) {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box id={id} bgcolor={bgColor}>
            <Grid container my={isMdScreen ? 4 : 8} justifyContent="space-between">
                <Grid xs={2} md={mdSizes[0]}>
                    <Divider sx={{marginTop: "1rem"}}/>
                </Grid>
                <Grid xs={8} md={mdSizes[1]}>
                    <Typography variant={isMdScreen ? 'h4' : 'h3'} fontWeight="lighter"
                                mb={isMdScreen ? 4 : 8}>
                        <i>{sectionTitle}</i>
                    </Typography>
                    {details.map((detail) =>
                        <Typography mb={2} variant="subtitle1" key={detail.length}>
                            {detail}
                        </Typography>
                    )}
                    <Button variant="outlined" size={isMdScreen ? "medium" : "large"} href={buttonLink}
                            target="_top" sx={{width: isMdScreen ? "100%" : "50%"}}>
                        {buttonLabel}
                    </Button>
                </Grid>
                <Grid xs={2} md={mdSizes[2]}>
                </Grid>
            </Grid>
        </Box>
    );
}
