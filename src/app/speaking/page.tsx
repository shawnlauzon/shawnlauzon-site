import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import speakingImage from '@/images/speaking.jpg'
import Image from 'next/image'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'The core of my speaking is to encourage people to love and accept themselves.',
}

export default function Speaking() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={speakingImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I encourage people to love and accept themselves.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I know what it's like to struggle to connect. I used to be so
              focused on trying to say the thing that would get people to like
              me that I either didn't say anything at all or what I thought was
              safe. The result: I didn't offend people, but was also completely
              forgettable. At work as a software engineer, I was exactly the
              opposite: I offended people all the time without even realizing
              it.
            </p>
            <p>
              Through years of practice, study, and coaching, I have learned the
              way to create and maintain relationships. It's like magic! And
              it's 100% possible when you know who you are and you've learned
              the right tools.
            </p>
            <p>If I can do it, you can too.</p>
          </div>
        </div>
      </div>
    </Container>

    // <SimpleLayout
    //   title="I’ve spoken at events all around the world and been interviewed for many podcasts."
    //   intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    // >
    //   <div className="space-y-20">
    //     <SpeakingSection title="Conferences">
    //       <Appearance
    //         href="#"
    //         title="In space, no one can watch you stream — until now"
    //         description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
    //         event="SysConf 2021"
    //         cta="Watch video"
    //       />
    //       <Appearance
    //         href="#"
    //         title="Lessons learned from our first product recall"
    //         description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
    //         event="Business of Startups 2020"
    //         cta="Watch video"
    //       />
    //     </SpeakingSection>
    //     <SpeakingSection title="Podcasts">
    //       <Appearance
    //         href="#"
    //         title="Using design as a competitive advantage"
    //         description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
    //         event="Encoding Design, July 2022"
    //         cta="Listen to podcast"
    //       />
    //       <Appearance
    //         href="#"
    //         title="Bootstrapping an aerospace company to $17M ARR"
    //         description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
    //         event="The Escape Velocity Show, March 2022"
    //         cta="Listen to podcast"
    //       />
    //       <Appearance
    //         href="#"
    //         title="Programming your company operating system"
    //         description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
    //         event="How They Work Radio, September 2021"
    //         cta="Listen to podcast"
    //       />
    //     </SpeakingSection>
    //   </div>
    // </SimpleLayout>
  )
}
