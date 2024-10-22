import React from "react";
import { useTheme } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, Paper, Typography } from "@mui/material";
import { StyledTableCell, StyledTableRows } from "../../_custom/CustomTable";

const CharacterStatsTable = (props) => {

    const theme = useTheme();

    let { stats } = props.character;

    const levels = ["1", "20", "20+", "30", "30+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80"];
    const rows = levels.map((level, index) => createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], stats.speed[index], stats.taunt[index]));

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
                        <StyledTableCell>
                            <Typography>
                                SPD
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Typography>
                                Taunt
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
                            <StyledTableCell>
                                <Typography variant="body2">
                                    {row.spd}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="body2">
                                    {row.taunt}
                                </Typography>
                            </StyledTableCell>
                        </StyledTableRows>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default CharacterStatsTable;

const createCharacterStats = (level, hp, atk, def, spd, taunt) => {
    return { level, hp, atk, def, spd, taunt }
}