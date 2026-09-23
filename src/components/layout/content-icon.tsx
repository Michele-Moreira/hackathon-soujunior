import { Briefcase, CodeXml, GraduationCap, Heart, MessageCircle, RefreshCw, Server, Star, Users } from 'lucide-react'
import { BrandIcon } from '@/components/layout/brand-icon'
import { GITHUB_ICON_PATH } from '@/lib/brand-icons'
import { cn } from '@/lib/utils'

const ICONS = {
  briefcase: Briefcase,
  code: CodeXml,
  graduation: GraduationCap,
  heart: Heart,
  message: MessageCircle,
  refresh: RefreshCw,
  server: Server,
  star: Star,
  users: Users,
} as const

type Props = {
  name: string
  className?: string
}

export function ContentIcon({ name, className }: Props) {
  if (name === 'github') {
    return <BrandIcon path={GITHUB_ICON_PATH} className={cn('size-6', className)} />
  }

  const Icon = ICONS[name as keyof typeof ICONS] ?? Star
  return <Icon aria-hidden="true" className={cn('size-6', className)} />
}
