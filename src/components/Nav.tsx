import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';

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
                                <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Imaginary.png`} alt="PROJECT STELLARON" sx={{ height: "64px", width: "64px", backgroundColor: `${theme.appbar.backgroundColor}` }}>
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
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Character.png`)} alt="Characters" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
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
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Lightcone.png`)} alt="Lightcones" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            letterSpacing: ".1rem",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        LIGHT CONES
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                        <ButtonBase disableRipple href={`/project-stellaron/relics`}>
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Relic.png`)} alt="Relics" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            letterSpacing: ".1rem",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        RELICS
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                        <ButtonBase disableRipple href={`/project-stellaron/planner`}>
                            <CardHeader
                                avatar={
                                    <ChecklistIcon sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            letterSpacing: ".1rem",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        ASCENSION PLANNER
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                        <ButtonBase disableRipple href={`/project-stellaron/banners`}>
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Warp.png`)} alt="Lightcones" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            letterSpacing: ".1rem",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        BANNERS
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