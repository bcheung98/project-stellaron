import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardMedia, CardContent, ButtonBase, Box } from "@mui/material";
import { GetBackgroundColor, GetRarityColor } from "../../helpers/RarityColors";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const RelicCard = (props) => {

    const theme = useTheme();

    let { name } = props.relic;

    return (
        <Card
            sx={{
                mr: "18px",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px 25px 5px 5px",
            }}
        >

        </Card>
    )

}

export default RelicCard;