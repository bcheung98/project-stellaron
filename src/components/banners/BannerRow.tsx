// Component imports
import CustomCard from "../_custom/CustomCard"
import { StyledTableCellNoVert } from "../_custom/CustomTable"

// MUI imports
import { useTheme, Typography, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import { isTBA } from "../../helpers/isTBA"

// Type imports
import { BannerData } from "../../types/banner/BannerData"

function BannerRow(props: {
    type: "character" | "lightcone",
    row: BannerData
}) {

    const theme = useTheme()

    let { type } = props
    let { version, subVersion, fiveStars, fourStars } = props.row

    let start = createDateObject(props.row.start)
    let end = createDateObject(props.row.end)

    return (
        <TableRow sx={{ backgroundColor: isCurrentBanner(start.obj, end.obj) ? `${theme.table.body.selected}` : "none" }}>
            <StyledTableCellNoVert sx={{ py: "10px" }}>
                <Typography sx={{ fontFamily: `${theme.font.styled.family}`, textAlign: "left", mb: "10px" }}>
                    {`${version} Phase ${subVersion.split(".")[2]}: ${start.date} — ${end.date}`}
                </Typography>
                <Grid container spacing={0.75}>
                    {fiveStars.map((item: string, index: number) => <CustomCard key={index} id={`${item}-${subVersion}`.toLowerCase()} name={item} type={type} variant="icon" rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                    {fourStars.map((item: string, index: number) => <CustomCard key={index} id={`${item}-${subVersion}`.toLowerCase()} name={item} type={type} variant="icon" rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                </Grid>
            </StyledTableCellNoVert>
        </TableRow>
    )
}


export default BannerRow