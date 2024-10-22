import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"
import { Box, Typography, Paper, InputBase, ToggleButtonGroup } from "@mui/material"
import Grid from "@mui/material/Grid2"
import AppsSharpIcon from "@mui/icons-material/AppsSharp"
import ListSharpIcon from "@mui/icons-material/ListSharp"
import { CustomToggleButton } from "../_custom/CustomToggleButton"
import CustomCard from "../_custom/CustomCard"
import CharacterList from "./CharacterList"
import CharacterFilters from "./filters/_CharacterFilters"
import { filterCharacters } from "../../helpers/FilterCharacters"

const CharacterBrowser = (props) => {

    const theme = useTheme()

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const [view, setView] = React.useState("grid")
    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView)
        }
    }

    let { characters, characterFilters } = props

    document.title = `Characters ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mr: "25px",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                    }}
                >
                    Characters
                </Typography>
                <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: `1px solid ${theme.border.color}` }}>
                    <CustomToggleButton value="grid" size="small">
                        <AppsSharpIcon sx={{ color: `white` }} />
                    </CustomToggleButton>
                    <CustomToggleButton value="list" size="small">
                        <ListSharpIcon sx={{ color: `white` }} />
                    </CustomToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        characters.characters.length > 0 ?
                            <React.Fragment>
                                {
                                    view === "grid" ?
                                        <Grid container spacing={2}>
                                            {filterCharacters(characters.characters, characterFilters, searchValue).map(char => <CustomCard key={char.id} name={char.name} displayName={char.displayName} type="character" variant="avatar" rarity={char.rarity} info={{ element: char.element, path: char.path }} materials={char.materials} disableTooltip />)}
                                        </Grid>
                                        :
                                        <CharacterList characters={filterCharacters(characters.characters, characterFilters, searchValue)} />
                                }
                            </React.Fragment>
                            :
                            null
                    }
                </Grid>
                <Grid size={2.75}>
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
                                fontFamily: "DIN, Roboto, Segoe UI",
                                fontWeight: "bold",
                            }}
                            placeholder="Search"
                            onChange={handleInputChange}
                        />
                    </Paper>
                    <CharacterFilters />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        characterFilters: state.characterFilters,
    }
}

export default connect(mapStateToProps)(CharacterBrowser)