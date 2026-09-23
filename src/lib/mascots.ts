export const MASCOTS = {
  inicio: {
    width: 806,
    height: 806,
    mobileWidth: 355,
    alt: 'Mascote da SouJunior sentado numa moldura, fazendo sinal de positivo',
  },
  missao: {
    width: 556,
    height: 556,
    mobileWidth: 284,
    alt: 'Mascote da SouJunior segurando um notebook com código na tela',
  },
  impacto: {
    width: 416,
    height: 416,
    mobileWidth: 333,
    alt: 'Mascote da SouJunior comemorando de braços erguidos, cercado de confete',
  },
  financiamento: {
    width: 490,
    height: 490,
    mobileWidth: 340,
    alt: 'Mascote da SouJunior ao lado do mascote verde do SouJunior Labs',
  },
  'faca-parte': {
    width: 712,
    height: 712,
    mobileWidth: 434,
    alt: 'Mascote da SouJunior erguendo dois livros, cercado de confete',
  },
} as const

export type MascotName = keyof typeof MASCOTS

export const MASCOT_DESKTOP_QUERY = '(min-width: 768px)'

export function mascotSrc(name: MascotName, isMobile: boolean) {
  return `/mascotes/${name}${isMobile ? '-mobile' : ''}.webp`
}
