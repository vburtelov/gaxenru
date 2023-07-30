/*
 * @author Vadim Burtelov https://burtelov.ru/
 */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import {usePathname} from "next/navigation";
import {Stack} from "@mui/material";

const pages = [
    {title: "TG", slug: "/#telegram"},
    {title: "ПРЕСЕТЫ", slug: "/#presets"},
    {title: "СЪЕМКА", slug: "/shoot"},
    {title: "ПОРТФОЛИО", slug: "https://www.behance.net/gaxen"},
    {title: "СВЯЗАТЬСЯ", slug: "/#contact"},
];

export default function ResponsiveAppBar() {
    const pathname = usePathname();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="absolute">
            <Container maxWidth="disable">
                <Toolbar disableGutters>
                    <Link
                        href="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Stack direction="row">
                            <Typography
                                variant='h4'
                                sx={{
                                    mr: 1,
                                    display: "flex",
                                    fontFamily: "monospace",
                                    letterSpacing: ".4rem",
                                    fontWeight: "lighter",
                                }}
                            >
                                MARK
                            </Typography>
                            <Typography variant='h4'
                                        sx={{
                                            mr: 2,
                                            display: "flex",
                                            fontFamily: "monospace",
                                            letterSpacing: ".6rem",
                                            fontWeight: "bold",
                                            fontStyle: "italic",
                                        }}> GAXEN</Typography>
                        </Stack>
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Link
                                key={page.slug}
                                href={page.slug}
                                target={page.slug.includes('https') ? "_blank" : "_self"}
                                rel={page.slug.includes('https') ? "noopener noreferrer" : ""}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, display: "block"}}
                                >
                                    <Typography
                                        fontWeight="bold"
                                        color={
                                            pathname === page.slug
                                                ? "primary"
                                                : "primary.contrastText"
                                        }
                                    >
                                        {page.title}
                                    </Typography>
                                </Button>
                            </Link>
                        ))}

                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "flex", md: "none"},
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page.slug}
                                    href={page.slug}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography
                                            color={
                                                pathname === page.slug
                                                    ? "primary"
                                                    : "primary.contrastText"
                                            }
                                        >
                                            {page.title}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}