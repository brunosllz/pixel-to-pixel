'use client'

export function ButtonBackToTop() {
  return (
    <button
      className="hidden font-medium text-text-white-secondary transition-colors  hover:text-text-white-primary md:flex"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Voltar ao topo
    </button>
  )
}
