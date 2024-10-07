import clsx from 'clsx'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import fhdLogoBgDark from '@/images/logos/fhd-logo-bg-dark.svg'
import fhdLogoBgLight from '@/images/logos/fhd-logo-bg-light.svg'
import portraitImage from '@/images/portrait.jpg'

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

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Human Design helped me understand and accept myself.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I was first introduced to Human Design 8 years ago during my first
              trip to Thailand back in 2010, and I always found it fascinating.
              But like many people, all I learned is "I'm a Generator" and not
              how to actually put it into practice. It was only years later that
              I actually started putting the knowledge to use; and it's why when
              I teach, I provide practical tools rather than mental knowledge.
            </p>
            <p>
              At the time I had just completed my life coaching program with the
              Robbins-Madanes institute and wanted to share what I learned with
              others: doing the thing where you share free content on social
              media so that people can learn about you. And so I got my camera
              out and I knew basically what I wanted to say … and then I froze.
              Nothing would come out! So I started talking a bit, you know how
              this is, to just warm things up … and nothing but crazy talk was
              coming out.
            </p>
            <p>
              And it was so frustrating! It did this a couple times, and rarely
              did I get anything good. And when I did, I had to do so many
              retakes because I would just have long pauses where my mind would
              go I don’t know where. So I tried something different: I did a
              Facebook Live and someone came online and just with her there,
              things flowed … effortlessly. Whereas before I had these long
              pauses where my mind went on holiday … with her there, I couldn’t
              shut up! One thing would lead to another, and time flew, and it
              was effortless.
            </p>
            <p>
              As I continued learning about my unique design, I learned other
              reasons why this is challenging for me. There are circuits in our
              bodies specifically for sharing, without any need for someone to
              share back. And you can see if there is any energy for this. And I
              have nothing: most people have at least one Sharing strength, and
              I have none.
            </p>
            <p>
              What I do have are Support strengths. If you want my help on
              something, I really want to get something in return. It doesn’t
              have to be the same amount, or at the same time: but I feel really
              good when I’m helping people and they are helping me. It’s tribal.
              It’s communal. It’s an energy exchange. And it’s the reason I am
              creating Kula, a platform for communities of support and
              connection.
            </p>
            <p>
              And so I continued to research and learn and educate myself, and
              take courses on Human Design, and then on BG5 which is focused on
              business and accepting the person as they are, rather than the
              original Human Design which is focused on awakening humanity. And
              I realized that most people who are getting “human design
              readings” are not getting anything practical. They’re getting a
              bunch of knowledge and then not doing anything with it. It’s the
              same problem that I originally had: I was given some knowledge and
              then didn’t do anything with it.
            </p>
            <p>
              I continued to lean into my true nature, I understood how many
              design was reflected through my way of being. And my seeing this,
              I could relax into things that previously bothered me. For
              example, I judged that I couldn't keep friends because people
              would continually come into and leave my life. I now I understand
              this is simply part of my 3/5 nature.
            </p>
            <p>
              The virtuous cycle of understanding and leaning in has been a
              game-changer for how I live my life. I would never go back to my
              old way of continually striving for people to like me. I encourage
              everyone to find a qualified teacher and analyst like me to start
              on the path to knowing yourself and living in the flow.
            </p>
          </div>
          <Link href="https://fractalhumandesign.com">
            <Image
              src={fhdLogoBgLight}
              alt="Fractal Human Design Logo"
              className="mt-10 dark:hidden"
            />
            <Image
              src={fhdLogoBgDark}
              alt="Fractal Human Design Logo"
              className="mt-10 hidden dark:block"
            />
          </Link>
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
              href="https://youtube.com/@shawnlauzon"
              icon={YouTubeIcon}
              className="mt-4"
            >
              Follow on YouTube
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
              href="https://github.com/shawnlauzon"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:shawn@fractalhumandesign.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              shawn@fractalhumandesign.com
            </SocialLink>
          </ul>
          <Link href="https://fractalhumandesign.com">
            <Image
              src={fhdLogoBgLight}
              alt="Fractal Human Design Logo"
              className="mt-10 dark:hidden"
            />
            <Image
              src={fhdLogoBgDark}
              alt="Fractal Human Design Logo"
              className="mt-10 hidden dark:block"
            />
          </Link>
        </div>
      </div>
    </Container>
  )
}
