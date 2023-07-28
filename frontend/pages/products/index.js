import Layout from '@/components'
import ProductCard from '@/components/ProductCard'
import { useProducts } from '@/lib/API';

const Product = () => {
    const { products, isLoading, isError } = useProducts();
    if (isError) {
        return <div>Error: {isError.message}</div>;
    }

    return (
        <div>
            <Layout>
                <h1 className="my-10 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-xl md:text-3xl font-bold text-center">All Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
                    {
                        products?.map((product, idx) => <ProductCard key={idx} product={product} />)
                    }
                </div>
            </Layout>
        </div>
    )
}

export default Product