import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Table, TableBody, TableContainer, Toolbar, Typography, Paper } from "@mui/material";
import { EnhancedTableHead, getComparator, stableSort } from "../../helpers/CustomSortTable";
import LightconeRow from "./LightconeRow";
import { LightconeStats } from "../../helpers/LightconeStats";

const LightconeList = (props) => {

    const theme = useTheme();

    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("rarity");
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const rows = props.lightcones.map((lightcone) => {

        let hp = Number(LightconeStats["hp"][lightcone.stats.hp.toString()][13]).toLocaleString();
        let atk = LightconeStats["atk"][lightcone.stats.atk.toString()][13];
        let def = LightconeStats["def"][lightcone.stats.def.toString()][13];
        let materialString = `${lightcone.materials.calyxMat} ${lightcone.materials.commonMat}`;

        return createData(lightcone.name, lightcone.rarity, lightcone.path, hp, atk, def, lightcone.materials.calyxMat, lightcone.materials.commonMat, materialString);
    });

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
                        {props.lightcones.length} {props.lightcones.length === 1 ? "Lightcone" : "Lightcones"}
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
                                        <LightconeRow key={index} row={row} />
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

export default LightconeList;

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "path", label: "Path" },
    { id: "hp", label: "HP" },
    { id: "atk", label: "ATK" },
    { id: "def", label: "DEF" },
    { id: "materialString", label: "Materials" }
];

const createData = (name, rarity, path, hp, atk, def, calyxMat, commonMat, materialString) => {
    return { name, rarity, path, hp, atk, def, calyxMat, commonMat, materialString };
}