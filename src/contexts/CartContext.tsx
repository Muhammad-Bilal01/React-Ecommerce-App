import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { toast } from 'react-toastify';

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
};

export type CartItem = Product & {
    qty: number;
};

type Action =
    | { type: 'ADD'; payload: Product }
    | { type: 'REMOVE'; payload: number };

type CartState = CartItem[];

type CartContextType = {
    cart: CartState;
    dispatch: React.Dispatch<Action>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);


const cartReducer = (state: CartState, action: Action) => {
    switch (action.type) {
        case 'ADD':
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (itemExists) {
                toast.info(`${action.payload.title} quantity increased.`);
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            toast.success(`${action.payload.title} added to cart.`);
            return [...state, { ...action.payload, qty: 1 }];
        case 'REMOVE':
            toast.error(`Item removed from cart.`);
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
}


// Load cart from localStorage on init
const loadFromLocalStorage = (): CartState => {
    try {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], loadFromLocalStorage);

    // 💾 Save cart to localStorage on changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};