import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "float-right": {
        "float": "right",
        "display": "inline-block"
    },
    "margin": {
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1
    },
    "info": {
        "color": "#757575",
        "fontSize": 0.8,
        "fontStyle": "italic"
    },
    "center": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "textAlign": "center",
        "display": "inline-block"
    },
    "grey-bg": {
        "width": "50%",
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13,
        "display": "block",
        "color": "#ad0909",
        "backgroundColor": "#636363"
    },
    "container": {
        "width": 1000,
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto"
    },
    "container header": {
        "float": "left",
        "color": "#333",
        "fontSize": 1.5,
        "paddingBottom": 1,
        "backgroundColor": "#000",
        "fontFamily": "Georgia, \"Times New Roman\", Times, serif"
    },
    "header nav": {
        "clear": "none",
        "float": "left",
        "height": 40,
        "width": 810,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif",
        "fontSize": 1.2,
        "color": "#FFF"
    },
    "centerblock form hislider1": {
        "clear": "both",
        "float": "left",
        "height": "inherit",
        "width": "inherit",
        "marginTop": 0,
        "marginRight": "25%",
        "marginBottom": 0,
        "marginLeft": "25%"
    },
    "container centerblock": {
        "clear": "left",
        "float": "left",
        "width": 1000,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "display": "table",
        "border": "1px solid #333"
    },
    "container centerblock2": {
        "textAlign": "center",
        "float": "left",
        "width": "100%"
    },
    "container centerblock left": {
        "width": 220,
        "float": "left"
    },
    "container centerblock left img": {
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5
    },
    "container centerblock left p": {
        "fontSize": 1.15,
        "fontWeight": "bold",
        "fontVariant": "normal",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "centerblock left spacelft": {
        "clear": "left",
        "float": "left",
        "height": 180,
        "width": 40
    },
    "container centerblock form": {
        "width": 670,
        "backgroundColor": "#000",
        "display": "table-cell",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "float": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "container centerblock form h3": {
        "textAlign": "center",
        "fontSize": 1.5
    },
    "container centerblock form p": {
        "fontSize": 1.15
    },
    "container centerblock form ul > li": {
        "fontSize": 1.15
    },
    "container centerblock form ad": {
        "height": 134,
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 240
    },
    "centerblock form2": {
        "backgroundColor": "#666",
        "clear": "none",
        "float": "left",
        "width": 670,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "centerblock form3": {
        "backgroundColor": "#666",
        "clear": "none",
        "float": "left",
        "width": 670,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "centerblock form3 p": {
        "fontSize": 16,
        "color": "#B0D096"
    },
    "centerblock form3 p img": {
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 2
    },
    "centerblock form p": {
        "fontSize": 16,
        "color": "#FFF"
    },
    "centerblock form2 p": {
        "fontSize": 16,
        "color": "#FFF"
    },
    "centerblock form2 p img": {
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "centerblock form h4": {
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontWeight": "normal"
    },
    "container centerblock form bizlink": {
        "backgroundColor": "#933",
        "float": "left",
        "height": 20,
        "width": 400,
        "paddingTop": 3,
        "paddingRight": 4,
        "paddingBottom": 3,
        "paddingLeft": 4
    },
    "csslider1": {
        "display": "inline-block",
        "position": "relative",
        "maxWidth": 400,
        "width": "100%",
        "marginTop": 10
    },
    "right-images": {
        "width": 270,
        "float": "left"
    },
    "jotform-form li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer": {
        "color": "#fff",
        "clear": "both",
        "height": 70,
        "width": 1000,
        "lineHeight": 2,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "borderTop": "none",
        "border": "1px solid #303030"
    },
    "footer > p": {
        "textAlign": "center"
    },
    "right": {
        "textAlign": "right",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "red": {
        "color": "#F00"
    },
    "h6": {
        "fontSize": 16,
        "color": "#F00",
        "fontVariant": "small-caps"
    },
    "clear": {
        "height": 40,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "clear": "both",
        "float": "left",
        "width": "100%"
    },
    "smtext": {
        "fontSize": 14
    }
});