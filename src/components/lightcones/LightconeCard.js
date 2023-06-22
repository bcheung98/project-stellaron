import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeCard = (props) => {

    const theme = useTheme();

    let { name, path, rarity } = props.lightcone;

    const smallIcon = {
        width: "30px",
        height: "30px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "15px",
        marginTop: "5px",
        marginRight: "10px",
    }

    return (
        <React.Fragment>
            <Card variant="outlined"
                sx={{
                    width: "350px",
                    height: "150px",
                    mx: "auto",
                    my: "10px",
                    backgroundColor: `${theme.card.backgroundColor}`,
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <CardContent sx={{ py: "10px" }}>
                    <Box sx={{ display: "flex" }}>
                        <CustomTooltip title={path} arrow placement="top">
                            <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={path} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <ButtonBase disableRipple>
                            <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="h5">
                                {name}
                            </Typography>
                        </ButtonBase>
                    </Box>
                </CardContent>
            </Card>
        </React.Fragment>
    )

}

export default LightconeCard;