import Image from "next/image";
import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";
import photos from "../data/photos.json";
import programData from "../data/programData.json";

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

export default function Initiative() {
	return (
		<div className="page">
			<PageHero
				eyebrow="Program Initiatives"
				title="Integrated interventions that move young adults from potential to progress."
				description="Our initiatives combine finance, education, and mentorship so participants can build stable livelihoods and long-term capacity."
				image="https://inclusionafrika.imgix.net/photo/2.jpg"
				actions={
					<>
						<DonateButton label="Fuel an Initiative" />
						<Link href="/getinvolved" className="btn btn--light">
							Partner With Us
						</Link>
					</>
				}
			/>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Current Program Areas</p>
					<h2>Three connected pathways for durable economic and social outcomes.</h2>
				</div>
				<div className="program-grid">
					{programData.map((program) => (
						<article key={program.title} className="program-card-modern">
							<div className="program-card-modern__media">
								<Image
									src={program.imgSrc}
									alt={program.title}
									fill
									sizes="(max-width: 900px) 100vw, 42vw"
								/>
							</div>
							<div className="program-card-modern__content">
								<h3>{program.title}</h3>
								<p>{program.description}</p>
							</div>
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
