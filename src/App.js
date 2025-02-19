import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const Products = lazy(() => import('./pages/Products'))

const App = () => {
    return (
        <div id='App'>
            <Header />
            <div style={{ marginTop: '100px' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
