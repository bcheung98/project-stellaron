import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import MaterialGrid from "../../helpers/MaterialGrid";

const CharacterCard = (props) => {

    const theme = useTheme();

    let { name, rarity, element, path } = props.character;
    const characterIcon = {
        width: "115px",
        height: "180px",
        objectFit: "cover",
        marginLeft: "-18px",
        marginTop: "-15px",
        backgroundColor: "rgb(32, 32, 32)",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "contain"
    }
    const smallIcon = {
        width: "32px",
    }

    return (
        <React.Fragment>
            <Card variant="outlined"
                sx={{
                    width: "315px",
                    height: "150px",
                    mx: "auto",
                    my: "10px",
                    backgroundColor: `${theme.card.backgroundColor}`,
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    fontFamily: "Genshin, sans-serif"
                }}
            >
                <CardContent sx={{ py: "10px" }}>
                    <Grid container>
                        <Grid xs>
                            <ButtonBase disableRipple>
                                <img src={(`${process.env.REACT_APP_URL}/characters/icons/Character_${name.split(" ").join("_")}_Icon.png`)} alt={name}
                                    style={characterIcon} />
                            </ButtonBase>
                        </Grid>
                        <Grid xs={7.5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "relative"
                                }}
                            >
                                <ButtonBase disableRipple>
                                    <Typography sx={{ color: `${theme.text.color}`, fontWeight: "450" }} variant="h5">
                                        {name}
                                    </Typography>
                                </ButtonBase>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <CustomTooltip title={element} arrow placement="top">
                                    <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} />
                                </CustomTooltip>
                                <CustomTooltip title={path} arrow placement="top">
                                    <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={path} />
                                </CustomTooltip>
                            </Box>
                            <Grid xs={8} sx={{ mt: "15px" }}>
                                <MaterialGrid character={props.character} />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </React.Fragment >
    )

}

export default CharacterCard;