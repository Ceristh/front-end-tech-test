import { CartViews } from "../components/views/CartViews";
import { ProductListViews } from "../components/views/ProductListViews";
import { ProductDisplayViews } from "../components/views/ProductDisplayViews";
import { NavBar } from "../components/layout/NavBar";

export const MainRouter = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/cart" element={<CartViews />} />
                    <Route exact path="/products/:productID" element={<ProductDisplayViews />} />
                    <Route path="/products" element={<ProductListViews />} />
                    <Route path="*" element={<ProductListViews />} />
                </Routes>
            </Router>
        </div>
    );
};