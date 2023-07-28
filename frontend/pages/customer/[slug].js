import Layout from '@/components';
import CustomerDetails from '@/components/CustomerDetails';
import { useCustomerByUsername } from "@/lib/API";
import { useRouter } from "next/router";

const Index = () => {
    const { slug } = useRouter().query
    const { customer } = useCustomerByUsername(slug);

    console.log(customer, slug);
    return (
        <Layout>
            <CustomerDetails customer={customer} />
        </Layout>
    )
}

export default Index