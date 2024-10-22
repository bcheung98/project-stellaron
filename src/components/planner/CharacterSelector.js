import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Autocomplete, ClickAwayListener, CardHeader } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Button, PopperComponent, StyledPopper, StyledInput } from "../_custom/CustomAutocomplete";
import { CustomTooltip } from "../_custom/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterSelector = (props) => {

    const theme = useTheme();

    let { characters, setPlannerCharacters, updateTotalCosts } = props;

    React.useEffect(() => {
        setPlannerCharacters(value)
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
    const id = open ? "char-label" : undefined;

    const smallIcon = {
        width: "16px",
        height: "16px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "16px",
        marginBottom: "10px",
    };

    if (characters.length > 0) {
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
                        <img src={`${process.env.REACT_APP_URL}/icons/Character.png`} alt="Characters" style={{ width: "32px", marginRight: "10px" }} />
                        <span style={{ fontFamily: "DIN", fontSize: "16pt", color: "white" }}>Characters</span>
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
                                noOptionsText="No characters"
                                renderOption={(props, option, { selected }) => (
                                    <li
                                        {...props}
                                        key={option.name}
                                        style={{ backgroundColor: selected ? `${theme.table.body.hover}` : `${theme.paper.backgroundColor}`, borderLeft: `10px solid ${GetRarityColor(option.rarity)}` }}>
                                        <Box
                                            component={DoneIcon}
                                            sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                                            style={{
                                                visibility: selected ? "visible" : "hidden",
                                            }}
                                        />
                                        <CardHeader
                                            avatar={
                                                <Box sx={{ position: "relative" }}>
                                                    <img alt={option.name} src={(`${process.env.REACT_APP_URL}/characters/icons/${option.name.split(" ").join("_")}.png`)} style={{ width: "48px", border: `1px solid ${theme.border.color}`, borderRadius: "48px" }} onError={ErrorLoadingImage} />
                                                    <Box sx={{ position: "absolute", top: "2.5px", left: "-10px" }}>
                                                        <CustomTooltip title={option.element} arrow placement="top">
                                                            <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/elements/Element_${option.element}.png`)} alt={option.element} onError={ErrorLoadingImage} />
                                                        </CustomTooltip>
                                                    </Box>
                                                    <Box sx={{ position: "absolute", top: "30px", left: "-10px" }}>
                                                        <CustomTooltip title={option.path} arrow placement="top">
                                                            <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/paths/The_${option.path}.png`)} alt={option.path} onError={ErrorLoadingImage} />
                                                        </CustomTooltip>
                                                    </Box>
                                                </Box>
                                            }
                                            title={
                                                <Typography variant="body1" sx={{ ml: "5px" }}>
                                                    {option.displayName ? option.displayName : option.name}
                                                </Typography>
                                            }
                                            sx={{ p: 0, flexGrow: 1, ml: "10px" }}
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
                                options={[...characters].sort((a, b) => {
                                    // Display the selected labels first.
                                    let ai = value.indexOf(a);
                                    ai = ai === -1 ? value.length + characters.indexOf(a) : ai;
                                    let bi = value.indexOf(b);
                                    bi = bi === -1 ? value.length + characters.indexOf(b) : bi;
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
        characters: state.characters.characters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlannerCharacters: (payload) => dispatch({ type: "SET_PLANNER_CHARS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelector);

const GetRarityColor = (rarity) => {
    switch (rarity) {
        case 5:
            return "rgb(255, 208, 112)";
        case 4:
            return "rgb(175, 134, 255)";
        default:
            return "gray";
    }
}