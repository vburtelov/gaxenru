import {useMediaQuery, useTheme} from "@mui/material";

export default function useAppBarHeight() {
    const {
        mixins: {toolbar},
        breakpoints,
    } = useTheme();

    const queryDesktop = breakpoints.up("sm");
    const queryLandscape = `${breakpoints.up("xs")} and (orientation: landscape)`;

    const isDesktop = useMediaQuery(queryDesktop);
    const isLandscape = useMediaQuery(queryLandscape);

    let cssToolbar;
    if (isDesktop) {
        cssToolbar = toolbar[queryDesktop];
    } else if (isLandscape) {
        cssToolbar = toolbar[queryLandscape];
    } else {
        cssToolbar = toolbar[""];
    }

    return (cssToolbar ?? toolbar)?.minHeight ?? 0;
}