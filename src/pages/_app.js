import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<>
    <Component {...pageProps} />
  </>)
}