import Layout from "@/components";
import Category from "@/components/Category";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { useCategories, useProducts } from "@/lib/API";

export default function Home() {
  const { products, isLoading, isError } = useProducts();
  const { categories } = useCategories();

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      <HeroSection />
      <Layout>
        <div className="my-20">
          <h3 className="font-semibold text-xl">Explore Brands</h3>
          <div>
            {
              isLoading && <Image
                src={"/spinner.svg"}
                alt="Spinner"
                width={100}
                height={100}
                className="mx-auto"
              />}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
            {
              categories?.map(category => <Category key={category.id} category={category} />)
            }
          </div>
          <div className="my-32">
            <h1 className="mb-5 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-xl md:text-3xl font-bold text-center">Awesome Products</h1>
            <div>
              {
                isLoading && <Image
                  src={"/spinner.svg"}
                  alt="Spinner"
                  width={100}
                  height={100}
                  className="mx-auto"
                />}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
              {
                products?.slice(0, 8).map((product, idx) => <ProductCard key={idx} product={product} />)
              }
            </div>
            <div className="mt-16 text-center">
              <Link className="btn-primary" href="/products">
                All Products
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
