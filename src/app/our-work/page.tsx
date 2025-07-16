import { redirect } from 'next/navigation'

export default function OurWorkRedirect() {
  redirect('/about/work')
  return null
}
