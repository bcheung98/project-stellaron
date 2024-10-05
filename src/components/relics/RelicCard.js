import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, Box, Dialog } from "@mui/material";
import { GetRarityColor } from "../../helpers/RarityColors";
import RelicPopup from "./RelicPopup";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const RelicCard = (props) => {

    const theme = useTheme();

    let { name, rarity } = props.relic;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const size = "128px"

    return (
        <Card
            sx={{
                width: size,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px 25px 5px 5px",
            }}
        >
            <Box onClick={() => handleClickOpen()} sx={{ cursor: "pointer" }}>
                <img src={`${process.env.REACT_APP_URL}/relics/sets/${name.split(" ").join("_")}/${props.relic.pieces[0].type}.png`} alt={name}
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: "rgb(32, 32, 32)",
                        backgroundSize: "100%",
                    }}
                    onError={ErrorLoadingImage}
                />
                <Box
                    sx={{
                        mt: "-50px",
                        textAlign: "center",
                        borderBottom: `7px solid ${GetRarityColor(rarity)}`,
                    }}
                >
                    <Box sx={{ height: "50px" }} />
                </Box>
            </Box>
            <CardContent
                sx={{
                    textAlign: "center",
                    backgroundColor: `${theme.table.header.backgroundColor}`,
                    height: "100%"
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body1" sx={{ color: "white", cursor: "pointer" }} onClick={() => handleClickOpen()}>
                        {props.relic.displayName ? props.relic.displayName : name}
                    </Typography>
                </Box>
            </CardContent>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
            >
                <RelicPopup relic={props.relic} />
            </Dialog>
        </Card>
    )

}

export default RelicCard;