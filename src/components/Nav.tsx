import React from "react"

// MUI imports
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import { Toolbar, Typography, CardHeader, Avatar, ButtonBase, IconButton, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, ListItemIcon, Divider, Collapse } from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

// Helper imports
import { CustomTooltip } from "../helpers/CustomTooltip"

const drawerWidth = 280
const iconSize = "32px"

function Nav() {

    const theme = useTheme()

    let initialDrawerState = window.location.href.endsWith("/project-stellaron/") ? true : false
    const [drawerOpen, setDrawerOpen] = React.useState(initialDrawerState)
    const toggleDrawerState = () => {
        setDrawerOpen(!drawerOpen)
    }

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdownState = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <React.Fragment>
            <AppBar position="fixed"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawerState}
                        sx={{ color: `${theme.text.color}`, ml: "-10px", mr: "15px" }}
                    >
                        {
                            drawerOpen ?
                                <MenuOpenIcon />
                                :
                                <MenuOpenIcon sx={{ transform: "rotate(180deg)" }} />
                        }
                    </IconButton>
                    <ButtonBase
                        disableRipple
                        href={`/project-stellaron/`}
                    >
                        <CardHeader
                            avatar={
                                <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Imaginary.png`} alt="PROJECT Stellaron" sx={{ height: "48px", width: "48px" }} />
                            }
                            title={
                                <Typography variant="h6"
                                    sx={{
                                        letterSpacing: ".3rem",
                                        color: `${theme.text.color}`,
                                    }}
                                >
                                    PROJECT STELLARON
                                </Typography>
                            }
                            sx={{ px: 0 }}
                        />
                    </ButtonBase>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={drawerOpen}
                sx={{ mr: 5, [`& .MuiDrawer-paper`]: { borderRight: `1px solid ${theme.border.color}`, backgroundColor: `${theme.appbar.backgroundColor}`, pt: 2.5 } }}
            >
                {/* Empty toolbar necessary for content to be below app bar */}
                <Toolbar />
                <List>
                    {
                        navItems.map((item, index) => (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{ mx: "13px" }}
                            >
                                <ButtonBase disableRipple href={item.link}>
                                    <ListItemButton
                                        disableTouchRipple
                                        sx={[
                                            {
                                                px: "4px",
                                                py: 0,
                                                borderRadius: "5px",
                                                "&:hover, &:focus": {
                                                    backgroundColor: `${theme.table.body.hover}`
                                                }
                                            },
                                            drawerOpen ?
                                                {
                                                    width: drawerWidth * 0.8,
                                                    height: "50px",
                                                    my: 0,
                                                    justifyContent: "initial"
                                                }
                                                :
                                                {
                                                    width: "40px",
                                                    height: "40px",
                                                    my: "5px",
                                                    justifyContent: "center"
                                                }
                                        ]}
                                    >
                                        <CustomTooltip title={!drawerOpen ? item.primaryText : null} arrow placement="right">
                                            <ListItemAvatar
                                                sx={[
                                                    { minWidth: 0, justifyContent: "center" },
                                                    drawerOpen ?
                                                        { mr: 2.5 }
                                                        :
                                                        { mr: "auto" },
                                                ]}
                                            >
                                                {item.primaryIcon}
                                            </ListItemAvatar>
                                        </CustomTooltip>
                                        <ListItemText
                                            primary={item.primaryText}
                                            primaryTypographyProps={{ color: `${theme.text.color}`, fontSize: "11pt" }}
                                            sx={[
                                                drawerOpen ?
                                                    { opacity: 1 }
                                                    :
                                                    { opacity: 0 }
                                            ]}
                                        />
                                    </ListItemButton>
                                </ButtonBase>
                            </ListItem>
                        ))
                    }
                </List>
                <Divider variant="middle" />
                <List>
                    <ListItem
                        disablePadding
                        sx={{ mx: "17px" }}
                    >
                        <ButtonBase disableRipple onClick={toggleDropdownState}>
                            <ListItemButton
                                disableTouchRipple
                                sx={[
                                    {
                                        px: "4px",
                                        py: 0,
                                        borderRadius: "5px",
                                        "&:hover": {
                                            backgroundColor: `${theme.table.body.hover}`
                                        }
                                    },
                                    drawerOpen ?
                                        {
                                            width: drawerWidth * 0.8,
                                            height: "50px",
                                            my: 0,
                                            justifyContent: "initial"
                                        }
                                        :
                                        {
                                            width: "32px",
                                            height: "40px",
                                            my: "5px",
                                            justifyContent: "center"
                                        }
                                ]}
                            >
                                <CustomTooltip title={!drawerOpen ? "Other Games" : null} arrow placement="right">
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: "center",
                                                color: `${theme.text.color}`
                                            },
                                            drawerOpen ?
                                                { mr: 2.5 }
                                                :
                                                { mr: "auto" },
                                        ]}
                                    >
                                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemIcon>
                                </CustomTooltip>
                                <ListItemText
                                    primary="Other Games"
                                    primaryTypographyProps={{ color: `${theme.text.color}`, fontSize: "11pt" }}
                                    sx={[
                                        drawerOpen ?
                                            { opacity: 1 }
                                            :
                                            { opacity: 0 }
                                    ]}
                                />
                            </ListItemButton>
                        </ButtonBase>
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{ mx: "13px" }}
                    >
                        <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                {
                                    linkItems.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ButtonBase disableRipple href={item.link}>
                                                <ListItemButton
                                                    disableTouchRipple
                                                    sx={[
                                                        {
                                                            px: "4px",
                                                            py: 0,
                                                            borderRadius: "5px",
                                                            "&:hover": {
                                                                backgroundColor: `${theme.table.body.hover}`
                                                            }
                                                        },
                                                        drawerOpen ?
                                                            {
                                                                width: drawerWidth * 0.8,
                                                                height: "50px",
                                                                my: 0,
                                                                justifyContent: "initial"
                                                            }
                                                            :
                                                            {
                                                                width: "40px",
                                                                height: "40px",
                                                                my: "5px",
                                                                justifyContent: "center"
                                                            }
                                                    ]}
                                                >
                                                    <CustomTooltip title={!drawerOpen ? item.primaryText : null} arrow placement="right">
                                                        <ListItemAvatar
                                                            sx={[
                                                                { minWidth: 0, justifyContent: "center" },
                                                                drawerOpen ?
                                                                    { mr: 2.5 }
                                                                    :
                                                                    { mr: "auto" },
                                                            ]}
                                                        >
                                                            {item.primaryIcon}
                                                        </ListItemAvatar>
                                                    </CustomTooltip>
                                                    <ListItemText
                                                        primary={item.primaryText}
                                                        primaryTypographyProps={{ color: `${theme.text.color}`, fontSize: "11pt" }}
                                                        secondary={item.secondaryText}
                                                        secondaryTypographyProps={{ color: `${theme.text.color}`, fontSize: "9pt" }}
                                                        sx={[
                                                            drawerOpen ?
                                                                { opacity: 1 }
                                                                :
                                                                { opacity: 0 }
                                                        ]}
                                                    />
                                                </ListItemButton>
                                            </ButtonBase>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Collapse>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )

}

export default Nav

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    "& .MuiDrawer-paper": openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    "& .MuiDrawer-paper": closedMixin(theme),
                },
            },
        ],
    }),
)

const linkItems = [
    {
        primaryIcon: <Avatar variant="square" src="https://raw.githubusercontent.com/bcheung98/project-irminsul-assets/main/icons/Sumeru.png" alt="Project Irminsul" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Project Irminsul",
        secondaryText: "Genshin Impact",
        link: "https://bcheung98.github.io/project-irminsul/"
    },
    {
        primaryIcon: <Avatar variant="square" src="https://raw.githubusercontent.com/bcheung98/project-tacetite-assets/main/icons/Black_Shores.png" alt="Project Tacetite" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Project Tacetite",
        secondaryText: "Wuthering Waves",
        link: "https://bcheung98.github.io/project-tacetite/"
    }
]

const navItems = [
    {
        primaryIcon: <Avatar variant="square" src={`${process.env.REACT_APP_URL}/elements/Element_Imaginary.png`} alt="Home" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Home",
        link: "/project-stellaron/"
    },
    {
        primaryIcon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Character.png`)} alt="Characters" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Characters",
        link: "/project-stellaron/characters/"
    },
    {
        primaryIcon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Lightcone.png`)} alt="Light Cones" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Light Cones",
        link: "/project-stellaron/lightcones/"
    },
    {
        primaryIcon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Relic.png`)} alt="Relics" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Relics",
        link: "/project-stellaron/relics/"
    },
    {
        primaryIcon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="Ascension Planner" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Ascension Planner",
        link: "/project-stellaron/planner/"
    },
    {
        primaryIcon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Warp.png`)} alt="Banner Archive" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Banner Archive",
        link: "/project-stellaron/banners/"
    }
]