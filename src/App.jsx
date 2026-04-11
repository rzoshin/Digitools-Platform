import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import GetStarted from './components/GetStarted/GetStarted'
import Pricing from './components/Pricing/Pricing'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
import Copyright from './components/Footer/Copyright'
import Products from './components/Products/Products'
import { ToastContainer } from 'react-toastify'

const fetchProductsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}

const fetchPricingData = async () => {
  const res = await fetch('./pricingData.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProductsData();
  const pricingPromise = fetchPricingData();

  return (
    <>
    <header>
      <nav>
        <Navbar />
      </nav>
      <Banner />
    </header>
    <main>
      <Stats />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products productsPromise={productsPromise}/>
      </Suspense>
      <GetStarted />
      <ToastContainer />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Pricing pricingPromise={pricingPromise}/>
      </Suspense>
      <Join />
    </main>
    <footer>
      <Footer />
      <Copyright />
    </footer>
    </>
  )
  
}

export default App
