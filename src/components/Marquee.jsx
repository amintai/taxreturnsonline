import Marquee from 'react-fast-marquee'
import { Clock } from 'lucide-react'

const announcements = [
  "✅ File your Income Tax Return starting at just ₹999",
  "📞 Talk to a CA today: +91-9512397377",
  "🚀 10,000+ returns filed  trusted by individuals & businesses across India",
  "💼 GST Registration, Company Incorporation & Compliance  all under one roof",
]

const CustomMarquee = () => {
  return (
    <div className="bg-[#005C9D] text-white text-sm font-medium">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {announcements.map((text, i) => (
          <span key={i} className="mx-10 py-2 inline-flex items-center gap-2">
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  )
}

export default CustomMarquee
