import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../../baseCard/BaseCard";
import Link from "next/link";

const ProductPerfomance = ({ type, products }) => {
  return (
    <BaseCard title={`${type ? type : ""} Products`}>
      <Table
        aria-label="simple table"
        sx={{
          mt: -3,
          whiteSpace: "nowrap"
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Picture
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Model
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Brand
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                In Stock
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Price
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product._id}>
              <Link href={`/products/${product.slug}`} passHref>
                <TableCell>
                  <img src={product.image} alt={product.name} className="w-12 h-12" />
                </TableCell>
              </Link>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.model}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {product.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {product.brand}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={product.available ? "In Stock" : "Out of Stock"}
                  color={product.available ? "success" : "error"}
                  size="small"
                />

              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">${product.price}</Typography>
              </TableCell>
            </TableRow>
          )) ?? <Typography variant="h6">No Products</Typography>}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default ProductPerfomance;
