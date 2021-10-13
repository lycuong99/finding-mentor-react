export function customComponent(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    // boxShadow: 'rgb(61 71 82 / 20%) 0px 4px 20px'
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {

                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {

                    '&::placeholder': {

                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {

                },
                input: {

                },
                inputAdornedStart: {

                },
                notchedOutline: {

                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1rem"
                },
                contained : {
                    color:'white'
                }
            }
        },

    }
}