import { redirect } from 'next/navigation'

export default function FAQRedirect() {
  redirect('/about/faqs')
  return null
}
