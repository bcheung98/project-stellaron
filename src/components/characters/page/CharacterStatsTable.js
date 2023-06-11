import React from "react";
import { useTheme } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material";
import { StyledTableCell, StyledTableRows } from "../../../helpers/CustomTable";

const CharacterStatsTable = (props) => {

    const theme = useTheme();

    let { stats } = props.character;

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80"];
    const rows = levels.map((level, index) => createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], stats.speed[index], stats.taunt[index]));

    return (
        <TableContainer
            component={Paper}
            sx={{
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                margin: "auto",
                width: "95%",
            }}
        >
            <Table sx={{ backgroundColor: `${theme.table.body.backgroundColor}` }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>Level</StyledTableCell>
                        <StyledTableCell>HP</StyledTableCell>
                        <StyledTableCell>ATK</StyledTableCell>
                        <StyledTableCell>DEF</StyledTableCell>
                        <StyledTableCell>SPD</StyledTableCell>
                        <StyledTableCell>Taunt</StyledTableCell>
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRows key={row.level}>
                            <StyledTableCell>{row.level}</StyledTableCell>
                            <StyledTableCell>{Number(row.hp).toLocaleString()}</StyledTableCell>
                            <StyledTableCell>{row.atk}</StyledTableCell>
                            <StyledTableCell>{row.def}</StyledTableCell>
                            <StyledTableCell>{row.spd}</StyledTableCell>
                            <StyledTableCell>{row.taunt}</StyledTableCell>
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