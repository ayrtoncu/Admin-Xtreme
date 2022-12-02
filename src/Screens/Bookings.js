import { MoreVert } from "@mui/icons-material";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import Title from "../Components/Title";
import { appfirebase } from "../services/firebase";

const Bookings = () => {
  return (
    <div>
      <Grid>
        <Grid>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Title>Reservas</Title>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha Reserva</TableCell>
                  <TableCell>Tour</TableCell>
                  <TableCell>Fecha Salida</TableCell>
                  <TableCell>Privado/Grupo</TableCell>
                  <TableCell>Idioma</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TargetTour fechaReserve="03/12/2022" tour="Salkantay Trek - Inca Trail Machu Picchu 6 Days" fechaSalida="22/11/2023" typeGroup="Grupo" idiom="Frances" />
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bookings;

const TargetTour = ({fechaReserve, tour, fechaSalida, typeGroup, idiom}) => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableRow>
      <TableCell>{fechaReserve}</TableCell>
      <TableCell>{tour}</TableCell>
      <TableCell>{fechaSalida}</TableCell>
      <TableCell>{typeGroup}</TableCell>
      <TableCell>{idiom}</TableCell>
      <IconButton aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVert/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem>Editar</MenuItem>
        <MenuItem>Eliminar</MenuItem>
        <MenuItem>Cancelar</MenuItem>
      </Menu>
    </TableRow>
  );
};
