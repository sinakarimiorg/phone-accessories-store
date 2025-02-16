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


import AdminPanel from './pages/AdminPanel/Index'
import PAdminIndex from './pages/AdminPanel/Index/Index'
import PAdminProducts from './pages/AdminPanel/Products/Products'
import PAdminUsers from './pages/AdminPanel/Users/Users'
import PAdminArticles from './pages/AdminPanel/Articles/Articles'

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
        children: [
            { path: '', element: <PAdminIndex /> },
            { path: 'products', element: <PAdminProducts /> },
            { path: 'users', element: <PAdminUsers /> },
            { path: 'articles', element: <PAdminArticles /> },
        ]
    }
]

export default routes