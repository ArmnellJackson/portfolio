import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title?: string
  description?: string
  link?: string
  image?: string
  repoLink?: string // New prop for repository link
}

export default function ProjectCard({
  title = "Proyecto",
  description = "Descripción del proyecto",
  link = "#",
  image = "/placeholder.svg?height=300&width=300",
  repoLink, // Destructure new prop
}: ProjectCardProps) {
  return (
    <div className="flex-shrink-0 w-64">
      <div className="bg-[#424242] dark:bg-[#424242] rounded-lg overflow-hidden group">
        <div className="relative aspect-square rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105 rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
            <Link
              href={link}
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              className="bg-[#E0E0E0] dark:bg-[#E0E0E0] text-black dark:text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white dark:hover:bg-white transition-colors"
            >
              Ver Proyecto
            </Link>
            {repoLink && ( // Conditionally render "Ver Repo" button
              <Link
                href={repoLink}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-[#E0E0E0] dark:bg-[#E0E0E0] text-black dark:text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white dark:hover:bg-white transition-colors"
              >
                Ver Repo
              </Link>
            )}
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
