import Image from "next/image";
import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";

const deliveryPhases = [
	{
		title: "Phase 1: Community Discovery",
		copy: "We map local realities through trusted grassroots partners and identify youth with high commitment and potential.",
	},
	{
		title: "Phase 2: Activation",
		copy: "Selected participants receive tailored support that may include micro-loans, educational pathways, and mentoring.",
	},
	{
		title: "Phase 3: Growth Coaching",
		copy: "Mentors and advisors provide practical guidance on execution, financial discipline, and resilience.",
	},
	{
		title: "Phase 4: Measurement",
		copy: "We track progress and refine interventions to ensure support translates into durable outcomes.",
	},
];

const principles = [
	{
		title: "Local First",
		copy: "Solutions are shaped with local context and local leadership, not imposed from the outside.",
	},
	{
		title: "Dignity and Agency",
		copy: "We do not create dependency. We expand the capacity to choose, build, and sustain.",
	},
	{
		title: "Long-Term Partnership",
		copy: "Our support extends beyond first funding to include mentoring, accountability, and relationship.",
	},
	{
		title: "Measured Impact",
		copy: "We prioritize clear outcomes and continuous learning over short-term activity.",
	},
];

export default function OurOrganization() {
	return (
		<div className="page">
			<PageHero
				eyebrow="About Inclusion Afrika"
				title="A practical organization built to unlock opportunity at scale."
				description="Our work combines ethical leadership, local partnership, and disciplined execution to help youth build self-reliant futures."
				image="https://inclusionafrika.imgix.net/photo/3.jpg"
				actions={
					<>
						<DonateButton label="Support the Mission" />
						<Link href="/team" className="btn btn--light">
							Meet the Team
						</Link>
					</>
				}
			/>

			<section className="section section--split">
				<div className="split-copy">
					<p className="eyebrow">Why We Exist</p>
					<h2>We bridge the gap between potential and practical opportunity.</h2>
					<p>
						Across Africa, many capable young adults have ideas and determination
						but limited access to funding, guidance, and networks. We exist to
						close that gap through integrated support.
					</p>
					<p>
						Inclusion Afrika operates at the intersection of entrepreneurship,
						education, and mentorship. We are committed to helping participants
						move from survival to stability and from stability to leadership.
					</p>
				</div>
				<div className="split-media">
					<Image
						src="https://inclusionafrika.imgix.net/mask-market.jpg"
						alt="Entrepreneur receiving support in a local market"
						fill
						sizes="(max-width: 900px) 100vw, 45vw"
					/>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">How We Work</p>
					<h2>A four-phase model designed for reliable outcomes.</h2>
				</div>
				<div className="timeline-grid">
					{deliveryPhases.map((phase) => (
						<article key={phase.title} className="timeline-card">
							<h3>{phase.title}</h3>
							<p>{phase.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Guiding Principles</p>
					<h2>Standards that shape every decision and partnership.</h2>
				</div>
				<div className="card-grid card-grid--two">
					{principles.map((principle) => (
						<article key={principle.title} className="info-card">
							<h3>{principle.title}</h3>
							<p>{principle.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="governance-panel">
					<div>
						<p className="eyebrow">Governance Snapshot</p>
						<h2>Led by experienced professionals across sectors and regions.</h2>
						<p>
							Our founders and board members bring backgrounds in enterprise,
							education, nonprofit leadership, and technology. This range helps us
							build strong strategy while staying deeply practical.
						</p>
					</div>
					<ul>
						<li>Cross-regional leadership from Africa, North America, and Asia.</li>
						<li>Strong focus on ethical operations and transparent execution.</li>
						<li>Partnership model that enables durable local implementation.</li>
					</ul>
				</div>
			</section>

			<section className="section section--quote">
				<div className="quote-panel">
					<Image
						src="https://inclusionafrika.imgix.net/marion.jpg"
						alt="Marian G. Romney"
						width={96}
						height={96}
					/>
					<blockquote>
						There is an interdependence between those who have and those who have
						not. The process of giving exalts the poor and humbles the rich.
					</blockquote>
					<p>Marian G. Romney</p>
				</div>
			</section>
		</div>
	);
}
