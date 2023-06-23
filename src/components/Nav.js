import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";

const Nav = () => {

    const theme = useTheme();

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderBottom: `1px solid ${theme.border.color}`
            }}
        >
            <Container maxWidth="xl" sx={{ m: 0 }}>
                <Toolbar disableGutters>
                    <ButtonBase disableRipple href={`/project-stellaron/`}>
                        <CardHeader
                            avatar={
                                <Avatar src={(`${process.env.REACT_APP_URL}/images/Main_Icon.png`)} alt="PROJECT STELLARON" sx={{ height: "64px", width: "64px", backgroundColor: `${theme.appbar.backgroundColor}` }}>
                                    <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                                </Avatar>
                            }
                            title={
                                <Typography variant="h6" noWrap
                                    sx={{
                                        mr: 2,
                                        display: { xs: "none", md: "flex" },
                                        letterSpacing: ".3rem",
                                        color: `${theme.text.color}`,
                                        textDecoration: "none",
                                    }}
                                >
                                    PROJECT STELLARON
                                </Typography>
                            }
                        />
                    </ButtonBase>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <ButtonBase disableRipple href={`/project-stellaron/characters`}>
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/char.webp`)} alt="Characters" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body1" noWrap
                                        sx={{
                                            letterSpacing: ".1rem",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        CHARACTERS
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                        <ButtonBase disableRipple href={`/project-stellaron/lightcones`}>
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/lightcone.webp`)} alt="Lightcones" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body1" noWrap
                                        sx={{
                                            letterSpacing: ".1rem",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        LIGHTCONES
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}

export default Nav;