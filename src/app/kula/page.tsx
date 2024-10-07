import clsx from 'clsx'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import kulaLogoBgDark from '@/images/logos/kula-collective-bg-dark.svg'
import kulaLogoBgLight from '@/images/logos/kula-collective-bg-light.svg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Human Design',
  description:
    'I’m Shawn Lauzon. I live in Austin, TX, where I do all sorts of things to help people live a life in flow and connect with like-valued people.',
}

export default function Kula() {
  return (
    <SimpleLayout
      title="A platform for creating and nurturing supportive relationships"
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
