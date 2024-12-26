import Index from './pages/Index/Index'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import ArticleInfo from './pages/ArticleInfo/ArticleInfo'


const routes = [
    { path: '/', element: <Index /> },
    { path: '/product-info/:productName', element: <ProductInfo/> },
    { path: '/article-info/:productName', element: <ArticleInfo/> },
]

export default routes