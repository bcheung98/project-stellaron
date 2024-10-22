import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Table, TableBody, TableContainer, Toolbar, Typography, Paper } from "@mui/material";
import { EnhancedTableHead, getComparator, stableSort } from "../_custom/CustomSortTable"
import CharacterRow from "./CharacterRow";
import { createDateObject } from "../../helpers/dates";

const CharacterList = (props) => {

    const theme = useTheme();

    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("name");
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const rows = props.characters.map(char => createData(char.name, char.displayName, char.rarity, char.element, char.path, char.world, createDateObject(char.release.date).date, char.release.version, char.id));

    return (
        <Box sx={{ width: "100%" }}>
            <Paper
                sx={{
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    color: `${theme.text.color}`,
                }}
            >
                <Toolbar sx={{ backgroundColor: `${theme.toolbar.backgroundColor}` }}>
                    <Typography variant="h5" component="div" sx={{ display: "block", margin: "auto" }}>
                        {props.characters.length} {props.characters.length === 1 ? "Character" : "Characters"}
                    </Typography>
                </Toolbar>
                < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "0px" }} />
                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {
                                stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                                    return (
                                        <CharacterRow key={index} row={row} />
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )

}

export default CharacterList;

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "element", label: "Combat Type" },
    { id: "path", label: "Path" },
    { id: "world", label: "World" },
    { id: "id", label: "Release Date" },
];

const createData = (name, displayName, rarity, element, path, world, releaseDate, version, id) => {
    return { name, displayName, rarity, element, path, world, releaseDate, version, id };
}