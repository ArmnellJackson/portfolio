import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-[#424242] dark:bg-[#424242] rounded-lg p-5 transition-transform hover:translate-y-[-5px]">
      <div className="mb-4 p-3 inline-block bg-[#E0E0E0]/20 dark:bg-[#E0E0E0]/20 rounded-lg">
        <Icon className="w-6 h-6 text-black dark:text-white" />
      </div>
      <h3 className="font-medium mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-sm text-[#E0E0E0] dark:text-[#E0E0E0]">{description}</p>
    </div>
  )
}
