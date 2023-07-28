import Layout from '@/components';
import { CartContext } from '@/context/CartProvider';
import { useProductById } from '@/lib/API';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs';


const ProductDetail = () => {
    const router = useRouter();
    const { cartItems, addToCart } = useContext(CartContext);
    const { slug } = router.query;
    const { product, isLoading, error } = useProductById(slug);

    const handleAddToCart = (product) => {
        addToCart(product);
        console.log(product.available);
    }

    return (
        <div className='mb-32 mt-12'>
            <Layout>
                <Link href="/products">
                    <div className='flex items-center gap-2'>
                        <BsArrowLeft />
                        <span>
                            Go Back
                        </span>
                    </div>
                </Link>
                <h1 className='mb-5 mt-10 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-xl md:text-3xl font-bold text-center'>{product?.model}</h1>
                <div className='my-5 mt-10 grid grid-cols-1 md:grid-cols-3'>
                    <div className='grid place-items-center'>
                        {
                            isLoading ? <Image
                                src={"/spinner.svg"}
                                alt="Spinner"
                                className="mx-auto"
                            /> : <img
                                src={product?.image}
                                alt={product?.model ?? "Loading"}
                                className='mx-auto'
                            />
                        }
                    </div>
                    <div className='mx-auto md:w-3/12 mt-5 col-span-2 flex flex-col gap-5'>
                        <p className='flex gap-5'><b>Brand:</b> {product?.brand ?? "Loading"}</p>
                        <p className='flex gap-5'><b>Price:</b> ${product?.price ?? "Loading"}</p>
                        <p className='flex gap-5'><b>In Stock:</b> {product?.available ? "Yes" : "No"}</p>
                        {
                            !product?.available ? <p className='text-red-400'>Out of stock</p>
                                :
                                <button onClick={() => handleAddToCart(product)} className='btn-primary'>Add To Cart</button>
                        }

                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ProductDetail