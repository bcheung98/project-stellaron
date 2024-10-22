import React from "react"

// Component imports
import { CustomTooltip } from "../_custom/CustomTooltip"

// MUI imports
import { useTheme, useMediaQuery, SxProps, Typography, ButtonBase, Box, Card, CardMedia } from "@mui/material"

// Helper imports
import { GetRarityColor, GetBackgroundColor } from "../../helpers/RarityColors"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

interface CustomCardProps {
    name: string,
    displayName?: string | undefined,
    type: "character" | "lightcone" | "relic",
    rarity?: number | undefined,
    size?: string,
    variant?: "icon" | "avatar",
    showInfo?: boolean,
    lightconeSize?: "small" | "medium",
    disableTooltip?: boolean,
    disableLink?: boolean
}

function CustomCard({
    name,
    displayName = name,
    type,
    rarity = 1,
    size = "64px",
    variant = "icon",
    showInfo = false,
    lightconeSize = "small",
    disableTooltip = showInfo,
    disableLink = false,
}: CustomCardProps) {


    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    let imageURL
    if (type === "character") { imageURL = `${process.env.REACT_APP_URL}/characters/icons/${name.split(" ").join("_")}.png` }
    if (type === "lightcone") { imageURL = `${process.env.REACT_APP_URL}/lightcones/${lightconeSize}/${name.split(" ").join("_")}.png` }

    const href = disableLink ? "" : `${process.env.REACT_APP_BASENAME}/${type}s/${name.split(" ").join("_").toLowerCase()}`

    const cardStyle: SxProps = {
        width: size,
        height: "auto",
        backgroundColor: `${theme.appbar.backgroundColor}`,
        border: `2px solid ${variant === "icon" ? GetRarityColor(rarity) : theme.border.color}`,
        position: "relative",
        boxSizing: "content-box",
        containerType: "inline-size",
    }

    const cardImageStyle: React.CSSProperties = {
        position: "relative",
        width: size,
        height: variant === "icon" ? size : "auto",
        borderBottom: variant === "icon" ? "none" : `calc(${size} / 16) solid ${GetRarityColor(rarity)}`,
        boxSizing: "content-box",
        boxShadow: variant === "icon" ? `inset 0 0 30px 5px ${GetBackgroundColor(rarity)}` : "none",
        objectFit: "contain",
    }

    return (
        <React.Fragment>
            <Card sx={cardStyle}>
                <ButtonBase disableRipple href={href} target="_blank">
                    <CustomTooltip title={!disableTooltip ? displayName : ""} arrow placement="top">
                        <img
                            src={imageURL} alt={name}
                            style={cardImageStyle}
                            loading="lazy"
                            onError={ErrorLoadingImage}
                        />
                    </CustomTooltip>
                </ButtonBase>
            </Card>
        </React.Fragment>
    )

}

export default CustomCard