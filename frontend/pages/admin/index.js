import FullLayout from "@/layouts/FullLayout";
import { useState } from "react";
import Dashboard from "./dashboard";
import { useContext } from "react"
import AddCustomer from "@/components/Admin/Customer/AddCustomer";
import Customers from "@/components/Admin/Customer/Customers";
import Products from "@/components/Admin/Product/Products";
import AddProduct from "@/components/Admin/Product/AddProduct";
import { AuthContext } from "@/context/AuthProvider";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from "@/lib/API";

export default function Index() {
  const [menu, setMenu] = useState(0)
  const { userDetails } = useContext(AuthContext)
  const { push } = useRouter();
  const { products } = useProducts();

  useEffect(() => {
    if (userDetails?.usertype !== 'admin') push('/')
  }, []);
  
  return (
    <div className="mb-16">
      {
        userDetails?.usertype === 'admin' ? (
          <FullLayout setMenu={setMenu}>
            {
              menu === 0 ? <Dashboard products={products} /> : menu === 1 ? <Products products={products} /> : menu === 2 ? <AddProduct /> : menu === 3 ? <Customers /> : menu === 4 ? <AddCustomer /> : null
            }
          </FullLayout>) : null
      }
    </div>

  );
}
