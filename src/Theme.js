import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
    appbar: {
        backgroundColor: "rgb(15, 15, 15)",
    },
    border: {
        color: "rgb(168, 147, 105)",
    },
    paper: {
        backgroundColor: "rgb(30, 30, 30)",
    },
    card: {
        backgroundColor: "rgb(30, 30, 30)",
    },
    table: {
        header: {
            backgroundColor: "rgb(0, 20, 40)",
        },
        body: {
            backgroundColor: "rgb(0, 30, 60)",
            hover: "rgb(19, 47, 76)",
        },
    },
    toolbar: {
        backgroundColor: "rgb(0, 16, 32)",
    },
    materialImage: {
        backgroundColor: "rgb(0, 30, 60)",
    },
    text: {
        color: "white",
    },
});