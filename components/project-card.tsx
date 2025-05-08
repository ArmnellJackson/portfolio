import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title?: string
  description?: string
  link?: string
  image?: string
}

export default function ProjectCard({
  title = "Proyecto",
  description = "Descripción del proyecto",
  link = "#",
  image = "/placeholder.svg?height=300&width=300",
}: ProjectCardProps) {
  return (
    <div className="flex-shrink-0 w-64">
      <div className="bg-[#424242] dark:bg-[#424242] rounded-lg overflow-hidden group">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
            <Link
              href={link}
              className="bg-[#E0E0E0] dark:bg-[#E0E0E0] text-black dark:text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white dark:hover:bg-white transition-colors"
            >
              Ver Proyecto
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-white dark:text-[#E0E0E0]">{description}</p>
      </div>
    </div>
  )
}
