import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate()
  return (
    <Box>
      <List sx={{ width: "100%" }}>
        {!cart.length && <Typography variant="h3" margin={4}>Kundvagnen är tom</Typography>}
        {cart.map((item) => (
          <ListItem sx={{ width: "100%", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <img
                src={require(`../images/${item.image}.png`)}
                alt={item.name}
                width={"128px"}
              />
              <Box sx={{ml: 2}}>
                <ListItemText primary={item.name} secondary={item.price + "kr"} />
                <ListItemText primary={"Antal: " + item.quantity} />
              </Box>
            </Box>
            <IconButton size="large" onClick={() => removeFromCart(item.id)}>
              <DeleteForeverIcon />
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  flexGrow: 1,
                  ml: "8px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Ta bort
              </Typography>
            </IconButton>
          </ListItem>
        ))}
      </List>
     {  !!cart.length && <Box sx={{display: "flex", column: "row", justifyContent: "space-between", mx: 3}}>
      <Typography variant="h3">{"Totalpris: " + totalPrice + "kr"}</Typography>
      <Button onClick={() => navigate("/payment")} variant="contained">Betala</Button>
      </Box>}
    </Box>
  );
}

export default Cart;


//Github push