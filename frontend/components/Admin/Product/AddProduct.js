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
  
  const AddProduct = () => {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Add Product">
            <Stack spacing={3}>
              <TextField
                id="name-basic"
                label="Brand"
                variant="outlined"
              />
              <TextField
                id="name-basic"
                label="Model"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Image URL"
              />
              <TextField
                id="name-basic"
                label="Price"
                variant="outlined"
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="In stoke"
                />
              </FormGroup>
            </Stack>
            <br />
            <Button variant="contained" mt={2}>
              Submit
            </Button>
          </BaseCard>
        </Grid>
  
        <Grid item xs={12} lg={12}>
          <BaseCard title="Form Design Type">
            <Stack spacing={3} direction="row">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Stack>
          </BaseCard>
        </Grid>
      </Grid>
    );
  };
  
  export default AddProduct;
  