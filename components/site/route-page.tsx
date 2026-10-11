import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type RoutePageProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  actions?: ReactNode
  lang?: string
  backLabel?: string
}

export function RoutePage({
  eyebrow,
  title,
  description,
  children,
  actions,
  lang,
  backLabel = 'Home',
}: RoutePageProps) {
  return (
    <main className="route-page" lang={lang}>
      <section className="route-hero">
        <Link className="back-link" href="/">
          <ArrowUpRight aria-hidden="true" size={18} />
          {backLabel}
        </Link>
        <p>{eyebrow}</p>
        {actions ? (
          <div className="route-hero__title-row">
            <h1>{title}</h1>
            <div className="route-hero__actions">{actions}</div>
          </div>
        ) : (
          <h1>{title}</h1>
        )}
        <span className="route-hero__description">{description}</span>
      </section>
      {children}
    </main>
  )
}
