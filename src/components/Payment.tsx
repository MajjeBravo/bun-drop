import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
type PayOption = "swish" | "card";

function Payment() {
  const [step, setStep] = useState(1);
  const [payOption, setPayOption] = useState<PayOption>("swish");
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const handleOrder = () => {
    setStep((s) => s + 1);
    clearCart();
  };
  return (
    <Box>
      {step === 1 && (
        <Box sx={{ display: "flex", flexDirection: "column", m: 32, mt: 8 }}>
          <Typography variant="h3">Fyll leveransuppgifter</Typography>
          <TextField name="name" placeholder="Namn" />
          <TextField name="lastname" placeholder="Efternamn" />
          <TextField name="Address" placeholder="Adress" />
          <TextField name="City" placeholder="Stad" />
          <TextField name="houseNr" placeholder="Husnummer" type="number" />
          <TextField name="postalcode" placeholder="Postnummer" type="string" />
          <Button onClick={() => setStep((s) => s + 1)}>Nästa steg</Button>
        </Box>
      )}
      {step === 2 && (
        <Box sx={{ display: "flex", flexDirection: "column", m: 32, mt: 8 }}>
          <Typography variant="h3">Välj betalningsalternativ</Typography>
          <Box>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="swish"
              name="radio-buttons-group"
              onChange={(v) => setPayOption(v.target.value as PayOption)}
            >
              <FormControlLabel
                value="swish"
                control={<Radio />}
                label="Swish"
              />
              {payOption === "swish" && (
                <TextField placeholder="Telefonnummer" />
              )}
              <FormControlLabel value="card" control={<Radio />} label="Kort" />
              {payOption === "card" && (
                <Box>
                  <TextField placeholder="Kortnummer" />
                  <TextField placeholder="cvc" />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Giltligt till</Typography>
                    <Box>
                      <TextField placeholder="mm" />
                      <TextField placeholder="yy" />
                    </Box>
                  </Box>
                </Box>
              )}
            </RadioGroup>
          </Box>
          <Button onClick={() => setStep((s) => s - 1)}>Förgående steg</Button>
          <Button onClick={handleOrder}>Slutför Beställning</Button>
        </Box>
      )}
      {step === 3 && (
        <Box sx={{ display: "flex", flexDirection: "column", m: 32, mt: 8, alignItem: "center", textAlign:"center" }}>
          <Typography variant="h3"> Din Leverans är påväg</Typography>

          <Typography variant="h3">
            {`Anländer om ${Math.round(Math.random() * 60)} minuter`}
          </Typography>

          <DeliveryDiningIcon sx={{ fontSize: "256px" }} />

          <Button onClick={() => navigate("/")}>
            Gå tillbaka till startsidan
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Payment;

//Github push
