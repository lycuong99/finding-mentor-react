import { grey } from "@mui/material/colors";

const fontColor = '#1d2434';
export function themeTypography() {
    return {
        h6: {
            fontWeight: 500,
            fontSize: '0.75rem',
            color: fontColor
        },
        h5: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: fontColor
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 600,
            color: fontColor
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: fontColor,
            fontFamily: 'Inter, Roboto',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: fontColor,
            fontFamily: 'Inter, Roboto',
        },
        h1: {
            fontSize: '2.125rem',
            fontWeight: 700,
            fontFamily: 'Inter, Roboto',
            color: fontColor
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            color: fontColor
        },
        subtitle2: {
            fontSize: '0.85rem',
            fontWeight: 500,
            color: grey[600]

        },
        caption: {
            fontSize: '0.75rem',

            fontWeight: 400
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.334em',
          
        },
        body2: {
            letterSpacing: '0em',
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '1.8em',
            fontFamily: 'Epilogue'

        },
    }
}