import React from "react";
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

const AllCustomers = ({ customers }) => {
  return (
    <BaseCard title="Customers">
      <Table
        aria-label="simple table"
        sx={{
          mt: -3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                username
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Phone
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Role
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow>
              <Link href={`/customer/${customer.username}`} key={customer._id}>
                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {customer.name}
                  </Typography>
                </TableCell>
              </Link>
              <TableCell>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {customer.username}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {customer.usertype}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color="textSecondary"
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  {customer.phoneNumber}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color="textSecondary"
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  {customer.type}
                </Typography>
              </TableCell>
            </TableRow>
          )) ?? <Typography variant="h6">No Customers</Typography>}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllCustomers;
