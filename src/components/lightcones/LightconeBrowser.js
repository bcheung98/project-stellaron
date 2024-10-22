import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography, Paper, InputBase, ToggleButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import { CustomToggleButton } from "../_custom/CustomToggleButton";
import CustomCard from "../_custom/CustomCard";
import LightconeFilters from "./filters/_LightconeFilters";
import { filterLightcones } from "../../helpers/FilterLightcones";
import LightconeList from "./LightconeList";

const LightconeBrowser = (props) => {

    const theme = useTheme();

    const [searchValue, setSearchValue] = React.useState("");
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const [view, setView] = React.useState("grid");
    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    }

    let { lightcones, lightconeFilters } = props;

    document.title = `Light Cones ${process.env.REACT_APP_DOCUMENT_HEADER}`;

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
                    Light Cones
                </Typography>
                <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: `1px solid ${theme.border.color}` }}>
                    <CustomToggleButton value="grid" size="small">
                        <AppsSharpIcon sx={{ color: "white" }} />
                    </CustomToggleButton>
                    <CustomToggleButton value="list" size="small">
                        <ListSharpIcon sx={{ color: "white" }} />
                    </CustomToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        lightcones.lightcones.length > 0 &&
                        <React.Fragment>
                            {
                                view === "grid" ?
                                    <Grid container spacing={2}>
                                        {filterLightcones(lightcones.lightcones, lightconeFilters, searchValue).sort((a, b) => a.rarity > b.rarity ? -1 : 1).map(lightcone => <CustomCard key={lightcone.id} name={lightcone.name} displayName={lightcone.displayName} type="lightcone" variant="avatar" rarity={lightcone.rarity} size="192px" showInfo info={{ path: lightcone.path }} />)}
                                    </Grid>
                                    :
                                    <LightconeList lightcones={filterLightcones(lightcones.lightcones, lightconeFilters, searchValue)} />
                            }
                        </React.Fragment>
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
                    <LightconeFilters />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        lightcones: state.lightcones,
        lightconeFilters: state.lightconeFilters,
    }
}

export default connect(mapStateToProps)(LightconeBrowser);