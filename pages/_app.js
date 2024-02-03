import '@/styles/globals.css'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function App({ Component, pageProps }) {
  return <ReactLenis root><div className='bg-[#F4F0E6]'><Component {...pageProps} /></div></ReactLenis>
}
