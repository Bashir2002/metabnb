import { Link, Outlet } from 'react-router-dom'
import { Navbar, Sidebar, Footer, CartButtons } from '../components/index'

// C:\Users\Headmaster\Documents\GitHub\comfy\my-app\src\components\Navbar.js

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <section className='section'> */}
      <Outlet />
      {/* </section> */}
      <Footer />
    </>
  )
}
export default Home
