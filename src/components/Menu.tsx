import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useMenu from "../hooks/useMenu";
import useCart from "../hooks/useCart";



function Menu() {
    const menu = useMenu()
    const {addToCart} = useCart()
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {menu.map((item) => (
        <ListItem sx={{width: "100%", justifyContent: "space-between"}}>
          <Box sx={{display : "flex"}}>
            <img
              src={require(`../${item.image}.png`)}
              alt={item.name}
              width={"128px"}
            />
            <ListItemText primary={item.name} secondary={item.description} />
          </Box>
          <IconButton size="large" onClick={() => addToCart(item.id)}>
            <AddShoppingCartIcon />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                flexGrow: 1,
                ml: "8px",
                display: { xs: "none", md: "flex" },
              }}
            >
              Lägg till
            </Typography>
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Menu;
