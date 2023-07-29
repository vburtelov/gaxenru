/*
 * @author Vadim Burtelov https://burtelov.ru/
 */
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Stack,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Button from "@mui/material/Button";
import Section from "@/components/Section";

export default function Home() {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'), {noSsr: true});
    return (
        <Box sx={{flexGrow: 1}}>
            <Stack direction="column">
                <Box style={{
                    backgroundImage: `url('main.webp')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "65%",
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
                            <Typography variant={isMdScreen ? 'h3' : 'h1'}>
                                A VISUAL
                            </Typography>
                            <Typography variant={isMdScreen ? 'h3' : 'h1'} fontStyle="italic">
                                EXPLORER
                            </Typography>
                        </Container>
                    </Stack>
                </Box>
                <Section id="telegram"
                         bgColor=""
                         sectionTitle="ЧУТЬ БОЛЬШЕ, ЧЕМ О ФОТОГРАФИИ В TELEGRAM-КАНАЛЕ GAXEN"
                         details={[
                             "GAXEN - это мой канал, в котором я пишу на непопулярные, но очень важные, на моей взгляд, темы в контексте фотографии и творчества.",
                             "Там я делюсь своим опытом, своим видением, а также стараюсь вдохновлять людей слышать себя и идти в творчество от сердца, отпуская все страхи.",
                         ]}
                         buttonLabel="Читать"
                         buttonLink="https://t.me/gaxxxen"
                         mdSizes={[3, 4, 5]}


                />
                <Box id="presets" bgcolor="secondary.main">
                    <Grid container my={isMdScreen ? 4 : 8} spacing={2}>
                        <Grid xs={3}>
                            <Divider sx={{
                                marginTop: "1rem"
                            }}/>
                        </Grid>
                        <Grid xs={3}>
                            <Typography variant={isMdScreen ? 'h4' : 'h3'} fontWeight="lighter">
                                ПРЕСЕТЫ
                            </Typography>
                        </Grid>
                        <Grid xs={5}>
                        </Grid>
                    </Grid>
                    <Container maxWidth="lg">
                        <Stack direction={isMdScreen ? 'column' : 'row'} spacing={2}
                               mb={isMdScreen ? 4 : 8} alignItems="center"
                               justifyContent="center">
                            <Card sx={{
                                height: '100%',
                                width: isMdScreen ? '80%' : '30vw',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="img1.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            MG CREATIVE PACK
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" minHeight={isMdScreen ? "false" : "180px"}>
                                            Данный пак был создан на основе моих принципов работы в цветокоррекции и
                                            состоит из пресетов, которые я сам сейчас использую в работе.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size={isMdScreen ? "medium" : "large"} variant="contained" fullWidth
                                            color="primary">
                                        КУПИТЬ
                                    </Button>
                                </CardActions>
                            </Card>
                            <Card sx={{
                                height: '100%',
                                width: isMdScreen ? '80%' : '30vw',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="img2.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            MG DAILY PACK
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" minHeight={isMdScreen ? "false" : "180px"}>
                                            Сборник пресетов, которые я создавал для себя для повседневного
                                            использования. Я люблю яркие и насыщенные цвета, и именно эти ощущения я и
                                            постарался отразить в новом паке.
                                            Пресеты подходят для любых кадров, не обязательно только повседневных.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size={isMdScreen ? "medium" : "large"} variant="contained" fullWidth
                                            color="primary">
                                        КУПИТЬ
                                    </Button>
                                </CardActions>
                            </Card>
                            <Card sx={{
                                height: '100%',
                                width: isMdScreen ? '80%' : '30vw',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="img3.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            MG VIDEO LUTS
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" minHeight={isMdScreen ? "false" : "180px"}>
                                            Данный пак — это сборник из 16 лутов, которые я сделал на основе своей
                                            обработки повседневных видео.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size={isMdScreen ? "medium" : "large"} variant="contained" fullWidth
                                            color="primary">
                                        КУПИТЬ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Stack>
                    </Container>
                </Box>
                <Section id="contact"
                         bgColor=""
                         sectionTitle="НАПИШИТЕ МНЕ"
                         details={[
                             "Если у вас есть какие-то вопросы или предложения, не стесняйтесь написать мне.",
                         ]}
                         buttonLabel="НАПИСАТЬ"
                         buttonLink="https://t.me/gaxenru"
                         mdSizes={[3, 4, 5]}
                />


            </Stack>
        </Box>
    );
}