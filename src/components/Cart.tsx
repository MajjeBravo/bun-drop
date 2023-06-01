import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useCart from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();
  return (
    <Box>
      <List sx={{ width: "100%" }}>
        {cart.map((item) => (
          <ListItem sx={{ width: "100%", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <img
                src={require(`../${item.image}.png`)}
                alt={item.name}
                width={"128px"}
              />
              <Box>
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
      <Typography>{"Totalpris: " + totalPrice + "kr"}</Typography>
    </Box>
  );
}

export default Cart;


//Github push