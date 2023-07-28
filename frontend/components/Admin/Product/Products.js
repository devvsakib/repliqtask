import { Grid } from "@mui/material";
import ProductPerfomance from "@/components/Admin/dashboard/ProductPerfomance";
import { useEffect, useState } from "react";
import api from "@/lib/API";

const Products = ({products}) => {
  return (
    <Grid item xs={12} lg={12}>
      <ProductPerfomance products={products} />
    </Grid>
  );
};

export default Products;
