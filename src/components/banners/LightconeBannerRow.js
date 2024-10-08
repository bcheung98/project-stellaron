import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell } from "../../helpers/CustomTable";
import { Box, Typography, ButtonBase, TableRow } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

let CurrentBanner = (startDate, endDate) => {
    let today = new Date();
    if (today >= new Date(startDate) && today < new Date(endDate)) {
        return { backgroundColor: "rgb(90, 85, 80)" }
    }
}

const GetRarityBackground = (lc) => {
    if (lc !== undefined) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_${lc.rarity}_Star.webp)`
    }
    else {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.webp)`
    }
}

const CharacterBannerRow = (props) => {

    const theme = useTheme();

    let { row, index, lightcones } = props;

    return (
        <React.Fragment>
            <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)} >

                { /* Version */}
                <StyledTableCell sx={{ width: "250px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>{row.version}</Typography>
                    <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
                </StyledTableCell>

                { /* Banners */}
                <StyledTableCell>
                    {
                        <Box sx={{ display: "flex" }}>
                            {
                                row.banner.map((lc, index) => {
                                    let currentLC = lightcones.find(l => l.name === lc)
                                    return (
                                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/lightcones/${lc.split(" ").join("_").toLowerCase()}`} target="_blank" key={index} sx={{ m: "2px" }}>
                                            <CustomTooltip title={lc} arrow placement="top">
                                                <img src={`${process.env.REACT_APP_URL}/lightcones/small/${lc.split(" ").join("_")}.png`}
                                                    alt={lc}
                                                    onError={ErrorLoadingImage}
                                                    style={{
                                                        marginLeft: "2px",
                                                        marginRight: "2px",
                                                        border: `1px solid ${theme.border.color}`,
                                                        borderRadius: "5px",
                                                        width: "64px",
                                                        height: "64px",
                                                        backgroundImage: GetRarityBackground(currentLC),
                                                        backgroundSize: "100%",
                                                        backgroundPosition: "50% 50%"
                                                    }}
                                                />
                                            </CustomTooltip>
                                        </ButtonBase>
                                    )
                                })
                            }
                        </Box>
                    }
                </StyledTableCell>

            </TableRow>
        </React.Fragment >
    )
}

const mapStateToProps = (state) => {
    return {
        lightcones: state.lightcones.lightcones
    }
}

export default connect(mapStateToProps)(CharacterBannerRow);