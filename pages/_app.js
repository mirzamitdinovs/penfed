import Head from 'next/head'
import TopBar from 'components/TopBar'
import Footer from 'containers/Footer'
import Navbar from 'containers/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css" integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/brands.min.css" integrity="sha512-+oRH6u1nDGSm3hH8poU85YFIVTdSnS2f+texdPGrURaJh8hzmhMiZrQth6l56P4ZQmxeZzd2DqVEMqQoJ8J89A==" crossorigin="anonymous" referrerpolicy="no-referrer" /></Head>
      <TopBar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </div>
  )
}

export default MyApp
