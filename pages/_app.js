import 'bootstrap/dist/css/bootstrap.min.css';
import SiteLayout from '../components/layout';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
      </SiteLayout>
  )
}
