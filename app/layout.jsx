import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import "../src/App.css";
import "../src/styles/AboutHero.css";
import "../src/styles/AboutStory.css";
import "../src/styles/Carousel.css";
import "../src/styles/ContactForm.css";
import "../src/styles/CtaBox.css";
import "../src/styles/DonateButton.css";
import "../src/styles/Footer.css";
import "../src/styles/Home.css";
import "../src/styles/ImpactContainer.css";
import "../src/styles/NavBar.css";
import "../src/styles/OtherWaysToSupport.css";
import "../src/styles/OurTeam.css";
import "../src/styles/PartnerSection.css";
import "../src/styles/ProgramAreas.css";
import "../src/styles/Reach.css";
import "../src/styles/Testimonial.css";
import "../src/styles/VideoComponent.css";
import "../src/styles/WhatWeDo.css";
import "../src/styles/WhoWeAreSection.css";
import Script from "next/script";

export const metadata = {
	title: "Inclusion Afrika - Empowering African Youth",
	description:
		"Empowering African youth for a brighter future. Join Inclusion Afrika in breaking barriers through micro-loans, education, and opportunities.",
	keywords: [
		"Empowerment",
		"African youth",
		"Micro-loans",
		"Education opportunities",
		"Poverty alleviation",
		"Self-reliance",
		"Community development",
	],
	icons: {
		icon: "https://inclusionafrika.imgix.net/meta.jpg",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				{children}
				<Script
					src="https://kit.fontawesome.com/8d20eebc7a.js"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
