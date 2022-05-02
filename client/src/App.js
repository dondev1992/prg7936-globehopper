import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import CityViewPage from "./pages/CityViewPage";
import CountryViewPage from "./pages/CountryViewPage";

const theme = createTheme();

function App() {
  // const [testData, setTestData] = useState(null);

  // useEffect(() => {
  //   fetch("/v1/test")
  //     .then((res) => res.json())
  //     .then((data) => setTestData(data.message));
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/city" element={<CityViewPage />} />
          <Route path="/country" element={<CountryViewPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
