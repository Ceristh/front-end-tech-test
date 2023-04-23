export const CartProductListItem = ({
    _id,
    name,
    image,
    price,
    amount,
}) => {
    const { add, remove } = useCart();
    const handleAddItemToCart = () => {
        add({ _id, name, image, price });
    };
    const handleRemoveItemOfCart = () => {
        remove(_id);
    };
    return (
        <li className="cart-product-list__list__item card" id={_id}>
            <img
                className="cart-product-list__list__image"
                src={"http://localhost:5000" + image}
                alt={name}
            />
            <span>
                <Link to={`/products/${_id}`}>
                    <h1>{name}</h1>
                </Link>
                <h2>
                    Price: <span>${price}</span>
                </h2>
                <span>
                    <button
                        onClick={handleRemoveItemOfCart}
                    >
                        -
                    </button>
                    <h3>products: {amount}</h3>
                    <button
                        onClick={handleAddItemToCart}
                    >
                        +
                    </button>
                </span>
            </span>
        </li>
    );
};