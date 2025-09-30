import { Metadata } from 'next';
import ForteCareClient from './ForteCareClient';

export const metadata: Metadata = {
  title: 'Forte Care™ — Always-On Upkeep for Your Website & Growth Systems',
  description: 'Keep your site fast and your automations reliable—so you get time back and stay focused on the work that makes money. Included with all monthly website plans.',
};

export default function FortCarePage() {
  return <ForteCareClient />;
}
