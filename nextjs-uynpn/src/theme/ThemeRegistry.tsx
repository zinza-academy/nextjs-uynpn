"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { light } from "@mui/material/styles/createPalette";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    body1: {
      fontSize: '16px',
      color: '#000000',
      letterSpacing: '-0.04em',
      lineHeight: '150%',
      fontWeight: '400'
    },
    body2: {
      fontSize: '14px',
      color: '#000000',
      letterSpacing: '-0.04em',
      lineHeight: '143%',
      fontWeight: '400'
    },
    subtitle1: {
      fontSize: '16px',
      color: '#000000',
      letterSpacing: '-0.05em',
      lineHeight: '175%',
      fontWeight: '400'
    },
    subtitle2: {
      fontSize: '14px',
      color: '#000000',
      letterSpacing: '-0.05em',
      lineHeight: '157%',
      fontWeight: '500'
    },
    caption: {
      fontSize: '12px',
      color: '#000000',
      letterSpacing: '0.33em',
      lineHeight: '166%',
      fontWeight: '400'
    },
    overline: {
      fontSize: '12px',
      color: '#000000',
      letterSpacing: '-0.44em',
      lineHeight: '266%',
      fontWeight: '400'
    },
    h1: {
      fontSize: '96px',
      color: '#000000',
      letterSpacing: '-0.6em',
      lineHeight: '112%',
      fontWeight: '300'
    },
    h2: {
      fontSize: '60px',
      color: '#000000',
      letterSpacing: '-0.6em',
      lineHeight: '120%',
      fontWeight: '300'
    },
    h3: {
      fontSize: '48px',
      color: '#000000',
      letterSpacing: '-0.2em',
      lineHeight: '116.7%',
      fontWeight: '400'
    },
    h4: {
      fontSize: '34px',
      color: '#000000',
      letterSpacing: '0',
      lineHeight: '123.5%',
      fontWeight: '400'
    },
    h5: {
      fontSize: '24px',
      color: '#000000',
      letterSpacing: '0',
      lineHeight: '133.4%',
      fontWeight: '400'
    },
    h6: {
      fontSize: '24px',
      color: '#000000',
      letterSpacing: '-0.05em',
      lineHeight: '160%',
      fontWeight: '500'
    }
  },
  palette: {

  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
