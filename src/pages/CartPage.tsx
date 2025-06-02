import { useCart } from '../contexts/CartContext';

const CartPage = () => {
    const { cart, dispatch } = useCart();

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                        <p>{item.title}</p>
                        <p>${item.price} x {item.qty}</p>
                        <button
                            onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                            className="text-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
            <h2 className="mt-6 text-lg font-bold">Total: ${total.toFixed(2)}</h2>
        </div>
    )
}

export default CartPage