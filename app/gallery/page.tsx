import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-text">גלריה</h1>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          צפו בהופעות ואירועים אחרונים שלי. אני מביא אנרגיה לכל מקום ויוצר חוויות בלתי נשכחות.
        </p>

        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">הכל</TabsTrigger>
            <TabsTrigger value="photos">תמונות</TabsTrigger>
            <TabsTrigger value="videos">סרטונים</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <GalleryGrid filter="all" />
          </TabsContent>
          <TabsContent value="photos">
            <GalleryGrid filter="photos" />
          </TabsContent>
          <TabsContent value="videos">
            <GalleryGrid filter="videos" />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </main>
  )
}
