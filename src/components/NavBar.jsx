"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonateButton from "./DonateButton";

const PRIMARY_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/organization", label: "Organization" },
	{ href: "/team", label: "Team" },
];

const INITIATIVE_LINKS = [
	{ href: "/initiative", label: "All Initiatives" },
	{ href: "/initiative/micro-loans", label: "Micro Loans" },
	{ href: "/initiative/educational-growth", label: "Educational Growth" },
	{ href: "/initiative/mentorship-support", label: "Mentorship and Support" },
];

const END_LINKS = [{ href: "/getinvolved", label: "Get Involved" }];

export default function NavBar() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [initiativeOpen, setInitiativeOpen] = useState(false);

	const isInitiativeActive = pathname.startsWith("/initiative");

	const handleNavClose = () => {
		setMenuOpen(false);
		setInitiativeOpen(false);
	};

	useEffect(() => {
		handleNavClose();
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
						{PRIMARY_LINKS.map((link) => {
							const isActive = pathname === link.href;

							return (
								<li key={link.href} className="header-nav-item">
									<Link
										href={link.href}
										className={`header-link ${isActive ? "is-active" : ""}`}
										onClick={handleNavClose}
									>
										{link.label}
									</Link>
								</li>
							);
						})}

						<li
							className={`header-nav-item header-nav-item--dropdown ${
								initiativeOpen ? "is-open" : ""
							}`}
						>
							<button
								type="button"
								className={`header-link header-link--dropdown ${
									isInitiativeActive ? "is-active" : ""
								}`}
								onClick={() => setInitiativeOpen((open) => !open)}
								aria-expanded={initiativeOpen}
								aria-controls="initiative-submenu"
							>
								Initiatives
								<span className="header-link-caret" aria-hidden="true">
									▾
								</span>
							</button>
							<div
								id="initiative-submenu"
								className={`header-submenu ${initiativeOpen ? "is-open" : ""}`}
							>
								{INITIATIVE_LINKS.map((subLink) => (
									<Link
										key={subLink.href}
										href={subLink.href}
										className={`header-submenu-link ${
											pathname === subLink.href ? "is-active" : ""
										}`}
										onClick={handleNavClose}
									>
										{subLink.label}
									</Link>
								))}
							</div>
						</li>

						{END_LINKS.map((link) => {
							const isActive = pathname === link.href;

							return (
								<li key={link.href} className="header-nav-item">
									<Link
										href={link.href}
										className={`header-link ${isActive ? "is-active" : ""}`}
										onClick={handleNavClose}
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
