import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Table, TableBody, TableContainer, Paper, InputBase } from "@mui/material";
import { EnhancedTableHead, getComparator, stableSort } from "../../helpers/CustomSortTable";
import CharacterBannerRow from "./CharacterBannerRow";
import LightconeBannerRow from "./LightconeBannerRow";

const BannerList = (props) => {

    const theme = useTheme();

    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("subVersion");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const [searchValue, setSearchValue] = React.useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    let banners = [];
    props.banners.forEach(version => Object.keys(version).slice(1).forEach(phase => banners.push([version.version, `${version.version}.${phase.slice(-1)}`, version[phase].startDate, version[phase].endDate, version[phase].banner])));
    const rows = filterBanners(banners, searchValue).map(banner => createData(banner[0], banner[1], banner[2], banner[3], banner[4]));

    return (
        <Box>
            <Paper
                sx={{
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    display: "flex",
                    height: "40px",
                    mb: "10px",
                }}
            >
                <InputBase
                    sx={{
                        marginLeft: "10px",
                        flex: 1,
                        color: `${theme.text.color}`,
                    }}
                    placeholder="Search"
                    onChange={handleInputChange}
                />
            </Paper>
            <Paper
                sx={{
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    color: `${theme.text.color}`,
                }}
            >
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
                                stableSort(rows, getComparator(order, orderBy))
                                    .map((row, index) => {
                                        return (
                                            props.type === "character" ? <CharacterBannerRow key={index} row={row} /> : <LightconeBannerRow key={index} row={row} />

                                        )
                                    })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default BannerList;

const headCells = [
    { id: "subVersion", label: "Version" },
];

const createData = (version, subVersion, startDate, endDate, banner) => {
    return { version, subVersion, startDate, endDate, banner };
}

const filterBanners = (banners, searchValue) => {
    if (searchValue !== "") {
        banners = banners.filter(banner => banner[4].map(char => char.toLowerCase()).join("|").includes(searchValue.toLowerCase()))
    }
    return banners;
}