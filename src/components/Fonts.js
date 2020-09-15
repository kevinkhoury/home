import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const fontlist = {
  muli: [
    /* vietnamese */
    [
      `font-family:'Muli'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Au-p_0qiz-afTf2IALT8kU.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Muli'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Au-p_0qiz-afTf2IQLT8kU.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Muli'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Au-p_0qiz-afTf2LwLT.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* vietnamese */
    [
      `font-family:'Muli'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Au-p_0qiz-afTf2IALT8kU.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Muli'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Au-p_0qiz-afTf2IQLT8kU.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Muli'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Au-p_0qiz-afTf2LwLT.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* vietnamese */
    [
      `font-family:'Muli'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afT3GLRrX.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Muli'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afTzGLRrX.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Muli'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afTLGLQ.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* vietnamese */
    [
      `font-family:'Muli'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afT3GLRrX.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Muli'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afTzGLRrX.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Muli'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/muli/v22/7Auwp_0qiz-afTLGLQ.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
  ],
  lora: [
    /* cyrillic-ext */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwf7I-NP.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMw77I-NP.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* vietnamese */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwX7I-NP.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwT7I-NP.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwr7Iw.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwf7I-NP.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMw77I-NP.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* vietnamese */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwX7I-NP.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwT7I-NP.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Lora'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:url(https://fonts.gstatic.com/s/lora/v16/0QIvMX1D_JOuMwr7Iw.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Italic'), local('Merriweather-Italic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4m0qyriQwlOrhSvowK_l5-eRZDf-LHrw.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Italic'), local('Merriweather-Italic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4m0qyriQwlOrhSvowK_l5-eRZKf-LHrw.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* vietnamese */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Italic'), local('Merriweather-Italic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4m0qyriQwlOrhSvowK_l5-eRZBf-LHrw.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Italic'), local('Merriweather-Italic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4m0qyriQwlOrhSvowK_l5-eRZAf-LHrw.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Italic'), local('Merriweather-Italic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4m0qyriQwlOrhSvowK_l5-eRZOf-I.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold Italic'), local('Merriweather-BoldItalic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR71Wvf1jvzRPA.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold Italic'), local('Merriweather-BoldItalic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR71Wvf8jvzRPA.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* vietnamese */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold Italic'), local('Merriweather-BoldItalic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR71Wvf3jvzRPA.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold Italic'), local('Merriweather-BoldItalic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR71Wvf2jvzRPA.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Merriweather'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold Italic'), local('Merriweather-BoldItalic'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR71Wvf4jvw.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-cSZMZ-Y.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-eCZMZ-Y.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* vietnamese */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-cyZMZ-Y.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-ciZMZ-Y.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52xwNZVcf6lvg.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52xwNZXMf6lvg.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* vietnamese */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52xwNZV8f6lvg.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52xwNZVsf6lvg.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Merriweather'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
  ],
  proza: [
    /* cyrillic-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0Udc1UAw.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0ddc1UAw.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* greek-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0Vdc1UAw.woff2) format('woff2')`,
      `unicode-range:U+1F00-1FFF`,
    ],
    /* greek */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0adc1UAw.woff2) format('woff2')`,
      `unicode-range:U+0370-03FF`,
    ],
    /* vietnamese */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0Wdc1UAw.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0Xdc1UAw.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Italic'), local('OpenSans-Italic'), url(https://fonts.gstatic.com/s/opensans/v17/mem6YaGs126MiZpBA-UFUK0Zdc0.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhmIqOjjg.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhvIqOjjg.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* greek-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhnIqOjjg.woff2) format('woff2')`,
      `unicode-range:U+1F00-1FFF`,
    ],
    /* greek */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhoIqOjjg.woff2) format('woff2')`,
      `unicode-range:U+0370-03FF`,
    ],
    /* vietnamese */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhkIqOjjg.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhlIqOjjg.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Open Sans'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhrIqM.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* greek-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2')`,
      `unicode-range:U+1F00-1FFF`,
    ],
    /* greek */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2')`,
      `unicode-range:U+0370-03FF`,
    ],
    /* vietnamese */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOX-hpOqc.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOVuhpOqc.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* greek-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXuhpOqc.woff2) format('woff2')`,
      `unicode-range:U+1F00-1FFF`,
    ],
    /* greek */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUehpOqc.woff2) format('woff2')`,
      `unicode-range:U+0370-03FF`,
    ],
    /* vietnamese */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXehpOqc.woff2) format('woff2')`,
      `unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
    ],
    /* latin-ext */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXOhpOqc.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Open Sans'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* latin-ext */
    [
      `font-family:'Proza Libre'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Proza Libre'), local('ProzaLibre-Regular'), url(https://fonts.gstatic.com/s/prozalibre/v5/LYjGdGHgj0k1DIQRyUEyyEomdNrnWQ.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Proza Libre'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Proza Libre'), local('ProzaLibre-Regular'), url(https://fonts.gstatic.com/s/prozalibre/v5/LYjGdGHgj0k1DIQRyUEyyEoodNo.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* latin-ext */
    [
      `font-family:'Proza Libre'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Proza Libre Bold'), local('ProzaLibre-Bold'), url(https://fonts.gstatic.com/s/prozalibre/v5/LYjbdGHgj0k1DIQRyUEyyEKTUc_WeJGK9g.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Proza Libre'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Proza Libre Bold'), local('ProzaLibre-Bold'), url(https://fonts.gstatic.com/s/prozalibre/v5/LYjbdGHgj0k1DIQRyUEyyEKTUc_YeJE.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
  ],
  rubik: [
    /* latin-ext */
    [
      `font-family:'Karla'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Karla Italic'), local('Karla-Italic'), url(https://fonts.gstatic.com/s/karla/v13/qkBVXvYC6trAT7RQHtCe4YZO.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Karla'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Karla Italic'), local('Karla-Italic'), url(https://fonts.gstatic.com/s/karla/v13/qkBVXvYC6trAT7RQHt6e4Q.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* latin-ext */
    [
      `font-family:'Karla'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Karla Bold Italic'), local('Karla-BoldItalic'), url(https://fonts.gstatic.com/s/karla/v13/qkBQXvYC6trAT7RQFmW79LdvnTzC.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Karla'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Karla Bold Italic'), local('Karla-BoldItalic'), url(https://fonts.gstatic.com/s/karla/v13/qkBQXvYC6trAT7RQFmW79LlvnQ.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* latin-ext */
    [
      `font-family:'Karla'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v13/qkBbXvYC6trAT7RbLtyG5Q.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Karla'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Karla'), local('Karla-Regular'), url(https://fonts.gstatic.com/s/karla/v13/qkBbXvYC6trAT7RVLtw.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* latin-ext */
    [
      `font-family:'Karla'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Karla Bold'), local('Karla-Bold'), url(https://fonts.gstatic.com/s/karla/v13/qkBWXvYC6trAT7zuC8m3xLt3mQ.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Karla'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Karla Bold'), local('Karla-Bold'), url(https://fonts.gstatic.com/s/karla/v13/qkBWXvYC6trAT7zuC8m5xLs.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nFrXyi0A.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* hebrew */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nDrXyi0A.woff2) format('woff2')`,
      `unicode-range:U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F`,
    ],
    /* latin-ext */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nPrXyi0A.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nBrXw.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmZ8WDm7Q.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* hebrew */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmf8WDm7Q.woff2) format('woff2')`,
      `unicode-range:U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F`,
    ],
    /* latin-ext */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmT8WDm7Q.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Rubik'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmd8WA.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
  ],
  popp: [
    /* cyrillic-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif Italic'), local('PTSerif-Italic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRTQgYoZZY2vCFuvAFT_rC1chb-.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif Italic'), local('PTSerif-Italic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRTQgYoZZY2vCFuvAFT_rm1chb-.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* latin-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif Italic'), local('PTSerif-Italic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRTQgYoZZY2vCFuvAFT_rO1chb-.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif Italic'), local('PTSerif-Italic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRTQgYoZZY2vCFuvAFT_r21cg.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold Italic'), local('PTSerif-BoldItalic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRQQgYoZZY2vCFuvAFT9gaQZyTfoPNB.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold Italic'), local('PTSerif-BoldItalic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRQQgYoZZY2vCFuvAFT9gaQZy3foPNB.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* latin-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold Italic'), local('PTSerif-BoldItalic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRQQgYoZZY2vCFuvAFT9gaQZyffoPNB.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'PT Serif'`,
      `font-style:italic`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold Italic'), local('PTSerif-BoldItalic'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRQQgYoZZY2vCFuvAFT9gaQZynfoA.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFbzr-tdg.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFSzr-tdg.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* latin-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFWzr8.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* cyrillic-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qfVyvHpA.woff2) format('woff2')`,
      `unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
    ],
    /* cyrillic */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qWVyvHpA.woff2) format('woff2')`,
      `unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
    ],
    /* latin-ext */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qcVyvHpA.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'PT Serif'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qSVys.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* devanagari */
    [
      `font-family:'Poppins'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v12/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2')`,
      `unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB`,
    ],
    /* latin-ext */
    [
      `font-family:'Poppins'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v12/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Poppins'`,
      `font-style:normal`,
      `font-weight:400`,
      `font-display:swap`,
      `src:local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v12/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
    /* devanagari */
    [
      `font-family:'Poppins'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2')`,
      `unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB`,
    ],
    /* latin-ext */
    [
      `font-family:'Poppins'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2')`,
      `unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
    ],
    /* latin */
    [
      `font-family:'Poppins'`,
      `font-style:normal`,
      `font-weight:700`,
      `font-display:swap`,
      `src:local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2')`,
      `unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    ],
  ],
}

const Fonts = ({ fontScheme }) => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <style>
      {fontlist[fontScheme]
        .map((parts) => `@font-face{${parts.join(';')}}`)
        .join('')}
    </style>
  </Helmet>
)

Fonts.propTypes = {
  fontScheme: PropTypes.string.isRequired,
}

export default Fonts
