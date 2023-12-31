import { Playfair_Display} from 'next/font/google';

import Footer from '../components/layouts/Footer'
import Headers from '@/components/layouts/Headers'
import './app.css';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin-ext']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Headers/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
