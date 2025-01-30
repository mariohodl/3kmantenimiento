import type { LucideIcon } from "lucide-react"

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-4 bg-slate-300 backdrop-blur-sm rounded-lg p-4">
      <Icon className="h-8 w-8 text-primary " />
      <div>
        <h3 className="font-semibold  text-2xl">{title}</h3>
        <p className="text-lg ">{description}</p>
      </div>
    </div>
  )
}

