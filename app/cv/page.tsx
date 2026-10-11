import { createCvMetadata, CvProfile } from '@/components/site/cv-profile'

export const metadata = createCvMetadata('en')

export default function CvPage() {
  return <CvProfile locale="en" />
}
