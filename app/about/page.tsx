import { DownloadIcon } from '@radix-ui/react-icons';

export const metadata = {
  title: 'About | Mason Smith',
};

export default async function About() {
  return (
    <main className="p-4 lg:container lg:mx-auto">
      <h1 className="mt-14 text-4xl font-bold tracking-tight">About me</h1>
      <section>
        <p className="mt-4">
          I taught myself to code in 2014 and have been working as a professional software engineer since 2016. I
          created SolutionOps LLC to operate independently since I frankly had no idea what I was doing and felt
          completely in over my head when I applied for my first real position as a software engineer.
        </p>

        <p className="mt-4">
          In 2018, I had burned myself out as an independent contractor and was looking for a change. I moved around the
          country a bit and eventually landed in Boston, MA where I was hired as a senior engineer at Bamboo Rose. I
          have been working there ever since, and have been promoted to technical lead engineer. I skipped over quite a
          bit in between, so feel free to check out my{' '}
          <a href="/resume.pdf" download className="underline">
            resume <DownloadIcon className="inline-block h-[0.8rem] w-[0.8rem]" />
          </a>{' '}
          for more details.
        </p>

        <p className="mt-4">
          When I am not working, I enjoy spending time with my family, playing video games, and learning new things. I
          have recently begun putting considerable time into my health and physical fitness, training six days a week to
          compete in powerlifting and reach my highest potential.
        </p>
      </section>
    </main>
  );
}
