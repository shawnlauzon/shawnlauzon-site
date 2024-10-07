import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, XIcon } from '@/components/SocialIcons'
import logoFauna from '@/images/logos/fauna.svg'
import logoFlutter from '@/images/logos/flutter.svg'
import logoIBM from '@/images/logos/ibm.svg'
import logoJavascript from '@/images/logos/javascript.svg'
import logoKnewton from '@/images/logos/knewton.webp'
import logoLeofinance from '@/images/logos/leofinance.png'
import logoMoka from '@/images/logos/moka.png'
import logoMongodb from '@/images/logos/mongodb.svg'
import logoNextjs from '@/images/logos/nextjs.svg'
import logoNode from '@/images/logos/node.svg'
import logoOneLocal from '@/images/logos/one-local.svg'
import logoPostgresql from '@/images/logos/postgresql.svg'
import logoReact from '@/images/logos/react.svg'
import logoSui from '@/images/logos/sui.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoVolentix from '@/images/logos/volentix.webp'
import logoVue from '@/images/logos/vue.svg'
import { ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
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

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

interface Skill {
  name: string
  description: string
  logo: ImageProps['src']
}

function Skill({ role }: { role: Skill }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.name}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.description}
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'ONE Local',
      title: 'Mobile + Backend',
      logo: logoOneLocal,
      start: 'May 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'LeoFinance',
      title: 'Full stack / Crypto',
      logo: logoLeofinance,
      start: 'April 2021',
      end: 'June 2022',
    },
    {
      company: 'Volentix',
      title: 'Full stack / Crypto',
      logo: logoVolentix,
      start: 'March 2018',
      end: 'January 2019',
    },
    {
      company: 'Moka / Mylo',
      title: 'Backend / API',
      logo: logoMoka,
      start: 'Dec 2016',
      end: 'Sept 2017',
    },
    {
      company: 'Knewton',
      title: 'Backend / API',
      logo: logoKnewton,
      start: 'August 2012',
      end: 'July 2014',
    },
    {
      company: 'IBM',
      title: 'Backend / Agile Education',
      logo: logoIBM,
      start: 'June 1996',
      end: 'April 2009',
    },
    // {
    //   company: 'Airbnb',
    //   title: 'Product Designer',
    //   logo: logoAirbnb,
    //   start: '2014',
    //   end: '2019',
    // },
    // {
    //   company: 'Facebook',
    //   title: 'iOS Software Engineer',
    //   logo: logoFacebook,
    //   start: '2011',
    //   end: '2014',
    // },
    // {
    //   company: 'Starbucks',
    //   title: 'Shift Supervisor',
    //   logo: logoStarbucks,
    //   start: '2008',
    //   end: '2011',
    // },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Selected Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="https://docs.google.com/document/d/1iikCP1TPIUbChbyEWrjVs1JBMRmXgA8tq-7IxlDU4qU/edit?usp=sharing"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Skills() {
  let resume: Array<Skill> = [
    {
      name: 'Javascript',
      description: 'Language',
      logo: logoJavascript,
    },
    {
      name: 'Typescript',
      description: 'Language',
      logo: logoTypescript,
    },
    {
      name: 'React',
      description: 'Front-end',
      logo: logoReact,
    },
    {
      name: 'NextJs',
      description: 'Front-end',
      logo: logoNextjs,
    },
    {
      name: 'Vue',
      description: 'Front-end',
      logo: logoVue,
    },
    {
      name: 'Tailwind CSS',
      description: 'Front-end',
      logo: logoTailwind,
    },
    {
      name: 'NodeJs',
      description: 'Back-end',
      logo: logoNode,
    },
    {
      name: 'PostgreSQL',
      description: 'SQL Database',
      logo: logoPostgresql,
    },
    {
      name: 'MongoDB',
      description: 'NoSQL Database',
      logo: logoMongodb,
    },
    {
      name: 'Fauna',
      description: 'Graph Database',
      logo: logoFauna,
    },
    {
      name: 'React Native',
      description: 'Mobile',
      logo: logoReact,
    },
    {
      name: 'Flutter',
      description: 'Mobile',
      logo: logoFlutter,
    },
    {
      name: 'Sui',
      description: 'Blockchain',
      logo: logoSui,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack Options</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Skill key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export default function Software() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I still enjoy building software.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Although my passion is now on other things, I am still an expert
              in Software Development. And when working on something which is in
              alignment, I really love it. This website was designed and built
              by me, as are my other sites.
            </p>
            <p>
              I will take on projects that are interesting, align with my
              mission, or who I like. Please reach out if you're interested!
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://x.com/shawnlauzon"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/shawnlauzon"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Resume />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Skills />
          </div>
        </div>
      </Container>
    </>
  )
}
