import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "subset=latin,cyrillic-ext,greek-ext,greek,vietnamese,latin-ext,cyrillic);csslider1": {
        "display": "inline-block",
        "position": "relative",
        "width": "inherit",
        "marginTop": 10
    },
    "csslider1 > cs_anchor": {
        "display": "none"
    },
    "csslider1 > ul": {
        "position": "relative",
        "zIndex": 1,
        "fontSize": 0,
        "lineHeight": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "whiteSpace": "nowrap"
    },
    "csslider1 > ul > div": {
        "width": "100%",
        "visibility": "hidden",
        "fontSize": 0,
        "lineHeight": 0
    },
    "csslider1 > ul > liimg img": {
        "width": "100%"
    },
    "csslider1 > ul > liimg": {
        "fontSize": "0pt",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "csslider1 > ul > li": {
        "position": "absolute",
        "display": "inline-block",
        "width": "100%",
        "height": "100%",
        "overflow": "hidden",
        "fontSize": "initial",
        "lineHeight": "normal",
        "whiteSpace": "normal",
        "verticalAlign": "top",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "WebkitTransform": "rotate(0deg)",
        "transform": "rotate(0deg)",
        "left": 0,
        "top": 0,
        "opacity": 0,
        "zIndex": 1,
        "WebkitTransition": "opacity 2000ms ease",
        "transition": "opacity 2000ms ease"
    },
    "csslider1 cs_lnk": {
        "position": "absolute",
        "top": -9999,
        "left": -9999,
        "fontSize": "0pt",
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "csslider1 > cs_arrowprev": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "csslider1 > cs_arrownext": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "csslider1 > cs_bullets": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "csslider1 > cs_play_pause": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "csslider1 > cs_slide1_0:checked ~ ul > linum0": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_0:checked ~ ul > linum0": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_1:checked ~ ul > linum1": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_1:checked ~ ul > linum1": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_2:checked ~ ul > linum2": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_2:checked ~ ul > linum2": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_3:checked ~ ul > linum3": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_3:checked ~ ul > linum3": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_4:checked ~ ul > linum4": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_4:checked ~ ul > linum4": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_5:checked ~ ul > linum5": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_5:checked ~ ul > linum5": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_6:checked ~ ul > linum6": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_6:checked ~ ul > linum6": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_7:checked ~ ul > linum7": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_7:checked ~ ul > linum7": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_8:checked ~ ul > linum8": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_8:checked ~ ul > linum8": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_9:checked ~ ul > linum9": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_9:checked ~ ul > linum9": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_slide1_10:checked ~ ul > linum10": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_pause1_10:checked ~ ul > linum10": {
        "opacity": 1,
        "zIndex": 2
    },
    "csslider1 > cs_play1:checked ~ ul > linum0": {
        "WebkitAnimation": "fade 66000ms infinite -2000ms",
        "animation": "fade 66000ms infinite -2000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum1": {
        "WebkitAnimation": "fade 66000ms infinite 4000ms",
        "animation": "fade 66000ms infinite 4000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum2": {
        "WebkitAnimation": "fade 66000ms infinite 10000ms",
        "animation": "fade 66000ms infinite 10000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum3": {
        "WebkitAnimation": "fade 66000ms infinite 16000ms",
        "animation": "fade 66000ms infinite 16000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum4": {
        "WebkitAnimation": "fade 66000ms infinite 22000ms",
        "animation": "fade 66000ms infinite 22000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum5": {
        "WebkitAnimation": "fade 66000ms infinite 28000ms",
        "animation": "fade 66000ms infinite 28000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum6": {
        "WebkitAnimation": "fade 66000ms infinite 34000ms",
        "animation": "fade 66000ms infinite 34000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum7": {
        "WebkitAnimation": "fade 66000ms infinite 40000ms",
        "animation": "fade 66000ms infinite 40000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum8": {
        "WebkitAnimation": "fade 66000ms infinite 46000ms",
        "animation": "fade 66000ms infinite 46000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum9": {
        "WebkitAnimation": "fade 66000ms infinite 52000ms",
        "animation": "fade 66000ms infinite 52000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > linum10": {
        "WebkitAnimation": "fade 66000ms infinite 58000ms",
        "animation": "fade 66000ms infinite 58000ms"
    },
    "csslider1 > cs_play1:checked ~ ul > li": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "csslider1 > pause:checked ~ ul > li": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "csslider1": {
        "boxShadow": "0 0 0 1px #ffffff"
    }
});