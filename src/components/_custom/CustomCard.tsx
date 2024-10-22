import React from "react"

// Component imports
import { CustomTooltip } from "../_custom/CustomTooltip"

// MUI imports
import { useTheme, SxProps, Typography, ButtonBase, Box, Card } from "@mui/material"

// Helper imports
import { GetRarityColor, GetBackgroundColor } from "../../helpers/RarityColors"
import zoomImageOnHover from "../../helpers/zoomImageOnHover"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

interface CustomCardProps {
    name: string,
    id?: string,
    displayName?: string,
    type: "character" | "lightcone" | "relic",
    rarity?: 5 | 4 | 3 | 2 | 1,
    variant?: "icon" | "avatar",
    size?: string,
    showName?: boolean,
    info?: {
        element?: string,
        path?: string
    },
    disableTooltip?: boolean,
    disableLink?: boolean,
    disableZoomOnHover?: boolean
}

function CustomCard({
    name,
    id = name.toLowerCase(),
    displayName = name,
    type,
    rarity = 3,
    variant = "icon",
    size = variant === "icon" ? "64px" : "188px",
    showName = variant === "avatar" ? true : false,
    info,
    disableTooltip = showName,
    disableLink = false,
    disableZoomOnHover = false
}: CustomCardProps) {

    const theme = useTheme()

    const aspectRatio = () => {
        if (variant === "icon") {
            return "1 / 1"
        }
        else {
            if (type === "character") {
                return "374 / 512"
            }
            else {
                return "348 / 408"
            }
        }
    }

    const backgroundColor = () => {
        const baseBG = theme.materialImage.backgroundColor
        if (variant === "icon") {
            return baseBG
        }
        else {
            let opacity
            type === "character" ? opacity = 0.45 : opacity = 0.75
            return `linear-gradient(${baseBG} 60%, ${GetBackgroundColor(rarity, opacity)} 100%)`
        }
    }

    const handleHover = (direction: "enter" | "leave") => {
        !disableZoomOnHover && zoomImageOnHover(direction, `${id}-card-image`, cardImageStyle.transform)
    }

    let imageURL
    if (type === "character") { imageURL = `${process.env.REACT_APP_URL}/characters/${variant}s/${name.split(" ").join("_")}.png` }
    if (type === "lightcone") { imageURL = `${process.env.REACT_APP_URL}/lightcones/${variant === "icon" ? "small" : "medium"}/${name.split(" ").join("_")}.png` }

    const href = disableLink ? "" : `${process.env.REACT_APP_BASENAME}/${type}s/${name.split(" ").join("_").toLowerCase()}`

    const cardStyle: SxProps = {
        width: size,
        height: "auto",
        background: backgroundColor(),
        border: "solid",
        borderWidth: variant === "icon" ? "2px" : "1px",
        borderColor: variant === "icon" ? GetRarityColor(rarity) : theme.border.color,
        borderRadius: variant === "icon" ? "5px" : "5px 25px 5px 5px",
        boxSizing: "content-box",
        containerType: "inline-size",
        position: "relative"
    }

    const cardImageStyle: React.CSSProperties = {
        width: size,
        height: variant === "icon" ? size : "auto",
        aspectRatio: aspectRatio(),
        boxSizing: "content-box",
        boxShadow: variant === "icon" ? `inset 0 0 30px 5px ${GetBackgroundColor(rarity)}` : "none",
        transform: variant === "avatar" && type === "character" ? "translate(0px, -10px)" : "translate(0px, 0px)",
    }

    const smallIconStyle: React.CSSProperties = {
        width: `calc(${size} / 5.25)`,
        height: `calc(${size} / 5.25)`,
        minWidth: "16px",
        minHeight: "16px",
        backgroundColor: theme.paper.backgroundColor,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "32px",
        marginBottom: "10px",
        boxSizing: "border-box",
        padding: "4px"
    }

    return (
        <Card
            sx={cardStyle}
            onMouseEnter={() => handleHover("enter")}
            onMouseLeave={() => handleHover("leave")}
        >
            {
                info &&
                <Box
                    sx={{
                        display: "grid",
                        position: "absolute",
                        zIndex: 5,
                        top: "10px",
                        left: "10px",
                    }}
                >
                    {
                        info.element !== undefined &&
                        <CustomTooltip title={info.element} arrow placement="top">
                            <img style={smallIconStyle} src={`${process.env.REACT_APP_URL}/elements/Element_${info.element}.png`} alt={info.element} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    }
                    {
                        info.path !== undefined &&
                        <CustomTooltip title={info.path} arrow placement="top">
                            <img style={smallIconStyle} src={`${process.env.REACT_APP_URL}/paths/The_${info.path}.png`} alt={info.path} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    }
                </Box>
            }
            <ButtonBase disableRipple href={href} target="_blank">
                <CustomTooltip title={!disableTooltip ? displayName : ""} arrow placement="top">
                    <img
                        src={imageURL} alt={name}
                        id={`${id}-card-image`}
                        style={cardImageStyle}
                        loading="lazy"
                        onError={ErrorLoadingImage}
                    />
                </CustomTooltip>
            </ButtonBase>
            <Box
                sx={{
                    mt: variant === "icon" ? "0px" : `${type === "character" ? "-10px" : "50px"}`,
                    borderBottom: variant === "icon" ? "none" : `calc(${size} / 25) solid ${GetRarityColor(rarity)}`,
                }}
            >
                {
                    showName &&
                    <Box>
                        <ButtonBase disableRipple href={href} target="_blank"
                            sx={{
                                position: "absolute",
                                bottom: "3%",
                                left: "50%",
                                transform: "translate(-50%, 0%)",
                                width: "95%"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: `white`,
                                    fontSize: type === "character" ? "20px" : "16.5px",
                                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                    textAlign: "center",
                                }}
                            >
                                {displayName}
                                <br />
                                <Typography
                                    component="span"
                                    sx={{
                                        color: `rgb(255, 208, 112)`,
                                        fontSize: "20px",
                                        textShadow: "#e3721b 1px 1px 10px",
                                        userSelect: "none",
                                        textAlign: "center"
                                    }}
                                >
                                    {[...Array(rarity).keys()].map(() => "✦")}
                                </Typography>
                            </Typography>
                        </ButtonBase>

                    </Box>
                }
            </Box>
        </Card>
    )

}

export default CustomCard