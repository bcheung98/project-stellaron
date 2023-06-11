import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow"

export const StyledTableCell = styled((props) => (
    <TableCell align="center" size="small" component="th" {...props} />
))(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: `${theme.table.header.backgroundColor}`,
        color: `${theme.text.color}`,
        fontFamily: "Genshin, sans-serif",
    },
    color: `${theme.text.color}`,
    fontSize: "10pt",
    border: `1px solid ${theme.border.color}`,
}))

export const StyledTableCellNoVert = styled((props) => (
    <TableCell align="center" size="small" component="th" {...props} />
))(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: `${theme.table.header.backgroundColor}`,
        color: `${theme.text.color}`,
    },
    color: `${theme.text.color}`,
    borderTop: `1px solid ${theme.border.color}`,
    borderBottom: `1px solid ${theme.border.color}`,
}))

export const StyledTableRows = styled((props) => (
    <TableRow component="tr" scope="row" hover {...props} />
))(({ theme }) => ({
    [`&.${tableRowClasses.hover}`]: {
        "&:hover": {
            backgroundColor: `${theme.table.body.hover}`,
        },
    },
    color: `${theme.text.color}`,
}))