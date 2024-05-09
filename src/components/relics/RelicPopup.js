import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, AppBar, Typography, Avatar } from "@mui/material";
import { TabPanel, StyledTabs, StyledTab } from "../../helpers/CustomTabs";
import { GetRarityColor } from "../../helpers/RarityColors";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const RelicPopup = (props) => {

    const theme = useTheme();

    const pieceIcon = {
        width: "32px",
        height: "32px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "5px",
    }

    let { name, rarity, setEffect, pieces } = props.relic;

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
                width: "50vw",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundImage: `linear-gradient(to right, ${theme.appbar.backgroundColor}, 80%, ${GetRarityColor(rarity)})`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                }}
            >
                <Typography variant="h4" sx={{ color: "white", p: 2 }} >
                    {props.relic.displayName ? props.relic.displayName : name}
                </Typography>
            </AppBar>
            <Box sx={{ mt: "10px" }}>
                <StyledTabs value={tabValue} onChange={handleTabChange}>
                    {pieces.map((piece, index) => <StyledTab key={index} label={<img src={`${process.env.REACT_APP_URL}/relics/icons/${piece.type}.png`} style={pieceIcon} alt={piece.name} onError={ErrorLoadingImage} />} />)}
                </StyledTabs>
            </Box>
            {
                pieces.map((piece, index) => (
                    <TabPanel index={index} value={tabValue}>
                        <Typography variant="h5" sx={{ color: "white" }}>
                            {piece.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: "white", mb: "20px" }}>
                            <i>{formatPieceType(piece.type)}</i>
                        </Typography>
                        <Avatar src={`${process.env.REACT_APP_URL}/relics/sets/${name}/${piece.type}.png`} alt={piece.name}
                            sx={{
                                width: "128px",
                                height: "128px",
                                border: `2px solid ${theme.border.color}`,
                                borderRadius: "15px",
                                p: "10px",
                                mb: "20px",
                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                cursor: "pointer",
                            }}
                        >
                            <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "128px" }} />
                        </Avatar>
                        <Typography variant="body1" sx={{ color: "white" }}>
                            2-Pc: {setEffect.twoPiece}
                        </Typography>
                        {
                            setEffect.fourPiece &&
                            <Typography variant="body1" sx={{ color: "white" }}>
                                4-Pc: {setEffect.fourPiece}
                            </Typography>
                        }
                        <br />
                        <Typography variant="subtitle2" sx={{ color: "rgb(240, 240, 240)" }}>
                            <i>{piece.description}</i>
                        </Typography>
                    </TabPanel>
                ))
            }
        </Box>
    )

}

export default RelicPopup;

const formatPieceType = (type) => {
    switch (type) {
        case "head":
            type = "Head";
            break;
        case "hand":
            type = "Hands";
            break;
        case "body":
            type = "Body";
            break;
        case "feet":
            type = "Feet";
            break;
        case "orb":
            type = "Planar Sphere";
            break;
        case "rope":
            type = "Link Rope";
            break;
        default:
            break;
    }
    return type;
}