export const ProductList = ({ productList = [] }) => {
    return (
        <ul className="product_list">
            {productList.map((product) => (
                <ProductListItem key={product._id} {...product} />
            ))}
        </ul>
    );
};