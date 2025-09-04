import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";
import {products} from '@/app/mock-backend/product-data'

export default function Products () {
    // TODO: mock the country, to display different product prices, but store it in localstorage so can see the checkout and cart display the correct currency prices
    return (
    <Layout>
        <h1 className="text-2xl text-bold">Products</h1>
        <ProductsList products={products} />
    </Layout>
    )
}