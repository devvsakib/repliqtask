import * as React from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function About() {
  return (
    <Grid container spacing={0} marginY={10}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <Card>
          <CardContent>
            <Typography textAlign={"center"} variant="h4" marginBottom={2}>About Us</Typography>
            <Typography variant="body1">
              FantasiStore is a website that sells various kinds of products, especially electronic products. Buy new launched smart phone and other electronic products at FantasiStore. We provide the best service for you.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
