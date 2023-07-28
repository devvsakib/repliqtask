import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "@/components/baseCard/BaseCard";

const AddCustomer = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Customer">
          <Stack spacing={3}>
            <TextField
              id="name-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              id="pass-basic"
              label="Password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="name-basic"
              label="Role"
              variant="outlined"
            />
          </Stack>
          <br />
          <Button variant="contained" mt={2}>
            Add
          </Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default AddCustomer;
