import * as React from "react"
import { useDispatch, useSelector } from "react-redux"

// Component imports
import { CustomTooltip } from "../_custom/CustomTooltip"
import { CustomMenuItem } from "../_custom/CustomMenu"
import SearchBar from "../_custom/SearchBar"

// MUI Imports
import { useTheme, useMediaQuery, Box, Typography, Autocomplete } from "@mui/material"

// Helper imports
import { GetBackgroundColor, GetRarityColor } from "../../helpers/RarityColors"
import { setPlannerLightcones, updateTotalCosts } from "../../redux/reducers/AscensionPlannerReducer"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { LightconeData } from "../../types/lightcone/LightconeData"

function LightconeSelector() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const dispatch = useDispatch()

    const lightcones = useSelector((state: RootState) => state.lightcones.lightcones)

    const [values, setValues] = React.useState<LightconeData[]>([])

    React.useEffect(() => {
        dispatch(setPlannerLightcones(values))
        dispatch(updateTotalCosts())
    }, [JSON.stringify(values)])

    const smallIconStyles = {
        width: "20px",
        height: "20px",
    }

    return (
        <Box>
            <Autocomplete
                multiple
                autoComplete
                disableCloseOnSelect
                options={[...lightcones].sort((a, b) => a.rarity > b.rarity ? -1 : 1)} // Autocomplete options are read-only, so need spread operator to manipulate the array
                getOptionLabel={(option) => option.displayName ? option.displayName : option.name}
                filterSelectedOptions
                noOptionsText="No Light Cones"
                value={values}
                onChange={(event: any, newValue: LightconeData[] | null) => {
                    setValues(newValue as LightconeData[])
                }}
                ChipProps={{
                    sx: {
                        color: `${theme.text.color}`,
                        fontFamily: `${theme.font.styled.family}`,
                        backgroundColor: `${theme.button.selected}`,
                        "& .MuiChip-deleteIcon": {
                            color: `${theme.text.color}`,
                            ":hover": {
                                color: `${theme.text.colorAlt}`
                            }
                        },
                    }
                }}
                ListboxProps={{
                    sx: { backgroundColor: `${theme.paper.backgroundColor}`, p: 0 }
                }}
                renderInput={(params) => (
                    <SearchBar params={params} placeholder="Light Cones" />
                )}
                renderOption={(props, option) => (
                    <CustomMenuItem
                        {...props}
                        key={option.name}
                        sx={{
                            "&:not(:last-child)": {
                                borderBottom: `1px solid ${theme.border.color}`,
                            },
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <Box sx={{ mr: "10px", mt: "6px" }}>
                                <CustomTooltip title={option.path} arrow placement="top">
                                    <img style={smallIconStyles} src={`${process.env.REACT_APP_URL}/paths/The_${option.path}.png`} alt={option.path} onError={ErrorLoadingImage} />
                                </CustomTooltip>
                            </Box>
                            <img
                                src={`${process.env.REACT_APP_URL}/lightcones/small/${option.name.split(" ").join("_")}.png`} alt={option.name}
                                style={{
                                    width: matches ? "42px" : "48px",
                                    marginRight: "20px",
                                    border: `2px solid ${GetRarityColor(option.rarity)}`,
                                    borderRadius: "5px",
                                    boxShadow: `inset 0 0 30px 5px ${GetBackgroundColor(option.rarity)}`
                                }}
                                onError={ErrorLoadingImage}
                            />
                            <Typography
                                noWrap
                                sx={{
                                    fontFamily: `${theme.font.styled.family}`,
                                    fontSize: { xs: "14px", md: "16px" },
                                    color: `${theme.text.color}`
                                }}
                            >
                                {option.displayName ? option.displayName : option.name}
                            </Typography>
                        </Box>
                    </CustomMenuItem>
                )}
            />
        </Box>
    )

}

export default LightconeSelector