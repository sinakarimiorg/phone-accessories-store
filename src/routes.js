import Index from './pages/Index/Index'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import ArticleInfo from './pages/ArticleInfo/ArticleInfo'
import NotFound from './pages/NotFound/NotFound'


const routes = [
    { path: '/', element: <Index /> },
    { path: '/product-info/:productName', element: <ProductInfo/> },
    { path: '/article-info/:productName', element: <ArticleInfo/> },
    { path: '/*', element: <NotFound/> },
]

export default routes