import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Premium from './components/Premium/Premium'
import Stats from './components/Stats/Stats'

const fetchProductsData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProductsData();
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
        <Premium productsPromise={productsPromise}/>
      </Suspense>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
