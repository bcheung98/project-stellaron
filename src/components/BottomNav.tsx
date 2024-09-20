// MUI imports
import { useTheme } from "@mui/material/styles"
import { AppBar, Box, Typography, IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"

function BottomNav() {

    const theme = useTheme()

    return (
        <AppBar position="static"
            sx={{
                mt: 10,
                mb: -5,
                pt: 2,
                textAlign: "center",
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderTop: `1px solid ${theme.border.color}`,
            }}
        >
            <Typography sx={{ mb: "5px" }} variant="body2">Project Stellaron is not affiliated with HoYoverse.<br />Honkai: Star Rail, images and data are registered trademarks of HoYoverse.</Typography>
            <Box>
                <IconButton disableRipple href={"https://github.com/bcheung98/project-stellaron"} target="_blank" color="inherit">
                    <GitHubIcon />
                </IconButton>
            </Box>
        </AppBar>
    )

}

export default BottomNav