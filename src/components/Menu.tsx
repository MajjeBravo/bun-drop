import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useMenu from "../hooks/useMenu";
import useCart from "../hooks/useCart";

function Menu() {
  const menu = useMenu();
  const { addToCart } = useCart();
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {menu.map((item) => (
        <ListItem sx={{ width: "100%", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <img
              src={require(`../images/${item.image}.png`)}
              alt={item.name}
              width={"128px"}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemText
                sx={{ ml: 2 }}
                primary={item.name}
                secondary={item.description}
              />
              <ListItemText sx={{ ml: 2 }} primary={`${item.price}kr`} />
            </Box>
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
