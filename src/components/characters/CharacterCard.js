import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const CharacterCard = (props) => {

    const theme = useTheme();

    let { name, rarity, element, path } = props.character;
    const characterIcon = {
        width: "115px",
        height: "180px",
        objectFit: "cover",
        marginLeft: "-17px",
        marginTop: "-15px",
        backgroundColor: "rgb(32, 32, 32)",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "contain"
    }

    return (
        <React.Fragment>
            <Card variant="outlined"
                sx={{
                    width: "315px",
                    height: "175px",
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
                            <Typography
                                sx={{
                                    display: "block",
                                    m: "auto",
                                    mt: "5px",
                                    width: "95%",
                                    color: "rgb(255, 208, 112)"
                                }}
                                variant="h5"
                            >
                                {[...Array(rarity).keys()].map(i => "✦")}
                            </Typography>
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
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </React.Fragment >
    )

}

export default CharacterCard;