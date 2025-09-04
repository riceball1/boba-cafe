import ProductsList from "../components/ProductsList";
import {products} from '@/app/mock-backend/product-data'

export default function Products () {
    return (
    <>
        <h1>Products</h1>
        <ProductsList products={products} />
    </>
    )
}