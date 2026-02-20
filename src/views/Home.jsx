import Image from "next/image";
import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";
import SupportForm from "../components/SupportForm";
import flagsData from "../data/FlagsData.json";
import partnerLogo from "../data/partnerLogo.json";
import programData from "../data/programData.json";
import testimonials from "../data/testimonials.json";

const impactMetrics = [
	{ value: `${flagsData.length}`, label: "Countries in our active network" },
	{ value: `${programData.length}`, label: "Core program pathways" },
	{ value: `${partnerLogo.length}`, label: "Strategic implementation partners" },
	{ value: `${testimonials.length}`, label: "Published community success stories" },
];

const executionSteps = [
	{
		title: "Identify Potential",
		copy: "We source ambitious young adults through trusted local partners and grassroots referrals.",
	},
	{
		title: "Fund and Train",
		copy: "Participants receive right-sized micro-loans and practical business or skills coaching.",
	},
	{
		title: "Mentor and Track",
		copy: "Long-term mentorship keeps momentum high while we monitor outcomes and adjust support.",
	},
];

export default function Home() {
	return (
		<div className="page">
			<PageHero
				eyebrow="Catalyzing Opportunity"
				title="We equip African youth to build dignified, self-reliant futures."
				description="Inclusion Afrika combines access to capital, mentorship, and practical training so communities can create sustainable growth from within."
				image="https://inclusionafrika.imgix.net/photo/10.jpg"
				priority
				actions={
					<>
						<DonateButton label="Fund a Dream" />
						<Link href="/initiative" className="btn btn--light">
							Explore Programs
						</Link>
					</>
				}
			/>

			<section className="section section--compact">
				<div className="flag-ribbon" role="list" aria-label="Countries Inclusion Afrika serves">
					{flagsData.map((flag) => (
						<div key={flag.country} className="flag-pill" role="listitem">
							<Image
								src={flag.flagPath}
								alt={`${flag.country} flag`}
								width={24}
								height={24}
							/>
							<span>{flag.country}</span>
						</div>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Impact Snapshot</p>
					<h2>Focused execution across countries, programs, and partnerships.</h2>
					<p>
						Our model blends local relationships with disciplined delivery. Every
						initiative is built to move from immediate support to durable
						self-reliance.
					</p>
				</div>
				<div className="metric-grid">
					{impactMetrics.map((metric) => (
						<article key={metric.label} className="metric-card">
							<p className="metric-value">{metric.value}</p>
							<p className="metric-label">{metric.label}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">What We Deliver</p>
					<h2>Programs designed for measurable, human-centered outcomes.</h2>
				</div>
				<div className="card-grid card-grid--three">
					{programData.map((program) => (
						<article key={program.title} className="impact-card">
							<div className="impact-card__media">
								<Image
									src={program.imgSrc}
									alt={program.title}
									fill
									sizes="(max-width: 900px) 100vw, 33vw"
								/>
							</div>
							<div className="impact-card__body">
								<h3>{program.title}</h3>
								<p>{program.description}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="section section--split">
				<div className="split-copy">
					<p className="eyebrow">Our Method</p>
					<h2>How support turns into long-term agency.</h2>
					<p>
						We are deliberate about implementation. Each participant receives a
						clear pathway from startup support to greater independence.
					</p>
					<ol className="step-list">
						{executionSteps.map((step) => (
							<li key={step.title}>
								<h3>{step.title}</h3>
								<p>{step.copy}</p>
							</li>
						))}
					</ol>
				</div>
				<div className="split-media">
					<Image
						src="https://inclusionafrika.imgix.net/community.jpg"
						alt="Community members gathered in support meeting"
						fill
						sizes="(max-width: 900px) 100vw, 45vw"
					/>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Community Voices</p>
					<h2>Stories from participants and families we serve.</h2>
				</div>
				<div className="testimonial-grid">
					{testimonials.map((testimonial) => (
						<article key={testimonial.author} className="testimonial-card">
							<div className="testimonial-card__meta">
								<Image
									src={testimonial.image}
									alt={`${testimonial.author} portrait`}
									width={56}
									height={56}
								/>
								<div>
									<p>{testimonial.author}</p>
									<span>{testimonial.country}</span>
								</div>
							</div>
							<p>{testimonial.text}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Partners</p>
					<h2>Organizations helping us scale responsibly.</h2>
				</div>
				<div className="partners-grid">
					{partnerLogo.map((partner) => (
						<div className="partner-tile" key={partner.partnerName}>
							<Image
								src={partner.partnerLogo}
								alt={`${partner.partnerName} logo`}
								width={144}
								height={56}
							/>
						</div>
					))}
				</div>
			</section>

			<section className="section section--split section--support">
				<div className="split-copy">
					<p className="eyebrow">Get Connected</p>
					<h2>Bring your resources, expertise, or network.</h2>
					<p>
						Whether you are an individual donor, mentor, or institution, we can
						design a practical way to collaborate for impact.
					</p>
					<div className="inline-actions">
						<DonateButton label="Donate Today" />
						<Link href="/getinvolved" className="btn btn--outline">
							Explore Ways to Help
						</Link>
					</div>
				</div>
				<div className="split-panel">
					<h3>Start a Conversation</h3>
					<p>
						Share your interest and our team will follow up with next steps.
					</p>
					<SupportForm />
				</div>
			</section>
		</div>
	);
}
