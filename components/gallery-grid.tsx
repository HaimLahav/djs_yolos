"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play, Calendar, MapPin } from "lucide-react"

// במציאות זה יגיע ממסד נתונים או מערכת ניהול תוכן
const galleryItems = [
  {
    id: 1,
    type: "photo",
    thumbnail: "/placeholder.svg?height=400&width=600",
    fullImage: "/placeholder.svg?height=800&width=1200",
    title: "מסיבת חוף קיץ",
    date: "15 באוגוסט, 2023",
    location: "חוף תל אביב",
    description: "מסיבת חוף שנתית עם יותר מ-500 משתתפים",
  },
  {
    id: 2,
    type: "photo",
    thumbnail: "/placeholder.svg?height=400&width=600",
    fullImage: "/placeholder.svg?height=800&width=1200",
    title: "אירוע חברה",
    date: "22 במאי, 2023",
    location: "מלון הילטון, תל אביב",
    description: "חגיגת סוף שנה לחברת הייטק",
  },
  {
    id: 3,
    type: "video",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "#", // בהטמעה אמיתית זו תהיה כתובת וידאו אמיתית
    title: "קבלת פנים בחתונה",
    date: "10 ביוני, 2023",
    location: "אולם גן, ירושלים",
    description: "חתונה יפהפייה עם אווירה מדהימה על רחבת הריקודים",
  },
  {
    id: 4,
    type: "photo",
    thumbnail: "/placeholder.svg?height=400&width=600",
    fullImage: "/placeholder.svg?height=800&width=1200",
    title: "לילה במועדון",
    date: "5 ביולי, 2023",
    location: "מועדון פולס",
    description: "מועדון מלא לערב המוזיקה האלקטרונית החודשי",
  },
  {
    id: 5,
    type: "video",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "#", // בהטמעה אמיתית זו תהיה כתובת וידאו אמיתית
    title: "הופעה בפסטיבל",
    date: "3 בספטמבר, 2023",
    location: "פארק המוזיקה, חיפה",
    description: "הופעה על הבמה המרכזית בפסטיבל המוזיקה השנתי",
  },
  {
    id: 6,
    type: "photo",
    thumbnail: "/placeholder.svg?height=400&width=600",
    fullImage: "/placeholder.svg?height=800&width=1200",
    title: "מסיבת יום הולדת",
    date: "12 באוקטובר, 2023",
    location: "וילה פרטית",
    description: "חגיגת יום הולדת 30 עם חברים ומשפחה",
  },
]

interface GalleryGridProps {
  filter: "all" | "photos" | "videos"
}

export default function GalleryGrid({ filter }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true
    if (filter === "photos") return item.type === "photo"
    if (filter === "videos") return item.type === "video"
    return true
  })

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item rounded-lg overflow-hidden bg-gray-900 border border-gray-800 cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-video">
              <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-3">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <Calendar className="h-4 w-4 ml-1" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="h-4 w-4 ml-1" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-gray-900 border-gray-700">
          {selectedItem && (
            <div>
              <div className="relative aspect-video mb-4">
                {selectedItem.type === "photo" ? (
                  <Image
                    src={selectedItem.fullImage || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center rounded-md">
                    <p className="text-gray-400">נגן הוידאו יופיע כאן</p>
                    <Play className="h-12 w-12 text-white absolute" />
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 ml-2 text-purple-500" />
                  <span>{selectedItem.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 ml-2 text-purple-500" />
                  <span>{selectedItem.location}</span>
                </div>
              </div>

              <p className="text-gray-300">{selectedItem.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
