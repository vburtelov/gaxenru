/*
 * @author Vadim Burtelov https://burtelov.ru/
 */
import * as React from "react";
import {Divider} from "@mui/material";
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
                                    mdSizes = [3, 7, 2],
                                }) {
    return (
        <Box id={id} bgcolor="background.default">
            <Grid container my={8} justifyContent="space-between">
                <Grid xs={2} md={mdSizes[0]}>
                    <Divider sx={{marginTop: "1rem"}}/>
                </Grid>
                <Grid xs={8} md={mdSizes[1]}>
                    <Typography variant="h3"
                                color="secondary.contrastText"
                                fontWeight="lighter"
                                mb={4}>
                        <i>{sectionTitle}</i>
                    </Typography>
                    {details.map((detail) =>
                        <Typography mb={2}
                                    variant="subtitle1"
                                    color="secondary.contrastText"
                                    key={detail.length}>
                            {detail}
                        </Typography>
                    )}
                    <Button

                        variant="outlined"
                        href={buttonLink}
                        mt={2}
                        target="_top" sx={{
                        width: {xs: "100%", md: "50%"},
                        fontSize: {xs: "large", md: "medium"}
                    }}>
                        {buttonLabel}
                    </Button>
                </Grid>
                <Grid xs={2} md={mdSizes[2]}>
                </Grid>
            </Grid>
        </Box>
    );
}
