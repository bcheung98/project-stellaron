import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Autocomplete, ClickAwayListener, CardHeader } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Button, PopperComponent, StyledPopper, StyledInput } from "../_custom/CustomAutocomplete";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeSelector = (props) => {

    const theme = useTheme();

    let { lightcones, setPlannerLightcones, updateTotalCosts } = props;

    React.useEffect(() => {
        setPlannerLightcones(value)
        updateTotalCosts()
    })

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState([]);
    const [pendingValue, setPendingValue] = React.useState([]);

    const handleClick = (event) => {
        setPendingValue(value);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setValue(pendingValue);
        if (anchorEl) {
            anchorEl.focus();
        }
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "lc-label" : undefined;

    if (lightcones.length > 0) {
        return (
            <React.Fragment>
                <Box
                    sx={{
                        width: 300,
                        p: "5px",
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                    }}
                >
                    <Button disableRipple onClick={handleClick}>
                        <img src={`${process.env.REACT_APP_URL}/icons/Lightcone.png`} alt="Light Cones" style={{ width: "32px", marginRight: "10px" }} />
                        <span style={{ fontFamily: "DIN", fontSize: "16pt", color: "white" }}>Light Cones</span>
                        <ArrowForwardIosSharpIcon sx={{ transform: "rotate(90deg)", color: "white" }} />
                    </Button>
                </Box>
                <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
                    <ClickAwayListener onClickAway={handleClose}>
                        <Box>
                            <Autocomplete
                                open
                                multiple
                                onClose={(event, reason) => {
                                    if (reason === "escape") {
                                        handleClose();
                                    }
                                }}
                                value={pendingValue}
                                onChange={(event, newValue, reason) => {
                                    if (
                                        event.type === "keydown" &&
                                        event.key === "Backspace" &&
                                        reason === "removeOption"
                                    ) {
                                        return;
                                    }
                                    setPendingValue(newValue);
                                }}
                                disableCloseOnSelect
                                PopperComponent={PopperComponent}
                                renderTags={() => null}
                                noOptionsText="No light cones"
                                renderOption={(props, option, { selected }) => (
                                    <li {...props} style={{ backgroundColor: selected ? `${theme.table.body.hover}` : `${theme.paper.backgroundColor}`, borderLeft: `10px solid ${GetRarityColor(option.rarity)}` }}>
                                        <Box
                                            component={DoneIcon}
                                            sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                                            style={{
                                                visibility: selected ? "visible" : "hidden",
                                            }}
                                        />
                                        <CardHeader
                                            avatar={
                                                <img alt={option.name} src={(`${process.env.REACT_APP_URL}/lightcones/small/${option.name.split(" ").join("_")}.png`)} style={{ width: "48px", height: "48px" }} onError={ErrorLoadingImage} />
                                            }
                                            title={
                                                <Typography variant="body1">
                                                    {option.name}
                                                </Typography>
                                            }
                                            sx={{ p: 0, flexGrow: 1 }}
                                        />
                                        <Box
                                            component={CloseIcon}
                                            sx={{ opacity: 0.6, width: 18, height: 18 }}
                                            style={{
                                                visibility: selected ? "visible" : "hidden",
                                            }}
                                        />
                                    </li>
                                )}
                                options={[...lightcones].sort((a, b) => {
                                    // Display the selected labels first.
                                    let ai = value.indexOf(a);
                                    ai = ai === -1 ? value.length + lightcones.indexOf(a) : ai;
                                    let bi = value.indexOf(b);
                                    bi = bi === -1 ? value.length + lightcones.indexOf(b) : bi;
                                    return ai - bi;
                                })}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => (
                                    <StyledInput
                                        ref={params.InputProps.ref}
                                        inputProps={params.inputProps}
                                        autoFocus
                                        placeholder="Search"
                                    />
                                )}
                            />
                        </Box>
                    </ClickAwayListener>
                </StyledPopper>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        lightcones: state.lightcones.lightcones,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlannerLightcones: (payload) => dispatch({ type: "SET_PLANNER_LIGHTCONES", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LightconeSelector);

const GetRarityColor = (rarity) => {
    switch (rarity) {
        case 5:
            return "rgb(255, 208, 112)";
        case 4:
            return "rgb(175, 134, 255)";
        case 3:
            return "rgb(105, 157, 237)";
        default:
            return "gray";
    }
}