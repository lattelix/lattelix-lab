import { createCvMetadata, CvProfile } from '@/components/site/cv-profile'

export const metadata = createCvMetadata('ru')

export default function RussianCvPage() {
  return <CvProfile locale="ru" />
}
