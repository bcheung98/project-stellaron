import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, Box, Avatar } from "@mui/material";
import { GetRarityColor } from "../../helpers/RarityColors";

const RelicCard = (props) => {

    const theme = useTheme();

    let { name, rarity } = props.relic;

    let iconURL = props.type === "cavern" ? `${process.env.REACT_APP_URL}/relics/sets/${name}/head.png` : `${process.env.REACT_APP_URL}/relics/sets/${name}/orb.png`;

    return (
        <Card
            sx={{
                width: "128px",
                mr: "18px",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px 25px 5px 5px",
            }}
        >
            <Box>
                <Avatar src={iconURL} alt={name}
                    sx={{
                        width: "128px",
                        height: "128px",
                        backgroundColor: `${theme.card.backgroundColor}`,
                    }}
                >
                    <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "128px" }} />
                </Avatar>
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
                    <Typography variant="body1" sx={{ color: "white" }}>
                        {props.relic.displayName ? props.relic.displayName : name}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )

}

export default RelicCard;