import { SiGithub } from '@icons-pack/react-simple-icons';

import { Button } from '@/components/ui/button';
import { DarkVeil } from '@/components/dark-veil';
import { CodeBlock } from '@/components/code-block';
import { ScrollDown } from '@/components/scroll-down';
import { GooeyCursor } from '@/components/gooey-cursor';

import { GithubButton } from '@/components/github-button';
import { Stepper, StepperStep } from '@/components/stepper';

import { FileSource } from '@/components/file-source';
import { ComponentProps } from '@/components/component-props';

import * as PackageInstall from '@/components/package-install';

export default function HomePage() {
  return (
    <>
      <div>
        <main>
          <div className='relative w-full'>
            <div className='stack w-full min-h-dvh relative'>
              {process.env.NODE_ENV !== 'development' && <DarkVeil hueShift={30} />}

              <section className='container relative flex flex-col items-center justify-between'>
                <div className='grow flex flex-col justify-center pt-38'>
                  <hgroup className='text-center'>
                    <h1 className='text-6xl text-brand font-bold mb-4'>React Gooey Cursor</h1>
                    <p className='max-w-2xl text-xl font-medium text-pretty mx-auto'>
                      An animated gooey cursor effect for <span className='text-brand'>React</span>{' '}
                      — a trailing blob with a playful blob bloom, all blended together using an SVG
                      filter.
                    </p>
                  </hgroup>

                  <div className='flex flex-col items-center justify-center gap-4 mt-12'>
                    <Button size='lg' className='bg-brand hover:bg-darken text-white' asChild>
                      <a href='#installation'>Get Started</a>
                    </Button>

                    <GithubButton />
                  </div>
                </div>

                <ScrollDown />
              </section>
            </div>
          </div>

          <section className='my-16 md:my-32'>
            <h2
              id='installation'
              className='text-3xl text-center font-semibold mx-auto mb-16 scroll-mt-30'
            >
              Installation
            </h2>

            <section className='space-y-20 md:space-y-28'>
              <section className='container max-w-lg'>
                <h3 className='text-xl text-center font-semibold mx-auto mb-4'>CLI</h3>

                <div className='relative rounded-xl overflow-hidden p-0.5'>
                  <PackageInstall.CommandTabs>
                    <PackageInstall.CommandBlock npxCmd='npx shadcn@latest add https://react-gooey-cursor.vercel.app' />
                  </PackageInstall.CommandTabs>
                </div>
              </section>

              <section className='container max-w-4xl'>
                <h3 className='text-xl text-center font-semibold mx-auto mb-4'>Manual</h3>

                <Stepper>
                  <StepperStep id={1} className='*:last:mb-0'>
                    <p className='prose prose-invert mb-4'>
                      Copy the content of <code>use-debounce.ts</code>
                    </p>

                    <CodeBlock
                      source={{ file: './hooks/use-debounce.ts' }}
                      preClassName='max-h-200'
                    />
                  </StepperStep>
                  <StepperStep id={2} className='*:last:mb-0'>
                    <p className='prose prose-invert mb-4'>
                      Copy the content of <code>use-prefers-reduced-motion.ts</code>
                    </p>

                    <CodeBlock
                      source={{ file: './hooks/use-prefers-reduced-motion.ts' }}
                      preClassName='max-h-200'
                    />
                  </StepperStep>
                  <StepperStep id={3} className='*:last:mb-0'>
                    <p className='prose prose-invert mb-4'>
                      Copy the content of <code>gooey-cursor.tsx</code>
                    </p>

                    <CodeBlock
                      source={{ file: './components/gooey-cursor.tsx' }}
                      preClassName='max-h-200'
                    />
                  </StepperStep>
                </Stepper>
              </section>

              <section className='container max-w-4xl'>
                <h3
                  id='usage'
                  className='text-xl text-center font-semibold mx-auto scroll-mt-30 mb-4'
                >
                  Usage
                </h3>

                <section className='space-y-10'>
                  <FileSource
                    filename='App.tsx'
                    file='./components/examples/usage.tsx'
                    transform={source => source.replace('export', 'export default')}
                  />
                </section>
              </section>

              <footer className='container max-w-4xl text-sm'>
                <a
                  target='_blank'
                  className='inline-flex items-center gap-x-2'
                  href='https://github.com/sina-byn/react-gooey-cursor'
                >
                  <SiGithub className='size-5' />
                  Github
                </a>
                <p className='text-center mx-auto mt-2'>
                  Developed by{' '}
                  <a target='_blank' href='https://sina-byn.vercel.app/' className='text-blue-400'>
                    Sina Bayandorian
                  </a>
                </p>
              </footer>
            </section>
          </section>
        </main>
      </div>
      <GooeyCursor />
    </>
  );
}
