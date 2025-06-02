import React, { useEffect, useState } from 'react'
import { getProducts } from '../utils/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts();
    }, [])

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {products.map(product => (
                    <div key={product.id} className="border p-2 rounded shadow">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
                            <h2 className="text-sm font-semibold">{product.title.slice(0, 40)}...</h2>
                            <p className="text-green-600 font-bold">${product.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;