import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, ButtonBase, CardHeader, Typography, Avatar } from "@mui/material";
import { StyledTableRows, StyledTableCellNoVert } from "../../helpers/CustomTable";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterRow = (props) => {

    const theme = useTheme();

    let { row } = props;

    return (
        <StyledTableRows>

            { /* Name + Icon */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardHeader
                        avatar={
                            <ButtonBase disableRipple href={`/project-stellaron/character/${row.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                <img alt={row.name} src={(`${process.env.REACT_APP_URL}/characters/icons/Icon_${row.name.split(" ").join("_")}.png`)} style={{ width: "48px", cursor: "pointer" }} onError={ErrorLoadingImage} />
                            </ButtonBase>
                        }
                        title={
                            <ButtonBase disableRipple href={`/project-stellaron/character/${row.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                <Typography variant="body1"
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "rgb(30, 175, 255)",
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {row.displayName ? row.displayName : row.name}
                                </Typography>
                            </ButtonBase>
                        }
                        sx={{ p: 0 }}
                    />
                </Box>
            </StyledTableCellNoVert>

            { /* Rarity */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px" }} variant="h5">
                        {[...Array(row.rarity).keys()].map(() => "✦")}
                    </Typography>
                </Box>
            </StyledTableCellNoVert>

            {/* Combat Type */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardHeader
                        avatar={
                            <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_${row.element}.png`} alt={row.element}
                                sx={{
                                    width: "32px",
                                    height: "32px",
                                }}
                            >
                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "32px" }} />
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="body1">
                                {row.element}
                            </Typography>
                        }
                        sx={{ p: 0 }}
                    />
                </Box>
            </StyledTableCellNoVert>

            {/* Path */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardHeader
                        avatar={
                            <Avatar src={`${process.env.REACT_APP_URL}/paths/Path_The_${row.path}.png`} alt={row.path}
                                sx={{
                                    width: "32px",
                                    height: "32px",
                                }}
                            >
                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "32px" }} />
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="body1">
                                {row.path}
                            </Typography>
                        }
                        sx={{ p: 0 }}
                    />
                </Box>
            </StyledTableCellNoVert>

            { /* Release date */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1">
                        {`${row.releaseDate} (${row.version})`}
                    </Typography>
                </Box>
            </StyledTableCellNoVert>

        </StyledTableRows>
    )

}

export default CharacterRow;