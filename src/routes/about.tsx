import { createFileRoute } from "@tanstack/react-router"
import { personal } from "@/data/personal"
import { createCanonicalLink, createSeoMeta } from "@/lib/seo"

export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: createSeoMeta({
			title: "About",
			description: `About ${personal.name}. Software engineer, engineering manager, maker.`,
			path: "/about",
		}),
		links: [createCanonicalLink("/about")],
	}),
})

function AboutPage() {
	return (
		<div className="py-12 sm:py-16">
			<h1 className="text-3xl font-medium tracking-[-0.03em]">About</h1>
			<div className="mt-8 max-w-[65ch] space-y-6 text-base leading-7 text-muted-foreground">
				<p>
					I taught myself to code in 2014 and have been working as a professional software engineer since 2016. I
					created{" "}
					<a
						href={personal.company.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
					>
						{personal.company.name}
					</a>{" "}
					to operate independently since I frankly had no idea what I was doing and felt completely in over my head when
					I applied for my first real position.
				</p>
				<p>
					In 2018, I had burned myself out as an independent contractor and was looking for a change. I moved around the
					country a bit and eventually landed in Colorado where I was hired as a senior engineer at BackbonePLM. They
					were acquired by Bamboo Rose in March 2023. I am now based in Kentucky and have been promoted to engineering
					manager.
				</p>
				<p>
					I pride myself on my leadership skills and ability to mentor junior engineers and create psychologically safe
					environments for my team to excel both professionally and interpersonally.
				</p>
				<p>
					When I am not working, I enjoy spending time with my family, playing video games, and learning new things. I
					have recently begun putting considerable time into my health and physical fitness, training six days a week.
					But I am getting old and tired, so maybe I will settle for just being healthy and strong.
				</p>
			</div>
		</div>
	)
}
