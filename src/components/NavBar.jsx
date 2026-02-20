"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonateButton from "./DonateButton";

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/organization", label: "Organization" },
	{ href: "/team", label: "Team" },
	{ href: "/initiative", label: "Initiatives" },
	{ href: "/getinvolved", label: "Get Involved" },
];

export default function NavBar() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<header className="site-header">
			<div className="header-shell">
				<Link href="/" className="brand" aria-label="Inclusion Afrika home">
					<Image
						src="https://inclusionafrika.imgix.net/logo.jpg"
						alt="Inclusion Afrika"
						width={176}
						height={60}
						priority
					/>
				</Link>

				<button
					type="button"
					className={`header-toggle ${menuOpen ? "is-open" : ""}`}
					onClick={() => setMenuOpen((current) => !current)}
					aria-expanded={menuOpen}
					aria-controls="site-navigation"
					aria-label="Toggle navigation"
				>
					<span />
					<span />
				</button>

				<nav
					id="site-navigation"
					className={`header-nav ${menuOpen ? "is-open" : ""}`}
				>
					<ul className="header-nav-list">
						{NAV_LINKS.map((link) => {
							const isActive = pathname === link.href;

							return (
								<li key={link.href}>
									<Link
										href={link.href}
										className={`header-link ${isActive ? "is-active" : ""}`}
									>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="header-actions">
						<DonateButton label="Donate" />
					</div>
				</nav>
			</div>
		</header>
	);
}
