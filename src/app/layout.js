import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import { NextAuthProvider } from '@/providers/NextAuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin']
})


export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeContextProvider>
          <ThemeProvider >
            <NextAuthProvider>
              <div className='container mx-auto w-full'>
                <div className='wrapper '>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </NextAuthProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
