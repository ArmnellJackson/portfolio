import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiAmazonwebservices,
  //SiNodedotjs,
  //SiMongodb,
  //SiDocker,
  SiGit,
  SiMysql,
  SiAwsamplify,
} from "react-icons/si"

interface TechStackProps {
  showLabels?: boolean
}

export default function TechStack({ showLabels = false }: TechStackProps) {
  const technologies = [
    { icon: SiMysql, name: "MySQL" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind" },
//    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
//    { icon: SiNodedotjs, name: "Node.js" },
//    { icon: SiMongodb, name: "MongoDB" },
//    { icon: SiDocker, name: "Docker" },
    { icon: SiGit, name: "Git" },
    { icon: SiAmazonwebservices, name: "AWS" },
    { icon: SiAwsamplify, name: "AWS Amplify" },
  ]

  return (
    <div className="flex flex-col space-y-4">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center">
          <div className="bg-[#E0E0E0]/20 dark:bg-[#E0E0E0]/20 p-3 rounded-lg mr-3">
            <tech.icon className="w-6 h-6 text-black dark:text-white" />
          </div>
          {showLabels && <span className="text-xs text-[#E0E0E0] dark:text-[#E0E0E0]">{tech.name}</span>}
        </div>
      ))}
    </div>
  )
}
