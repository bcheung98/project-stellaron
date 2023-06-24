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
        <></>
    )

}

export default LightconeList;