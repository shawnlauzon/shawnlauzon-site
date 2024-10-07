import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import kulaLogoBgDark from '@/images/logos/kula-collective-bg-dark.svg'
import kulaLogoBgLight from '@/images/logos/kula-collective-bg-light.svg'

export const metadata: Metadata = {
  title: 'Kula',
  description:
    'Kula will be the platform for creating supportive relationships with gift economies',
}

export default function Kula() {
  return (
    <SimpleLayout
      title="The platform for creating supportive relationships with gift economies."
      intro="Today, people are craving connection more than ever, while distrust is rising both on and offline. Our mission is to bring back the social club. So you know someone always has your back."
    >
      <Link href="https://fractalhumandesign.com">
        <Image
          src={kulaLogoBgLight}
          alt="Fractal Human Design Logo"
          className="dark:hidden"
        />
        <Image
          src={kulaLogoBgDark}
          alt="Fractal Human Design Logo"
          className="hidden dark:block"
        />
      </Link>
      <p>Coming soon</p>
    </SimpleLayout>
  )
}
