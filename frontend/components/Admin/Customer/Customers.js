import { Grid } from "@mui/material";
import { useCustomers } from "@/lib/API";
import AllCustomers from "@/components/Admin/dashboard/AllCustomers";

const Customers = () => {
  const { customers } = useCustomers();
  return (
    <Grid item xs={12} lg={12}>
      <AllCustomers customers={customers} />
    </Grid>
  );
};

export default Customers;
