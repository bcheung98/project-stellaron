import parse from "html-react-parser";

// Component imports
import Image from "custom/Image";
import RarityStars from "custom/RarityStars";
import RouterLink from "components/nav/RouterLink";
import { StyledTableRow, StyledTableCell } from "styled/StyledTable";
import { TextStyled } from "styled/StyledTypography";
import { FlexBox } from "styled/StyledBox";

// MUI imports
import { useTheme } from "@mui/material";

// Helper imports
import { combineStyles } from "helpers/utils";

// Type imports
import { WeaponRow } from "./WeaponTable";

interface WeaponTableRowProps extends WeaponRow {
    hp: number;
    atk: number;
    def: number;
}

function WeaponTableRow({ row }: { row: WeaponTableRowProps }) {
    const theme = useTheme();

    const columns = [
        {
            label: row.displayName,
            labelStyle: {
                cursor: "pointer",
                "&:hover": {
                    color: theme.text.selected,
                    textDecoration: "underline",
                },
            },
            img: `lightcones/small/${row.name}`,
            imgStyle: {
                width: "48px",
                height: "auto",
                cursor: "pointer",
            },
            href: `/lightcones/${row.name.split(" ").join("_").toLowerCase()}`,
        },
        {
            label: <RarityStars rarity={row.rarity} variant="h4-styled" />,
        },
        {
            label: row.path,
            img: `paths/${row.path}`,
            imgStyle: {
                backgroundColor: theme.icon.backgroundColor,
                borderRadius: "64px",
            },
        },
        {
            label: row.hp.toLocaleString(),
            labelStyle: { marginLeft: "0px" },
        },
        {
            label: row.atk.toLocaleString(),
            labelStyle: { marginLeft: "0px" },
        },
        {
            label: row.def.toLocaleString(),
            labelStyle: { marginLeft: "0px" },
        },
    ];

    return (
        <StyledTableRow color="secondary" hover>
            {columns.map((col, index) => (
                <StyledTableCell key={index}>
                    <FlexBox columnGap="16px">
                        {col.img &&
                            (col.href ? (
                                <RouterLink to={col.href}>
                                    <Image
                                        src={col.img}
                                        alt={col.label}
                                        style={combineStyles(
                                            {
                                                width: "32px",
                                                height: "32px",
                                            },
                                            col.imgStyle
                                        )}
                                    />
                                </RouterLink>
                            ) : (
                                <Image
                                    src={col.img}
                                    alt={col.label}
                                    style={combineStyles(
                                        {
                                            width: "32px",
                                            height: "32px",
                                        },
                                        col.imgStyle
                                    )}
                                />
                            ))}
                        {col.label &&
                            (col.href ? (
                                <RouterLink to={col.href}>
                                    <TextStyled
                                        sx={combineStyles(
                                            { textAlign: "left" },
                                            col.labelStyle
                                        )}
                                    >
                                        {parse(col.label)}
                                    </TextStyled>
                                </RouterLink>
                            ) : (
                                <TextStyled
                                    sx={combineStyles(
                                        { textAlign: "left" },
                                        col.labelStyle
                                    )}
                                >
                                    {typeof col.label === "string"
                                        ? parse(col.label)
                                        : col.label}
                                </TextStyled>
                            ))}
                    </FlexBox>
                </StyledTableCell>
            ))}
        </StyledTableRow>
    );
}

export default WeaponTableRow;
