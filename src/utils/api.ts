
// To fetch products from FakeStore APIS
export const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}