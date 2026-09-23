import { SouJuniorLogo } from '@/components/layout/soujunior-logo'
import { cn } from '@/lib/utils'

const FILL_BY_STEP = ['scale-x-0', 'scale-x-[0.4]', 'scale-x-[0.8]', 'scale-x-100'] as const

type Props = {
  step: number
  isLoaded: boolean
}

export function PageLoader({ step, isLoaded }: Props) {
  return (
    <div
      role="status"
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-background transition-opacity duration-400 ease-out motion-reduce:transition-none',
        isLoaded && 'pointer-events-none opacity-0',
      )}
    >
      <p className="sr-only">{isLoaded ? 'Página carregada.' : 'Carregando a página.'}</p>
      <SouJuniorLogo className="h-[38px] text-foreground md:h-[55px]" />
      <div className="h-1 w-56 overflow-hidden rounded-full bg-foreground/15 md:w-72">
        <div
          className={cn(
            'h-full origin-left rounded-full bg-primary transition-transform duration-400 ease-out motion-reduce:transition-none',
            FILL_BY_STEP[Math.min(step, FILL_BY_STEP.length - 1)],
          )}
        />
      </div>
    </div>
  )
}
