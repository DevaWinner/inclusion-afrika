import Link from "next/link";
import DonateButton from "../components/DonateButton";
import PageHero from "../components/PageHero";
import SupportForm from "../components/SupportForm";

const supportOptions = [
	{
		title: "Donate",
		copy: "Provide direct financial support that expands access to micro-loans, training, and local mentorship.",
		action: "Give Now",
		href: "https://www.zeffy.com/en-US/donation-form/10a7300e-8c6a-4af3-a738-79517cc3b372",
		external: true,
	},
	{
		title: "Mentor",
		copy: "Offer career, entrepreneurship, or technical guidance to participants and local operators.",
		action: "Become a Mentor",
		href: "mailto:info@inclusionafrika.org?subject=Mentorship%20Interest",
		external: true,
	},
	{
		title: "Partner",
		copy: "Collaborate as a foundation, enterprise, or community organization to scale region-specific programs.",
		action: "Discuss a Partnership",
		href: "mailto:info@inclusionafrika.org?subject=Partnership%20Interest",
		external: true,
	},
	{
		title: "Advocate",
		copy: "Share our story, introduce aligned networks, and help bring more supporters into the mission.",
		action: "Share the Mission",
		href: "/organization",
		external: false,
	},
];

const faqs = [
	{
		question: "How are donations used?",
		answer:
			"Funds support participant micro-loans, mentorship operations, education programs, and implementation costs tied to delivery in local communities.",
	},
	{
		question: "Can I contribute without donating money?",
		answer:
			"Yes. Mentorship, strategic introductions, institutional partnerships, and volunteer services are all valuable ways to contribute.",
	},
	{
		question: "Do you work only in one country?",
		answer:
			"No. Inclusion Afrika currently supports participants and partnerships across multiple African countries in a growing regional network.",
	},
	];

export default function GetInvolved() {
	return (
		<div className="page">
			<PageHero
				eyebrow="Get Involved"
				title="Bring your resources and experience to work that creates real opportunity."
				description="Individuals, teams, and institutions can support Inclusion Afrika through funding, mentorship, partnerships, and advocacy."
				image="https://inclusionafrika.imgix.net/hand-shake.jpg"
				actions={
					<>
						<DonateButton label="Donate Today" />
						<Link href="#support-form" className="btn btn--light">
							Start a Conversation
						</Link>
					</>
				}
			/>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Ways to Contribute</p>
					<h2>Choose the path that matches your capacity and expertise.</h2>
				</div>
				<div className="card-grid card-grid--two">
					{supportOptions.map((option) => (
						<article className="info-card" key={option.title}>
							<h3>{option.title}</h3>
							<p>{option.copy}</p>
							{option.external ? (
								<a href={option.href} className="text-link" target="_blank" rel="noreferrer">
									{option.action}
								</a>
							) : (
								<Link href={option.href} className="text-link">
									{option.action}
								</Link>
							)}
						</article>
					))}
				</div>
			</section>

			<section className="section section--video">
				<div className="section-heading">
					<p className="eyebrow">Featured Story</p>
					<h2>See how your support translates into lived impact.</h2>
				</div>
				<div className="video-frame">
					<iframe
						src="https://www.youtube.com/embed/JVKucRC0IbA"
						title="Inclusion Afrika video"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					/>
				</div>
			</section>

			<section id="support-form" className="section section--split section--support">
				<div className="split-copy">
					<p className="eyebrow">Connect With Us</p>
					<h2>Tell us how you want to support Inclusion Afrika.</h2>
					<p>
						Share your goals and our team will respond with a practical next step.
					</p>
					<p>
						You can also email us directly at
						<a href="mailto:info@inclusionafrika.org"> info@inclusionafrika.org</a>.
					</p>
				</div>
				<div className="split-panel">
					<SupportForm />
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">FAQ</p>
					<h2>Common questions from donors, mentors, and partners.</h2>
				</div>
				<div className="faq-list">
					{faqs.map((faq) => (
						<details key={faq.question} className="faq-item">
							<summary>{faq.question}</summary>
							<p>{faq.answer}</p>
						</details>
					))}
				</div>
			</section>
		</div>
	);
}
