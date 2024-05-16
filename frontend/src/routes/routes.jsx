import SiteRoot from "../pages/site/SiteRoot";
import Home from "../pages/site/Home/Home"
import Cart from "../pages/site/Cart/Cart"
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Add from "../pages/admin/Add/Add";
import Error from "../pages/Error/Error";
import Shop from "../pages/site/Shop/Shop";
import Products from "../pages/admin/Products/Products";
import Detail from "../pages/site/Detail/Detail";

const ROUTES = [{
    path: '/',
    element: <SiteRoot/>,
    children: [
        {
            path: '',
            element: <Home/>
        },
        {
            path: 'shop',
            element: <Shop/>
        },
        {
            path: 'cart',
            element: <Cart/>
        },
        {
            path: 'details/:id',
            element: <Detail/>
        },
        {
            path: '*',
            element: <Error/>
        }
    ]
},
{
    path: '/admin',
    element: <AdminRoot/>,
    children: [
        {
            path: '',
            element: <Dashboard/>
        },
        {
            path: 'products',
            element: <Products/>
        },
        {
            path: 'add',
            element: <Add/>
        }
    ]
}]

export default ROUTES