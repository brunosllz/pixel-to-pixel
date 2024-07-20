'use client'

export function ButtonBackToTop() {
  return (
    <button
      className="text-sm font-medium text-text-white-secondary transition-colors hover:text-text-white-primary md:text-base lg:flex"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Voltar ao topo
    </button>
  )
}
