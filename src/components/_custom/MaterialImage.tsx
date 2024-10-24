// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Card, SxProps, Typography } from "@mui/material"

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
        background: `rgb(25, 25, 25)`,
        border: `1px solid ${theme.border.color}`,
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
        <Card sx={cardStyle}>
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
                    p: 0,
                }}
            >
                <Typography
                    gutterBottom
                    sx={{
                        fontFamily: `${theme.font.styled.family}`,
                        color: `rgb(208, 208, 208)`,
                        fontSize: `14px`,
                    }}
                >
                    {cost}
                </Typography>
            </Box>
        </Card>
    )

}

export default MaterialImage