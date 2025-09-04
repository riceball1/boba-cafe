import ProductsList from "../components/ProductsList";
import {products} from '@/app/mock-backend/product-data'

export default function Products () {
    return (
    <>
        <h1 className="text-2xl text-bold">Products</h1>
        <ProductsList products={products} />
    </>
    )
}