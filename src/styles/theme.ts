import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    primary: {
      main: "#bb86fc",
    },
    secondary: {
      main: "#03dac6",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    body1: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    body2: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "none",
          padding: "10px 20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            backgroundColor: "#fff",
          },
          "& .MuiOutlinedInput-input": {
            color: "#000",
          },
          "& .MuiInputLabel-root": {
            color: "#bb86fc",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#bb86fc",
            },
        },
      },
    },
  },
});

export default theme;
