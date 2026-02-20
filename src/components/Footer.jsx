import Image from "next/image";
import Link from "next/link";
import partnerLogo from "../data/partnerLogo.json";

const QUICK_LINKS = [
	{ href: "/organization", label: "Our Organization" },
	{ href: "/initiative", label: "Program Initiatives" },
	{ href: "/team", label: "Team Directory" },
	{ href: "/getinvolved", label: "Get Involved" },
];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-shell">
				<div className="footer-grid">
					<div className="footer-brand">
						<Link href="/" className="footer-logo-link">
							<Image
								src="https://inclusionafrika.imgix.net/logo.jpg"
								alt="Inclusion Afrika"
								width={190}
								height={64}
							/>
						</Link>
						<p>
							We empower young adults in Africa with access to capital,
							mentorship, and practical opportunities that create
							self-reliance.
						</p>
						<div className="partner-badges">
							{partnerLogo.map((partner) => (
								<div key={partner.partnerName} className="partner-badge">
									<Image
										src={partner.partnerLogo}
										alt={`${partner.partnerName} logo`}
										width={96}
										height={40}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="footer-column">
						<h3>Explore</h3>
						<ul>
							{QUICK_LINKS.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-column">
						<h3>Contact</h3>
						<ul>
							<li>+1 (814) 619-5491</li>
							<li>+233 24 716 8781</li>
							<li>
								<a href="mailto:info@inclusionafrika.org">
									info@inclusionafrika.org
								</a>
							</li>
						</ul>
						<div className="footer-social">
							<a href="https://facebook.com/inclusionafrika" target="_blank" rel="noreferrer">
								Facebook
							</a>
							<a href="https://x.com/inclusionafrika" target="_blank" rel="noreferrer">
								X
							</a>
							<a href="https://linkedin.com/company/inclusionafrika" target="_blank" rel="noreferrer">
								LinkedIn
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>
						Copyright {new Date().getFullYear()} Inclusion Afrika. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
