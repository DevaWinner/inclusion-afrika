import Image from "next/image";
import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";
import photos from "../data/photos.json";
import { programDetails } from "../data/programDetails";

const deliveryModel = [
	{
		title: "Assess",
		copy: "Evaluate local constraints and participant readiness before intervention.",
	},
	{
		title: "Equip",
		copy: "Provide funding, tools, and learning support suited to each pathway.",
	},
	{
		title: "Coach",
		copy: "Maintain regular mentor touchpoints for accountability and adaptation.",
	},
	{
		title: "Scale",
		copy: "Help participants transition from early wins into sustained growth.",
	},
];

const donorValue = [
	{
		title: "Targeted Giving",
		copy: "Donors can support a specific pathway based on the type of impact they care most about.",
	},
	{
		title: "Integrated Outcomes",
		copy: "The three programs reinforce each other, improving participant stability and growth over time.",
	},
	{
		title: "Practical Accountability",
		copy: "Each initiative uses a clear delivery model with local follow-up and measurable progress markers.",
	},
];

export default function Initiative() {
	return (
		<div className="page">
			<PageHero
				eyebrow="Program Initiatives"
				title="Three high-impact programs designed for donors who want measurable change."
				description="Inclusion Afrika combines funding, education, and mentorship so young adults can move from financial pressure to sustainable progress."
				image="https://inclusionafrika.imgix.net/photo/2.jpg"
				actions={
					<>
						<DonateButton label="Support a Program" />
						<Link href="/getinvolved" className="btn btn--light">
							Discuss Donor Partnership
						</Link>
					</>
				}
			/>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Why These Programs</p>
					<h2>
						Our initiative portfolio is built to reduce risk and expand long-term
						opportunity.
					</h2>
					<p>
						Micro-loans remove financial barriers, educational growth builds market
						relevant skills, and mentorship protects momentum. Together, these
						pathways help participants move from short-term survival into durable
						self-reliance.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Fund by Program</p>
					<h2>Choose the impact lane you want to power.</h2>
				</div>
				<div className="program-sell-grid">
					{programDetails.map((program) => (
						<article key={program.slug} className="program-sell-card">
							<div className="program-sell-card__media">
								<Image
									src={program.imgSrc}
									alt={program.title}
									fill
									sizes="(max-width: 900px) 100vw, 33vw"
								/>
							</div>
							<div className="program-sell-card__content">
								<h3>{program.title}</h3>
								<p>{program.cardSummary}</p>
								<ul>
									{program.outcomes.map((outcome) => (
										<li key={outcome}>{outcome}</li>
									))}
								</ul>
								<div className="program-sell-card__actions">
									<Link href={`/initiative/${program.slug}`} className="text-link">
										View Full Program Detail
									</Link>
									<a
										href="https://www.zeffy.com/en-US/donation-form/10a7300e-8c6a-4af3-a738-79517cc3b372"
										target="_blank"
										rel="noreferrer"
										className="text-link"
									>
										Donate to This Program
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Donor Confidence</p>
					<h2>Why this initiative set is strong for philanthropic investment.</h2>
				</div>
				<div className="card-grid card-grid--three">
					{donorValue.map((item) => (
						<article className="info-card" key={item.title}>
							<h3>{item.title}</h3>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Delivery Framework</p>
					<h2>Built to stay responsive while keeping execution disciplined.</h2>
				</div>
				<div className="card-grid card-grid--four">
					{deliveryModel.map((item) => (
						<article className="info-card" key={item.title}>
							<h3>{item.title}</h3>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Field Gallery</p>
					<h2>Snapshots from communities, teams, and program activity.</h2>
				</div>
				<div className="photo-grid">
					{photos.slice(0, 8).map((photo) => (
						<div key={photo.src} className="photo-grid__item">
							<Image
								src={photo.src}
								alt={photo.caption}
								fill
								sizes="(max-width: 900px) 50vw, 25vw"
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
