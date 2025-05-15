"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // בהטמעה אמיתית, תשלח את נתוני הטופס לשרת שלך
      // למטרות הדגמה, נדמה שליחה מוצלחת לאחר השהיה
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // איפוס הטופס והצגת הודעת הצלחה
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setIsSubmitted(true)

      // הסתרת הודעת ההצלחה לאחר 5 שניות
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">ההודעה נשלחה!</h3>
          <p className="text-gray-300">תודה שיצרת קשר! אחזור אליך בהקדם האפשרי.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">שם</Label>
              <Input
                id="name"
                name="name"
                placeholder="השם שלך"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">אימייל</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">טלפון</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="מספר הטלפון שלך"
                value={formState.phone}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">הודעה</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="ספר לי על האירוע שלך..."
                value={formState.message}
                onChange={handleChange}
                required
                className="min-h-[120px] bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-sm text-red-200">{error}</div>
          )}

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
            {isSubmitting ? "שולח..." : "שלח הודעה"}
          </Button>
        </>
      )}
    </form>
  )
}
