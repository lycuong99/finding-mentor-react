export function customComponent(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    
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
        MuiButton:{
            styleOverrides: {
                root: {
                  fontSize:"1rem"
                },
               
            }
        }
    }
}