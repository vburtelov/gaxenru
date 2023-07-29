/*
 * @author Vadim Burtelov https://burtelov.ru/
 */
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {Stack, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Section from "@/components/Section";

export default function Shoot() {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'), {noSsr: true});

    const commercialSection = (
        <Section id="commercial"
                 sectionTitle="КОММЕРЧЕСКАЯ СЪЕМКА"
                 details={[
                     "Я работаю исключительно в своем стиле. Ознакомиться с ним вы можете в моем инстаграме. При этом я всегда рад пожеланиям в рамках того, что я снимаю. Вне рамок своего стиля я не работаю. Если вы соглашаетесь на съемку у меня, это подразумевает то, что вы ознакомились с той стилистикой, в которой я работаю.",
                     "У меня нет сертификатов на съемки, но если вы хотите подарить съемку у меня кому-то, то в таком случае человек должен быть тоже знаком с моими работами и тем стилем, в котором нам предстоит работать.",
                     "Съемка длится примерно 2-3 часа (до результата). Почасовой оплаты и съемок у меня нет.",
                     "По итогу вы получаете от 20 обработанных снимков, исходники не отдаются. Также могут быть сделаны небольшие видео зарисовки.",
                     "Я всегда помогу вам с образом, местом и идеей для съемки. Но опять же - в рамках моей стилистики в фотографии. Некоторые съемки могут проходить полностью в студии, какие-то - в квартирах или на улице, или же и там, и там. Все зависит от идеи.",
                     "На съемку со мной нежелательно брать родственников, друзей, мужей, жен и т.д. Это может отвлекать от процесса. Со мной всегда работает моя команда, поэтому друзья в роли ассистентов не подойдут.",
                     "Если вы не пришли на съемку, не предупредили, забыли - задаток не возвращается. Отменить съемку можно за 3 суток до ее начала. Задаток будет возвращен за исключением расходов, понесенных на бронь студии, места, реквизита и проч. В случае болезни или других уважительных обстоятельств, съемка просто будет перенесена на другой день.",
                     "Съемка отменяется, если вы опаздываете на пол часа или более.",
                     "Я отдаю готовые работы от двух дней до 2 недель в зависимости от загруженности.",
                     "Я не занимаюсь глянцевой ретушью или изменением частей тела. Исключения: убираю какие-то небольшие несовершенства кожи.",
                     "Соглашаясь на коммерческую съемку, вы даете мне разрешение публиковать в своих соц.сетях (будущих и настоящих) результат нашей совместной работы. Покупка лицензий для брендов, изданий и прочее оговаривается нами отдельно в случае возникновения таких ситуаций. Если вы не хотите, чтобы съемка с вами была каким-либо образом обнародована мной, обязательно предупреждайте об этом ДО внесения задатка и начала подготовки.",
                     "Соглашаясь на коммерческую съемку, у вас есть право использовать полученные снимки в личных целях. Использовать и передавать эти работы брендам, журналам или иным сторонам без согласования со мной нельзя.",
                 ]}
                 buttonLabel="НАПИСАТЬ"
                 buttonLink="https://t.me/gaxenru"

        />
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <Stack direction="column">
                <Stack direction={isMdScreen ? "column" : "row"}>
                    <Link href="#commercial" sx={{textDecoration: "none", color: "text.primary"}}>
                        <Box sx={{
                            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url('commercial.webp')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "flex-end",
                            width: isMdScreen ? "100vw" : "calc(50vw - 2px)",
                            height: "100vh",
                            borderRight: "2px solid #ffffff",
                            cursor: "pointer",
                            ':hover h1': {
                                transform: 'translateX(10px)',
                                transition: 'transform 0.3s'
                            }
                        }}>
                            <Stack
                                direction="column"
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-start"
                                height="inherit"
                            >
                                <Container maxWidth="disable">
                                    <Typography variant={isMdScreen ? 'h3' : 'h1'} fontStyle="italic">
                                        COMMERCIAL
                                    </Typography>
                                </Container>
                            </Stack>
                        </Box>
                    </Link>
                    {isMdScreen && commercialSection}

                    <Link href="#tfp" sx={{textDecoration: "none", color: "text.primary"}}>
                        <Box sx={{
                            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url('tfp.webp')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "flex-end",
                            width: isMdScreen ? "100vw" : "calc(50vw - 2px)",
                            height: "100vh",
                            cursor: "pointer",
                            ':hover h1': {
                                transform: 'translateX(10px)',
                                transition: 'transform 0.3s'
                            }
                        }}>
                            <Stack
                                direction="column"
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-start"
                                height="inherit"
                            >
                                <Container maxWidth="disable">
                                    <Typography variant={isMdScreen ? 'h3' : 'h1'} fontStyle="italic">
                                        TFP
                                    </Typography>
                                </Container>
                            </Stack>
                        </Box>
                    </Link>
                </Stack>
                {!isMdScreen && commercialSection
                }
                <Section
                    id="tfp"
                    bgColor="secondary.main"
                    sectionTitle="TFP СЪЕМКА"
                    details={[
                        "Для того, чтобы уточнить, возможно ли между нами сотрудничество на условиях TFP, нужно\n" +
                        "прислать свои фотографии на i@gaxen.ru (обязательно с указанием города).\n" +
                        "Иные параметры и детали, вроде рост, вес и так далее не нужны. Я смогу ответить тем, с\n" +
                        "кем мне будет интересно посотрудничать.",
                        "Соглашаясь на съемку со мной на условиях TFP, вы даете мне разрешение использовать\n" +
                        "фотографии, которые будут сделаны, во всех моих соц.сетях (текущих и будущих), в любом\n" +
                        "своем портфолио, при печати книг или журналов, при продаже принтов, при продаже лицензий\n" +
                        "на использование фотографий брендами, музыкантами, журналами и т.д. Это обязательно\n" +
                        "условие, без которого я не работаю.",
                        "При съемке в студии, модель сама оплачивает зал на 3 часа. Эти затраты компенсируются\n" +
                        "мною после проведения съемки. Тоже самое с любой арендой помещения или интерьера, где\n" +
                        "требуется частичная предоплата для брони либо 100 процентная оплата.",
                    ]}
                    buttonLabel="ПРИСЛАТЬ ФОТОГРАФИИ"
                    buttonLink="mailto:i@gaxen.ru"
                />
            </Stack>
        </Box>
    );
}
