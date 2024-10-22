import React from "react";
import { useTheme } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, Paper, Typography } from "@mui/material";
import { StyledTableCell, StyledTableRows } from "../../_custom/CustomTable";
import { LightconeStats } from "../../../data/LightconeStats";

const LightconeStatsTable = (props) => {

    const theme = useTheme();

    let { stats } = props.lightcone;

    const levels = ["1", "20", "20+", "30", "30+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80"];
    const hp = LightconeStats["hp"][stats.hp.toString()];
    const atk = LightconeStats["atk"][stats.atk.toString()];
    const def = LightconeStats["def"][stats.def.toString()];
    const rows = levels.map((level, index) => createLightconeStats(level, hp[index], atk[index], def[index]));

    return (
        <TableContainer
            component={Paper}
            sx={{
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Table sx={{ backgroundColor: `${theme.table.body.backgroundColor}` }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>
                            <Typography>
                                Level
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Typography>
                                HP
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Typography>
                                ATK
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Typography>
                                DEF
                            </Typography>
                        </StyledTableCell>
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRows key={row.level}>
                            <StyledTableCell>
                                <Typography variant="body2">
                                    {row.level}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="body2">
                                    {Number(row.hp).toLocaleString()}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="body2">
                                    {row.atk}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="body2">
                                    {row.def}
                                </Typography>
                            </StyledTableCell>
                        </StyledTableRows>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default LightconeStatsTable;

const createLightconeStats = (level, hp, atk, def) => {
    return { level, hp, atk, def }
}