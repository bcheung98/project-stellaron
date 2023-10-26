import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell } from "../../helpers/CustomTable";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar, TableRow } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const WeaponIconBackground = (index, len) => {
    if (index === 0 && len === 4) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.webp)`,
            backgroundSize: "100%",
            backgroundPosition: "50% 50%",
        }
    }
    if (index <= 1 && len === 5) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.webp)`,
            backgroundSize: "100%",
            backgroundPosition: "50% 50%",
        }
    }
    if (index !== 0 && len === 4) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.webp)`,
            backgroundSize: "100%",
            backgroundPosition: "50% 50%",
        }
    }
    if (index >= 2 && len === 5) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.webp)`,
            backgroundSize: "100%",
            backgroundPosition: "50% 50%",
        }
    }
}

let CurrentBanner = (startDate, endDate) => {
    let today = new Date();
    if (today >= new Date(startDate) && today < new Date(endDate)) {
        return { backgroundColor: "rgb(90, 85, 80)" }
    }
}

const CharacterBannerRow = (props) => {

    const theme = useTheme();

    let { row, index } = props;

    return (
        <React.Fragment>
            <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)} >

                { /* Version */}
                <StyledTableCell>
                    <Typography sx={{ fontWeight: "bold" }}>{row.version}</Typography>
                    <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
                </StyledTableCell>

                { /* Banners */}
                <StyledTableCell>
                    {
                        <Box sx={{ display: "flex" }}>
                            {
                                row.banner.map((lc, index) => (
                                    <ButtonBase disableRipple href={`/project-stellaron/lightcone/${lc.split(" ").join("_").toLowerCase()}`} target="_blank" key={lc} sx={{ m: "2px" }}>
                                        <CustomTooltip title={lc} arrow placement="top">
                                            <Avatar variant="square" src={`${process.env.REACT_APP_URL}/lightcones/small/${lc}.png`} alt={lc}
                                                sx={{
                                                    mx: "2px",
                                                    border: `2px solid ${theme.border.color}`,
                                                    borderRadius: "5px",
                                                    width: "64px",
                                                    height: "64px",
                                                    backgroundColor: "rgb(9, 24, 39)",
                                                }}
                                                style={WeaponIconBackground(index, row.banner.length)}
                                            >
                                                <img src={`${process.env.REACT_APP_URL}/lightcones/small/${lc}.png`} alt={lc} onError={ErrorLoadingImage}
                                                    style={{
                                                        mx: "2px",
                                                        border: `1px solid ${theme.border.color}`,
                                                        borderRadius: "5px",
                                                        width: "64px",
                                                        height: "64px",
                                                    }}
                                                />
                                            </Avatar>
                                        </CustomTooltip>
                                    </ButtonBase>
                                ))
                            }
                        </Box>
                    }
                </StyledTableCell>

            </TableRow>
        </React.Fragment >
    )
}

export default CharacterBannerRow;