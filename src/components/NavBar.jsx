"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DonateButton from "./DonateButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const navLinkClassName = (href) =>
		`nav-link${pathname === href ? " active" : ""}`;

	const closeNavbar = () => {
		const navbarToggler = document.querySelector(".navbar-toggler");
		if (navbarToggler && window.innerWidth < 992) {
			navbarToggler.click();
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{["lg"].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className={`bg-white header ${scrolled ? "scrolled" : ""}`}
					style={{ zIndex: 1001 }}
					sticky="top"
				>
					<Container className="header">
						<Navbar.Brand className="logo">
							<Link href="/">
								<img
									src="https://inclusionafrika.imgix.net/logo.jpg"
									className="img-fluid"
									alt="Inclusion Afrika Logo"
								/>
							</Link>
						</Navbar.Brand>
						<div className="mobile-screen">
							<DonateButton />
						</div>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							className="shadow-none border-0"
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							style={{
								backgroundColor: "var(--primary-color)",
								top: "65px",
								width: "80%",
								height: "80%",
								backdropFilter: "blur(20px)",
								color: "antiquewhite",
								borderRadius: "0 0 0 20px",
								border: "none",
							}}
						>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 mobile">
									<Link
										href="/"
										className={navLinkClassName("/")}
										onClick={closeNavbar}
									>
										Home
									</Link>
									<NavDropdown
										title="About Us"
										id="basic-nav-dropdown"
										className="nav-link"
									>
										<NavDropdown.Item
											as={Link}
											href="/organization"
											className={
												pathname === "/organization" ? "active" : ""
											}
											onClick={closeNavbar}
										>
											Our Organization
										</NavDropdown.Item>
										<NavDropdown.Item
											as={Link}
											href="/team"
											className={pathname === "/team" ? "active" : ""}
											onClick={closeNavbar}
										>
											Our Team
										</NavDropdown.Item>
									</NavDropdown>
									<Link
										href="/initiative"
										className={navLinkClassName("/initiative")}
										onClick={closeNavbar}
									>
										Initiatives
									</Link>
									<Link
										href="/getinvolved"
										className={navLinkClassName("/getinvolved")}
										onClick={closeNavbar}
									>
										Get Involved
									</Link>
								</Nav>
								<div className="donate">
									<DonateButton />
								</div>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default NavBar;
