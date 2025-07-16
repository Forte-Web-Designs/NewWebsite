import { redirect } from 'next/navigation'

export default function CheckupRedirect() {
  redirect('/solutions/seotool')
  return null
}
