// MUI imports
import { useTheme, SxProps, Box, Card, Typography } from "@mui/material"

// Helper imports
import { CustomTooltip } from "./CustomTooltip"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

interface MaterialImageProps {
    name: string,
    rarity: string | number | undefined,
    cost: string | number,
    img: string | undefined,
    size?: string
}

function MaterialImage({
    name,
    rarity = 1,
    cost,
    img = `${process.env.REACT_APP_URL}/images/Unknown.png`,
    size = "72px"
}: MaterialImageProps) {

    const theme = useTheme()

    const URL = `${process.env.REACT_APP_URL}/materials/${img}.png`

    const cardStyle: SxProps = {
        width: size,
        height: "auto",
        background: `rgb(20, 20, 20)`,
        borderRadius: "5px 15px 5px 5px",
        containerType: "inline-size",
        overflow: "hidden"
    }

    const cardImageStyle: React.CSSProperties = {
        width: size,
        height: size,
        padding: "7.5px",
        backgroundSize: "contain",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        boxSizing: "border-box",
    }

    return (
        <Card sx={cardStyle} elevation={2}>
            <Box sx={{ height: size, overflow: "hidden" }}>
                <CustomTooltip title={name} arrow placement="top">
                    <img
                        src={URL} alt={name}
                        style={cardImageStyle}
                        loading="lazy"
                        onError={ErrorLoadingImage}
                    />
                </CustomTooltip>
            </Box>
            <Box
                sx={{
                    textAlign: "center",
                    py: "2.5px"
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `${theme.font.styled.family}`,
                        color: `rgb(208, 208, 208)`,
                        fontSize: cost.toLocaleString().length < 11 ? `calc(${size} / 5)` : `calc(${size} / 6)`,
                    }}
                >
                    {cost}
                </Typography>
            </Box>
        </Card>
    )

}

export default MaterialImage