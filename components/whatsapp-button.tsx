"use client"

import { MessageSquare } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "972501234567" // החלף במספר הוואטסאפ האמיתי שלך
  const message = "היי, ראיתי את האתר שלך ורציתי לבדוק זמינות"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="ml-2 py-2 px-4 bg-white text-green-600 rounded-lg shadow-lg text-sm font-medium animate-in fade-in slide-in-from-left-5 duration-300">
          צ'אט בוואטסאפ
        </span>
      )}
      <div className="bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg animate-glow">
        <MessageSquare className="h-6 w-6 text-white" />
      </div>
    </a>
  )
}
