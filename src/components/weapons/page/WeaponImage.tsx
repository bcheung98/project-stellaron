// Component imports
import Image from "custom/Image";

// MUI imports
import { useTheme, Card } from "@mui/material";

// Type imports
import { WeaponProps } from "types/weapon";

function WeaponImage({ weapon }: WeaponProps) {
    const theme = useTheme();

    const width = "400px";

    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: width,
                border: `thick solid ${theme.border.color.primary}`,
            }}
        >
            <Image
                src={`lightcones/large/${weapon.name}`}
                alt={weapon.name}
                style={{
                    width: "100%",
                    maxWidth: width,
                    height: "auto",
                    transform: "scale(1.1)",
                }}
            />
        </Card>
    );
}

export default WeaponImage;
