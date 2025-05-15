import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 px-4 py-24 mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 neon-text">DJs_YOLOS</h1>

        <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-3xl mx-auto">
          הופך אירועים רגילים לחוויות יוצאות דופן עם ביטים מחשמלים
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/contact">הזמינו עכשיו</Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="border-purple-500 text-white hover:bg-purple-950/30">
            <Link href="/gallery" className="flex items-center gap-2">
              צפו בגלריה <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-purple-400"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
