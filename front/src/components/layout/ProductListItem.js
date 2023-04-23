export const ProductListItem = ({
    _id,
    name,
    description,
    image,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
}) => {
    const { add } = useCart();
    const handleAddItemToCart = () => {
        add({
            _id,
            name,
            description,
            image,
            brand,
            category,
            price,
            countInStock,
            rating,
            numReviews,
        });
    };
    return (
        <li>
            <img
                src={"http://localhost:5000" + image}
                alt={name}
            />
            <main>
                <h2>{`${brand}-${category}`}</h2>
                <Link to={`/products/${_id}`}>
                    <h1>{name}</h1>
                </Link>
                <h2>{description}</h2>
                <h2>${price}</h2>
                <span>
                    rating
                    <h4>Stock: {countInStock}</h4>
                </span>
            </main>
            {countInStock === 0 ? (
                <button
                    disabled
                >
                    OUT OF STOCK!
                </button>
            ) : (
                <button
                    onClick={handleAddItemToCart}
                >
                    ADD TO CART
                </button>
            )}
        </li>
    );
};