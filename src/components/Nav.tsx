import React from "react"

// Component imports
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

// MUI imports
import { useTheme, useMediaQuery, Avatar } from "@mui/material"

const iconSize = 32 //px

function Nav() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const onHomePage = window.location.pathname === "/"

    return (
        <React.Fragment>
            {
                matches ?
                    <NavDesktop onHomePage={onHomePage} navItems={navItems} linkItems={linkItems} />
                    :
                    <NavMobile onHomePage={onHomePage} navItems={navItems} linkItems={linkItems} />
            }
        </React.Fragment>
    )

}

export default Nav

export interface NavProps {
    onHomePage: boolean
    navItems: NavItem[]
    linkItems: NavItem[]
}

export interface NavItem {
    icon: JSX.Element,
    text: string,
    link: string
}

const navItems = [
    {
        icon: <Avatar variant="square" src={`${process.env.REACT_APP_URL}/factions/Stellaron_Hunters.png`} alt="Home" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Home",
        link: `${process.env.REACT_APP_BASENAME}/`
    },
    {
        icon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Character.png`)} alt="Characters" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Characters",
        link: `${process.env.REACT_APP_BASENAME}/characters/`
    },
    {
        icon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Lightcone.png`)} alt="Light Cones" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Light Cones",
        link: `${process.env.REACT_APP_BASENAME}/lightcones/`
    },
    {
        icon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Relic.png`)} alt="Relics" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Relics",
        link: `${process.env.REACT_APP_BASENAME}/relics/`
    },
    {
        icon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="Ascension Planner" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Ascension Planner",
        link: `${process.env.REACT_APP_BASENAME}/planner/`
    },
    {
        icon: <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/icons/Warp.png`)} alt="Banner Archive" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Banner Archive",
        link: `${process.env.REACT_APP_BASENAME}/banners/`
    }
]

const linkItems = [
    {
        icon: <Avatar variant="square" src="https://assets.irminsul.gg/main/game-icons/Genshin.png" alt="genshin.irminsul.gg" sx={{ width: iconSize, height: iconSize, borderRadius: "5px" }} />,
        text: "Genshin Impact",
        link: "https://genshin.irminsul.gg/"
    },
    {
        icon: <Avatar variant="square" src="https://assets.irminsul.gg/main/game-icons/ZZZ.png" alt="zzz.irminsul.gg" sx={{ width: iconSize, height: iconSize, borderRadius: "5px" }} />,
        text: "Zenless Zone Zero",
        link: "https://zzz.irminsul.gg/"
    },
    {
        icon: <Avatar variant="square" src="https://assets.irminsul.gg/main/game-icons/WutheringWaves.png" alt="wuwa.irminsul.gg" sx={{ width: iconSize, height: iconSize, borderRadius: "5px" }} />,
        text: "Wuthering Waves",
        link: "https://wuwa.irminsul.gg/"
    }
]
