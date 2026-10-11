import type { Metadata } from 'next'
import Link from 'next/link'
import { Download } from 'lucide-react'

import { RoutePage } from '@/components/site/route-page'
import { cvContent, cvLanguageAlternates, cvLanguages, type CvLocale } from '@/content/cv'
import { createPageMetadata } from '@/lib/seo'

type CvProfileProps = { locale: CvLocale }

export function createCvMetadata(locale: CvLocale): Metadata {
  const content = cvContent[locale]
  const metadata = createPageMetadata({
    description: content.metadataDescription,
    path: content.path,
    title: content.metadataTitle,
  })

  return {
    ...metadata,
    alternates: {
      canonical: content.path,
      languages: cvLanguageAlternates,
    },
    openGraph: {
      ...metadata.openGraph,
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: locale === 'ru' ? 'en_US' : 'ru_RU',
    },
  }
}

export function CvProfile({ locale }: CvProfileProps) {
  const content = cvContent[locale]

  return (
    <RoutePage
      actions={
        <a
          className="primary-action cv-download"
          download={content.pdf.filename}
          href={content.pdf.href}
          type="application/pdf"
        >
          <Download aria-hidden="true" size={18} />
          {content.downloadLabel}
        </a>
      }
      backLabel={content.backLabel}
      description={content.description}
      eyebrow={content.eyebrow}
      lang={locale}
      title={content.title}
    >
      <nav aria-label={content.languageLabel} className="cv-language-switch">
        {cvLanguages.map((language) => (
          <Link
            aria-current={locale === language.locale ? 'page' : undefined}
            href={cvContent[language.locale].path}
            hrefLang={language.locale}
            key={language.locale}
            lang={language.locale}
          >
            {language.label}
          </Link>
        ))}
      </nav>

      <section className="route-section cv-layout">
        <article>
          <h2>{content.headings.profile}</h2>
          <p>{content.summary}</p>
        </article>

        <article>
          <h2>{content.headings.focus}</h2>
          <div className="skill-list">
            {content.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>

        <article>
          <h2>{content.headings.contact}</h2>
          <div className="contact-list">
            {content.contacts.map((contact) => (
              <a href={contact.href} key={contact.label}>
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <article>
          <h2>{content.headings.availability}</h2>
          <div className="stack-groups">
            <div>
              <strong>{content.availability.status}</strong>
              <p>{content.availability.detail}</p>
            </div>
          </div>
        </article>

        <article>
          <h2>{content.headings.stack}</h2>
          <div className="stack-groups">
            {content.stackGroups.map((group) => (
              <div key={group.title}>
                <strong>{group.title}</strong>
                <p>{group.items.join(' / ')}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="wide-article">
          <h2>{content.headings.experience}</h2>
          <div className="timeline">
            {content.experience.map((item) => (
              <div className="timeline-item" key={item.company}>
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <strong>{item.role}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="wide-article">
          <h2>{content.headings.proof}</h2>
          <div className="proof-grid compact-proof-grid">
            {content.proofPoints.map((point) => (
              <div key={point.title}>
                <span>{point.signal}</span>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </RoutePage>
  )
}
