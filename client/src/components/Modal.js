import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

export default function TransitionsModal({ continent }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [country, setCountry] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ fontSize: "1.25rem", color: "black" }} onClick={handleOpen}>
        {continent.continent}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {continent.continent}
            </Typography>
            <hr />
            <Typography variant="body1" component="h3" mt={2}>
              {continent.description}
            </Typography>
            <Typography variant="body1" component="h3" mt={2}>
              <strong>Most popular Countries:</strong>
            </Typography>

            {continent.countries.map((countryName) => (
              <Typography key={countryName} id="transition-modal-description">
                <Link
                  to={`country/${countryName}`}
                  state={{ countryName }}
                  style={{ color: "black", textDecorationLine: "none" }}
                >
                  {countryName}
                </Link>
              </Typography>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
