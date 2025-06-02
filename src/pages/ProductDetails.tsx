import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProductsByID } from '../utils/api';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../contexts/CartContext';



const ProductDetails = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const { id } = useParams();
    const { dispatch } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            const item = await getProductsByID(Number(id))
            console.log(item)
            setProduct(item)
        }
        fetchProduct()
    }, [])

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            {/* <h1>Product Details</h1> */}
            <div className="p-6 grid md:grid-cols-2 gap-6">
                <img src={product.image} alt={product.title} className="h-72 mx-auto" />
                <div>
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <p className="text-gray-700 my-2">{product.description}</p>
                    <p className="text-lg font-bold text-green-600">${product.price}</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                        onClick={() => dispatch({ type: "ADD", payload: product })}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails