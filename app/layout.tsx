import type React from "react"
import { Rubik } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const rubik = Rubik({ subsets: ["hebrew"] })

export const metadata = {
  title: "DJs Yolos | שירותי דיג'יי מקצועיים",
  description: "הזמינו את DJs Yolos לאירוע הבא שלכם. שירותי דיג'יי מקצועיים למסיבות, חתונות, אירועי חברה ועוד.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${rubik.className} bg-black text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
