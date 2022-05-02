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

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(props.data);
  };
  const handleClose = () => setOpen(false);

  // let countries = props.countries.map((country) => country.name);

  return (
    <div>
      <Button sx={{ fontSize: "1.25rem", color: "black" }} onClick={handleOpen}>
        {props.data.continent}
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
              {props.data.continent}
            </Typography>
            <hr />
            <Typography variant="body1" component="h3" mt={2}>
              {props.data.description}
            </Typography>
            <Typography variant="body1" component="h3" mt={2}>
              <strong>Most popular Countries:</strong>
            </Typography>

            {props.data.countries.map((country) => (
              <Typography key={country.id} id="transition-modal-description">
                <Link
                  to="/country"
                  state={{ country }}
                  style={{ color: "black", textDecorationLine: "none" }}
                >
                  {country.name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
