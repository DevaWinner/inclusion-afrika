import Image from "next/image";
import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";

const coreIdentity = [
	{
		title: "Our Vision",
		copy: "A future where every African young adult can access the tools, capital, and mentorship needed to build a stable and dignified life.",
	},
	{
		title: "Our Mission",
		copy: "To equip promising youth with practical support that turns potential into sustainable livelihoods through micro-loans, training, and long-term guidance.",
	},
];

const donorReasons = [
	{
		title: "Human-Centered Model",
		copy: "We meet people where they are and design support around real local conditions, not assumptions.",
	},
	{
		title: "Long-Term Accompaniment",
		copy: "Participants are not left alone after first funding. Mentorship and accountability continue through growth stages.",
	},
	{
		title: "Ethical Stewardship",
		copy: "Our leadership model prioritizes transparency, measurable outcomes, and responsible use of donor resources.",
	},
	{
		title: "Scalable Partnerships",
		copy: "We collaborate with trusted partners so each contribution can reach more communities with quality support.",
	},
];

const giftUseCases = [
	{
		title: "Seed Opportunity",
		copy: "Your contribution helps a participant access first-stage business capital and early coaching.",
	},
	{
		title: "Strengthen Skills",
		copy: "Funding supports practical learning pathways that increase employability and entrepreneurial readiness.",
	},
	{
		title: "Sustain Momentum",
		copy: "Donations also power mentor check-ins, program operations, and follow-up support that keep outcomes durable.",
	},
];

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

export default function OurOrganization() {
	return (
		<div className="page">
			<PageHero
				eyebrow="About Inclusion Afrika"
				title="We exist so financial hardship does not decide a young person's future."
				description="Inclusion Afrika connects compassion with practical action by funding opportunity, strengthening capability, and walking alongside youth until progress is sustainable."
				image="https://inclusionafrika.imgix.net/photo/3.jpg"
				actions={
					<>
						<DonateButton label="Give With Impact" />
						<Link href="/team" className="btn btn--light">
							Meet the Team
						</Link>
					</>
				}
			/>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Vision and Mission</p>
					<h2>Clear purpose. Practical execution. Lasting change.</h2>
					<p>
						We are not only addressing immediate need, we are helping young adults
						build the confidence, tools, and support systems to transform their
						future and strengthen their communities.
					</p>
				</div>
				<div className="mission-vision-grid">
					{coreIdentity.map((item) => (
						<article key={item.title} className="purpose-card">
							<h3>{item.title}</h3>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section section--split compassion-panel">
				<div className="compassion-panel__media">
					<Image
						src="https://inclusionafrika.imgix.net/mask-market.jpg"
						alt="Young entrepreneur receiving local business support"
						fill
						sizes="(max-width: 900px) 100vw, 45vw"
					/>
				</div>
				<div className="compassion-panel__story">
					<p className="eyebrow">Why Donors Give</p>
					<h2>Because one chance can alter an entire family’s trajectory.</h2>
					<p>
						When a young person has skill and determination but no access to
						capital, a dream stalls. Your support helps unlock that first critical
						step and surrounds it with the guidance needed to keep moving forward.
					</p>
					<p>
						This is compassionate giving with a practical engine: donors help fund
						real people, real plans, and real progress that can be seen in homes,
						businesses, and communities.
					</p>
					<div className="inline-actions">
						<DonateButton label="Become a Donor" />
						<Link href="/getinvolved" className="btn btn--outline">
							Partner With Us
						</Link>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">What Your Giving Makes Possible</p>
					<h2>Each contribution translates into direct opportunity.</h2>
				</div>
				<div className="gift-grid">
					{giftUseCases.map((gift) => (
						<article key={gift.title} className="gift-card">
							<h3>{gift.title}</h3>
							<p>{gift.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">How We Work</p>
					<h2>A four-phase model designed for reliable, human outcomes.</h2>
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
					<p className="eyebrow">Donor Confidence</p>
					<h2>Why supporters trust Inclusion Afrika with their generosity.</h2>
				</div>
				<div className="donor-grid">
					{donorReasons.map((reason) => (
						<article key={reason.title} className="info-card">
							<h3>{reason.title}</h3>
							<p>{reason.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="governance-panel">
					<div>
						<p className="eyebrow">Leadership and Governance</p>
						<h2>Led by professionals who balance compassion and discipline.</h2>
						<p>
							Our founders and board members bring backgrounds in enterprise,
							nonprofit leadership, education, and technology. This breadth helps
							us remain mission-driven while executing with rigor.
						</p>
					</div>
					<ul>
						<li>Cross-regional leadership from Africa, North America, and Asia.</li>
						<li>Commitment to ethical operations and transparent stewardship.</li>
						<li>Partnership model designed for long-term, local outcomes.</li>
					</ul>
				</div>
			</section>

			<section className="section">
				<div className="org-cta-panel">
					<p className="eyebrow">Join the Mission</p>
					<h2>Help turn compassion into opportunity for the next generation.</h2>
					<p>
						Your donation does more than relieve immediate pressure. It gives young
						adults the means to build income, confidence, and a future they can
						sustain.
					</p>
					<div className="inline-actions">
						<DonateButton label="Donate Now" />
						<Link href="/getinvolved" className="btn btn--light">
							Talk to Our Team
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
