import "../src/styles/globals.css";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";

export const metadata = {
	title: {
		default: "Inclusion Afrika",
		template: "%s | Inclusion Afrika",
	},
	description:
		"Inclusion Afrika equips African youth with access to micro-loans, mentorship, education, and global partnerships.",
	metadataBase: new URL("https://inclusionafrika.org"),
	icons: {
		icon: "https://inclusionafrika.imgix.net/meta.jpg",
	},
	openGraph: {
		title: "Inclusion Afrika",
		description:
			"Catalyzing opportunity for young adults across Africa through funding, coaching, and long-term support.",
		url: "https://inclusionafrika.org",
		siteName: "Inclusion Afrika",
		images: [
			{
				url: "https://inclusionafrika.imgix.net/meta.jpg",
				width: 1200,
				height: 630,
			},
		],
		locale: "en_US",
		type: "website",
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
					href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div className="site-backdrop" aria-hidden="true" />
				<NavBar />
				<main className="site-main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
