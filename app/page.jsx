/*
 * @author Vadim Burtelov https://burtelov.ru/
 */

import * as React from "react";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Button from "@mui/material/Button";

export default function Home() {
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
                <Box id="telegram">
                    <Grid container my="100px" justifyContent="space-between">
                        <Grid xs={3}>
                            <Divider sx={{
                                marginTop: "1rem"
                            }}/>
                        </Grid>
                        <Grid xs={3}>
                            <Typography variant="h3" fontWeight="lighter" mb={4}>
                                <i>ЧУТЬ БОЛЬШЕ,</i> ЧЕМ О ФОТОГРАФИИ В <i>TELEGRAM-</i>КАНАЛЕ <i>GAXEN</i>
                            </Typography>
                            <Typography mb={4} variant="subtitle1">
                                GAXEN - это мой канал, в котором я пишу на непопулярные, но очень важные, на моей
                                взгляд, темы в контексте фотографии и творчества.
                            </Typography>
                            <Typography variant="subtitle1" mb={8}>
                                Там я делюсь своим опытом, своим видением, а также стараюсь вдохновлять людей слышать
                                себя и идти в творчество от сердца, отпуская все страхи.
                            </Typography>
                            <Button variant="outlined" size="large" sx={{
                                width: "33%"
                            }}>
                                Читать
                            </Button>
                        </Grid>
                        <Grid xs={5}>
                            <Box width="500px" height="500px" bgcolor="red">

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box id="presets" sx={{height: "100vh", width: "100vw"}} bgcolor="secondary.main">
                    <Grid container mt="100px" mb="50px" spacing={2}>
                        <Grid xs={3}>
                            <Divider sx={{
                                marginTop: "1rem"
                            }}/>
                        </Grid>
                        <Grid xs={3}>
                            <Typography variant="h3" fontWeight="lighter" mb={4}>
                                ПРЕСЕТЫ
                            </Typography>
                        </Grid>
                        <Grid xs={5}>
                        </Grid>
                    </Grid>
                    <Grid container mb="100px" justifyContent="center" alignItems="center">
                        <Grid xs={3} justifyContent="center" alignItems="center">
                            <Card sx={{maxWidth: 400, height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            GAXEN CREATIVE PACK
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" minHeight="200px">
                                            Данный пак был создан на основе моих принципов работы в цветокоррекции и
                                            состоит из пресетов, которые я сама сейчас использую в работе.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        КУПИТЬ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs={3} justifyContent="center" alignItems="center">
                            <Card sx={{maxWidth: 400, height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            GAXEN DAILY PACK
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" minHeight="200px">
                                            Сборник пресетов, которые я создавала для себя для повседневного
                                            использования. Я довольно много снимаю и веду визуальный дневник, поэтому
                                            мне важно иметь возможность быстро и разнообразно обрабатывать то, что
                                            получается. Я люблю яркие и насыщенные цвета, и именно эти ощущения я и
                                            постаралась отразить в новом паке.
                                            Пресеты подходят для любых кадров, не обязательно только повседневных.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        КУПИТЬ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs={3} justifyContent="center" alignItems="center">
                            <Card sx={{maxWidth: 400, height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            GAXEN VIDEO LUTS
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" minHeight="200px">
                                            Данный пак — это сборник из 16 лутов, которые я сделала на основе своей
                                            обработки повседневных видео.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        КУПИТЬ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box id="contact">
                    <Grid container my="100px" justifyContent="space-between">
                        <Grid xs={3}>
                            <Divider sx={{
                                marginTop: "1rem"
                            }}/>
                        </Grid>
                        <Grid xs={3}>
                            <Typography variant="h3" fontWeight="lighter">
                                <i>НЕ СТЕСНЯЙТЕСЬ</i>
                            </Typography>
                            <Typography variant="h3" fontWeight="lighter" mb={4}>
                                НАПИСАТЬ МНЕ
                            </Typography>
                            <Typography mb={4} variant="subtitle1">
                                Если у вас есть какие-то вопросы или предложения, не стесняйтесь написать мне.
                            </Typography>
                            <Button variant="outlined" size="large" sx={{
                                width: "33%"
                            }}>
                                Читать
                            </Button>
                        </Grid>
                        <Grid xs={5}>
                        </Grid>
                    </Grid>
                </Box>


            </Stack>
        </Box>
    );
}