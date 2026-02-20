import Image from "next/image";
import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";
import boardMembersData from "../data/boardMembersData.json";
import foundersData from "../data/foundersData.json";
import techTeamData from "../data/techTeamData.json";

const profileGroups = [
	{
		title: "Founders",
		description:
			"Vision builders who established Inclusion Afrika with a focus on self-reliance and ethical leadership.",
		profiles: foundersData,
	},
	{
		title: "Board Members",
		description:
			"Senior advisors providing governance, strategic direction, and cross-industry experience.",
		profiles: boardMembersData,
	},
	{
		title: "Tech and Advisory Team",
		description:
			"Specialists strengthening our execution in digital systems, education technology, and legal operations.",
		profiles: techTeamData,
	},
];

function shortenBio(bio) {
	if (bio.length <= 220) {
		return bio;
	}

	return `${bio.slice(0, 220).trim()}...`;
}

function toExternalUrl(url) {
	if (!url) {
		return null;
	}

	if (/^https?:\/\//i.test(url)) {
		return url;
	}

	return `https://${url}`;
}

export default function OurTeam() {
	return (
		<div className="page">
			<PageHero
				eyebrow="Leadership"
				title="A multidisciplinary team committed to practical impact."
				description="Our people combine nonprofit, business, technology, and educational expertise to support youth across Africa."
				image="https://inclusionafrika.imgix.net/happy-people.jpg"
				actions={
					<>
						<DonateButton label="Support the Team's Work" />
						<Link href="/getinvolved" className="btn btn--light">
							Join as a Mentor
						</Link>
					</>
				}
			/>

			{profileGroups.map((group) => (
				<section className="section" key={group.title}>
					<div className="section-heading">
						<p className="eyebrow">{group.title}</p>
						<h2>{group.description}</h2>
					</div>
					<div className="profile-grid">
						{group.profiles.map((profile) => {
							const isLinkedInCdnImage = profile.image.includes(
								"media.licdn.com",
							);
							const linkedinUrl = toExternalUrl(profile.linkedin);
							const portfolioUrl = toExternalUrl(profile.portfolio);

							return (
								<article className="profile-card" key={profile.name}>
									<div className="profile-card__media">
										<Image
											src={profile.image}
											alt={profile.name}
											fill
											sizes="(max-width: 900px) 100vw, 25vw"
											unoptimized={isLinkedInCdnImage}
										/>
									</div>
									<div className="profile-card__body">
										<p className="profile-role">{profile.intro}</p>
										<h3>{profile.name}</h3>
										<p>{shortenBio(profile.bio)}</p>
										{(linkedinUrl || portfolioUrl) && (
											<div className="profile-links">
												{linkedinUrl ? (
													<a
														href={linkedinUrl}
														target="_blank"
														rel="noreferrer"
														className="text-link"
													>
														View LinkedIn
													</a>
												) : null}
												{portfolioUrl ? (
													<a
														href={portfolioUrl}
														target="_blank"
														rel="noreferrer"
														className="text-link"
													>
														View Portfolio
													</a>
												) : null}
											</div>
										)}
									</div>
								</article>
							);
						})}
					</div>
				</section>
			))}

			<section className="section">
				<div className="join-panel">
					<h2>Interested in contributing your expertise?</h2>
					<p>
						We welcome practitioners, mentors, and strategic partners who can help
						accelerate opportunity for young adults across Africa.
					</p>
					<div className="inline-actions">
						<Link href="/getinvolved" className="btn btn--primary">
							Start Here
						</Link>
						<DonateButton label="Contribute Financially" className="btn--outline" />
					</div>
				</div>
			</section>
		</div>
	);
}
