import { CartProductListItem } from "./CartProductListItem";

export const CartProductList = () => {
    const { cart, cartPrice } = useCart();
    return (
        <div>
            <strong>
                {cart.length === 0 ? (
                    <strong>No items in the cart</strong>
                ) : (
                    <ul className="cart-product-list__list">
                        {cart.map((product) => (
                            <CartProductListItem key={product._id} {...product} />
                        ))}

                        <strong>Total price: ${cartPrice}</strong>
                    </ul>
                )}
            </strong>
        </div>
    );
};
