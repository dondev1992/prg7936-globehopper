import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";

const theme = createTheme();

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetch("/v1/test")
      .then((res) => res.json())
      .then((data) => setTestData(data.message));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
