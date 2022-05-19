import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountIcon from "./AccountIcon";

export default function SearchAppBar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }

  function logIn() {
    window.location.href = "/";
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation="10">
        <Box>
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontSize: "1rem",
              }}
            >
              <Button
                variant="h6"
                component="div"
                onClick={() => navigate("/")}
              >
                GlobeHopper
              </Button>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {user && (
                <Typography sx={{ mr: 2 }}>Welcome, {user.name}!</Typography>
              )}
              <Box>
                {user ? (
                  <AccountIcon logOut={logOut} />
                ) : (
                  <Button color="inherit" onClick={logIn}>
                    Login
                  </Button>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
