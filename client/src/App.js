import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Authenticated from "./components/Authenticated";
import Unauthenticated from "./components/Unauthenticated";
import { purple } from "@mui/material/colors";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";
import CountryViewPage from "./pages/CountryViewPage";
import CityViewPage from "./pages/CityViewPage";
import ProfilePage from "./pages/ProfilePage";

const theme = createTheme({
  palette: {
    primary: purple,
  },
});

// export { purple };

function App() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        {user ? (
          <Routes>
            <Route path="/" element={<Authenticated />}>
              <Route index element={<Home />} />
              <Route
                path="country/:countryName"
                element={<CountryViewPage />}
              />
              <Route path="city/:cityName" element={<CityViewPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              {user && user.isadmin === true ? (
                <Route path="admin" element={<AdminPage />} />
              ) : null}
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Unauthenticated />}>
              <Route index element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
