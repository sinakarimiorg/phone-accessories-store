import { useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import routes from './routes'
import Loader from './components/Loader/Loader';

import './App.css'
import './output.css';

function App() {
  const router = useRoutes(routes)
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScreenLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isScreenLoading ? router : <Loader />}
    </>
  );
}

export default App;
