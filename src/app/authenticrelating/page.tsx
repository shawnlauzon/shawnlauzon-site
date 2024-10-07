import clsx from 'clsx'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/ar.jpg'

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
        target="_blank"
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
  title: 'Authentic Relating',
  description:
    'Authentic Relating taught me to move from small talk to big connection.',
}

export default function AuthenticRelating() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Authentic Relating taught me to move from{' '}
            <span className="italic">small talk</span> to{' '}
            <span className="italic">big connection</span>.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I grew up in rural Wisconsin, with no neighborhood kids to play
              with and two sisters who spent more time with each other. And so I
              spent most of my time on a computer which my Dad brought home when
              I was 8, and never developed good social skills. And then through
              grade and high school I was bullied and didn't think I deserved to
              have friends. Even after university and getting a job at IBM, I
              drank rather than learn to connect, and eventually got married
              because it felt like the next thing I was “supposed” to do.
            </p>
            <p>
              It wasn’t until divorce, drug use, and many failed relationships
              years later that I discovered Authentic Relating. I realized I how
              exhausting it was to be continually planning what I would say so
              that people would like me. I discovered the freedom of being
              vulnerable and honest. Nearly every week over two years, I
              practiced Authentic Relating and Circling. I continually peeled
              away the layers of pretending to be someone I wasn't. And even
              though now I am less "put together", I am ALIVE!
            </p>
            <p>
              I've now facilitated Authentic Relating workshops internationally
              for 5 years. I have seen firsthand how liberating it can be for
              people to finally share things which they've been holding onto for
              years, and how shockingly fast someone can go from stranger to
              trusted companion simply by creating the right context.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://facebook.com/shawnlauzon"
              icon={FacebookIcon}
            >
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/shawnlauzon/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>

            <SocialLink
              href="https://www.instagram.com/shawnlauzon/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              className="mt-4"
              href="https://x.com/shawnlauzon"
              icon={XIcon}
            >
              Follow on X
            </SocialLink>
            <SocialLink
              href="mailto:shawn@quantumconnecting.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              shawn@quantumconnecting.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
