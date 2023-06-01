import { IconButton, Toolbar, Typography } from "@mui/material"
import AppBar from "@mui/material/AppBar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import logo from "../logo_color.png";

const Navbar = () =>{
  const navigate = useNavigate()
  return( <AppBar position="static" sx={{ backgroundColor: "#0C1618" }}>
  <Toolbar>
    <IconButton
    onClick={() => navigate("/")}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <img src={logo} width={"64px"} alt="" />
    </IconButton>
    
    <IconButton size="large" onClick={() => navigate("/menu")} >
      <FastfoodIcon sx={{color: "#FFA07A"}}/>
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: "#FFA07A", ml: "8px", display: {xs: "none", md:"flex"} }}>
      Meny
    </Typography>
    </IconButton> 
    <IconButton size="large" onClick={() => navigate("/cart")} >
      <ShoppingCartIcon sx={{color: "#FFA07A"}}/>
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: "#FFA07A", ml: "8px", display: {xs: "none", md:"flex"} }}>
      Kundvagn
    </Typography>
    </IconButton> 
  </Toolbar>
  </AppBar>)
}




export default Navbar