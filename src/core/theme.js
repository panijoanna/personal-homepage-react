const common = {
  breakpoint: {
    smallDevice: 280,
    mobileDevice: 767,
    tabletDevice: 1024,
    maxDevice: 1280,
  },
  fontWeights: {
    regular: 400,
    medium: 600,
    large: 700,
    bold: 900,
  },
  fontSizes: {
    xxsmall: "12px",
    xsmall: "16px",
    small: "18px",
    medium: "20px",
    large: "24px",
    xlarge: "30px",
    xxlarge: "38px",
  },
};

export const themeLight = {
  ...common,
  color: {
    background: "#fbfbfe",
    text: "#6E7E91",
    buttonText: "#FFFFFF",
    heading: "#252525",
    button: "#0366D6",
    tile: "#FFFFFF",
    portfolioHeading: "#0366D6",
    link: "#0366D6",
    border: "#F2F3F4",
    tileHover: "#CDE0F7",
    icon: "#252525",
    primaryShadow: "#E5E5E5",
    secondaryShadow: "#F7F7F9",
    toggler: "#E5E5E5",
    line: "#F1F2F4",
    load: "#0366d6",
    themeBorder: "#6e7e91",
    themeBackground: "#6E7E91",
    themeSun: "#FFFFFF",
  },
};

export const themeDark = {
  ...common,
  color: {
    background: "#252525",
    text: "#FFFFFF",
    buttonText: "#FFFFFF",
    heading: "#FFFFFF",
    button: "#2188FF",
    tile: "#363636",
    portfolioHeading: "#FFFFFF",
    link: "#2188FF",
    border: "#414142",
    tileHover: "#34669E",
    icon: "#FFFFFF",
    toggler: "#6D6D6D",
    line: "#D1D5DA",
    load: "#363636",
    themeBorder: "#FFFFFF",
    themeBackground: "#FFFFFF",
    themeSun: "#252525",
  },
};