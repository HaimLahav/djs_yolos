import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Music, Headphones, Calendar, Users } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מביא את ה<span className="text-purple-500">וייב</span> לאירוע שלכם
          </h2>
          <p className="text-lg text-gray-300">
            אני דיג'יי מקצועי עם תשוקה ליצירת חוויות מוזיקליות בלתי נשכחות. מחתונות ועד אירועי חברה, אני מביא אנרגיה,
            מומחיות ופלייליסט מושלם שיהפוך את האירוע שלכם לבלתי נשכח.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-900 hover:border-purple-600 transition-colors">
            <div className="bg-purple-600/20 p-3 rounded-full w-fit mb-4">
              <Music className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">מוזיקה מגוונת</h3>
            <p className="text-gray-400">
              מהלהיטים האחרונים ועד הקלאסיקות הנצחיות, אני מתאים את הפלייליסט המושלם לאווירת האירוע שלכם.
            </p>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-900 hover:border-purple-600 transition-colors">
            <div className="bg-purple-600/20 p-3 rounded-full w-fit mb-4">
              <Headphones className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">ציוד מקצועי</h3>
            <p className="text-gray-400">מערכות סאונד ותאורה באיכות גבוהה ליצירת האווירה המושלמת בכל מקום.</p>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-900 hover:border-purple-600 transition-colors">
            <div className="bg-purple-600/20 p-3 rounded-full w-fit mb-4">
              <Calendar className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">כל סוגי האירועים</h3>
            <p className="text-gray-400">חתונות, אירועי חברה, ימי הולדת, מועדונים - אני מביא את האנרגיה לכל אירוע.</p>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-900 hover:border-purple-600 transition-colors">
            <div className="bg-purple-600/20 p-3 rounded-full w-fit mb-4">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">קריאת קהל</h3>
            <p className="text-gray-400">
              מומחה בקריאת האווירה והתאמת המוזיקה כדי לשמור על אנרגיה גבוהה ורחבת ריקודים מלאה.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 via-purple-600/20 to-purple-900/20 p-8 md:p-12 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">מוכנים להפוך את האירוע שלכם לבלתי נשכח?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            בואו ניצור חוויה מותאמת אישית שתגרום לאורחים שלכם לדבר עליה במשך שנים.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/contact">צרו קשר</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
