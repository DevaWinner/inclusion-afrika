import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DonateButton from "../../../src/components/DonateButton";
import PageHero from "../../../src/components/PageHero";
import { programDetailsBySlug, programDetails } from "../../../src/data/programDetails";

export function generateStaticParams() {
	return programDetails.map((program) => ({
		program: program.slug,
	}));
}

export default function ProgramPage({ params }) {
	const program = programDetailsBySlug[params.program];

	if (!program) {
		notFound();
	}

	return (
		<div className="page">
			<PageHero
				eyebrow="Program Detail"
				title={program.title}
				description={program.detailSubtitle}
				image={program.imgSrc}
				actions={
					<>
						<DonateButton label={`Fund ${program.title}`} />
						<Link href="/initiative" className="btn btn--light">
							Back to All Programs
						</Link>
					</>
				}
			/>

			<section className="section section--split">
				<div className="split-copy">
					<p className="eyebrow">Program Overview</p>
					<h2>{program.title} in Action</h2>
					<p>{program.overview}</p>
					<p>{program.needStatement}</p>
				</div>
				<div className="split-media">
					<Image
						src={program.imgSrc}
						alt={program.title}
						fill
						sizes="(max-width: 900px) 100vw, 45vw"
					/>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Why Donors Support This Program</p>
					<h2>Compassion translated into practical outcomes.</h2>
				</div>
				<div className="card-grid card-grid--three">
					{program.donorImpact.map((impact) => (
						<article key={impact.title} className="info-card">
							<h3>{impact.title}</h3>
							<p>{impact.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Where Donations Go</p>
					<h2>Funding priorities inside {program.title}.</h2>
				</div>
				<div className="program-funding-grid">
					{program.fundingUse.map((item) => (
						<article key={item.title} className="program-funding-card">
							<h3>{item.title}</h3>
							<p>{item.copy}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section section--split">
				<div className="split-copy">
					<p className="eyebrow">Delivery Journey</p>
					<h2>How the program is delivered from start to follow-up.</h2>
					<ol className="step-list">
						{program.deliverySteps.map((step) => (
							<li key={step}>
								<p>{step}</p>
							</li>
						))}
					</ol>
				</div>
				<div className="program-outcome-panel">
					<p className="eyebrow">Expected Outcomes</p>
					<h2>What success looks like for participants.</h2>
					<ul>
						{program.outcomes.map((outcome) => (
							<li key={outcome}>{outcome}</li>
						))}
					</ul>
				</div>
			</section>

			<section className="section">
				<div className="org-cta-panel">
					<p className="eyebrow">Take Action</p>
					<h2>Help expand {program.title} for more young adults.</h2>
					<p>
						Your support helps this program reach additional participants with the
						resources and guidance they need to build stable futures.
					</p>
					<div className="inline-actions">
						<DonateButton label={`Donate to ${program.title}`} />
						<Link href="/getinvolved" className="btn btn--light">
							Speak With Our Team
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
