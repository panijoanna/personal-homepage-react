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
    tile: "#ffffff",
    text: "#6E7E91",
    headers: "#252525",
    items: "#0366D6",
    borderTile: "#E5E5E5",
  },
};

export const themeDark = {
  ...common,
  color: {
    background: "#252525",
    tile: "#363636",
    text: "#FFFFFF",
    items: "#D1D5DA",
    borderTile: "#484849",
  },
};
