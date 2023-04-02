import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RegisterModal />
      <LoginModal />
      <Component {...pageProps} />
    </div>)
}

export default MyApp
