import Index from './pages/Index/Index'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import ArticleInfo from './pages/ArticleInfo/ArticleInfo'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'
import Articles from './pages/Articles/Articles'
import Search from './pages/Search/Search'


import AdminPanel from './pages/Admin Panel/Index'
import PAdminIndex from './pages/Admin Panel/Index/Index'

const routes = [
    { path: '/', element: <Index /> },
    { path: '/*', element: <NotFound /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/contact', element: <Contact /> },
    { path: 'search/:value', element: <Search /> },
    { path: '/product-info/:productName', element: <ProductInfo /> },
    { path: '/products/:page', element: <Products /> },
    { path: '/product-info/:productName', element: <ProductInfo /> },
    { path: '/articles/:page', element: <Articles /> },
    { path: '/article-info/:productName', element: <ArticleInfo /> },
    {
        path: '/p-admin/*',
        element: <AdminPanel />,

        Children: [
            { path: '', element: <PAdminIndex /> },
        ]
    }
]

export default routes