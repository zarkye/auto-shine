import { Provider } from "@/components/ui/provider"
import "..//styles/globals.css"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Header/>
            {children} 
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}