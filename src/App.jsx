
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Products from './pages/Products'

function App() {


  const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Main/>
        },
        {
          path:'/products',
          element: <Products/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App
