import { createDarkTheme, createLightTheme } from "@fluentui/react-components";

import type { BrandVariants, Theme } from "@fluentui/react-components";

const brandTheme: BrandVariants = {
    10: "#030205",
    20: "#171424",
    30: "#242040",
    40: "#2E2A59",
    50: "#393572",
    60: "#433F8D",
    70: "#4E4AA8",
    80: "#5956C4",
    90: "#6762D8",
    100: "#7A71DD",
    110: "#8B81E1",
    120: "#9B90E5",
    130: "#ABA0EA",
    140: "#BAB0EE",
    150: "#C9C1F2",
    160: "#D8D2F6"
};



export const lightTheme: Theme = {
    ...createLightTheme(brandTheme),
};
export const darkTheme: Theme = {
    ...createDarkTheme(brandTheme),
};