import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, Paper } from "@mui/material";
import TableSortLabel, { tableSortLabelClasses } from "@mui/material/TableSortLabel";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const LightconeList = (props) => {

    const theme = useTheme();

    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("rarity");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

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
                        
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )

}

export default LightconeList;