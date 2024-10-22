import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Typography, Tabs, Tab, Box } from "@mui/material";

export const TabPanel = (props) => {

    const { children, value, index, ...other } = props;
    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        width: "100%",
        backgroundColor: "rgb(202, 166, 112)",
    },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        color: `${theme.text.color}`,
        fontFamily: "DIN, Roboto, Segoe UI",
        fontWeight: "bold",
        "&.Mui-selected": {
            color: `${theme.text.selected}`,
        },
    }),
);