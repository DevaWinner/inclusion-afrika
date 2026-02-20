import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutHero = () => {
	return (
		<>
			<section className="about-hero">
				<img
					src="https://inclusionafrika.imgix.net/about-hero-scaled.jpg"
					alt="About Hero Image"
					className="img-fluid"
				/>
				<motion.div
					className="about-hero-text"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
				>
					<h2>About Inclusion Africa</h2>
					<p>
						Inclusion Afrika was incorporated in Accra Ghana by Joseph Bentum
						and David Rupper in June 2023. Although Inclusion Afrika is based in
						Ghana, it has a network throughout Sub-Saharan Africa. Inclusion
						Afrika was organized because African young adults are facing many
						challenges including poverty, inadequate education, unemployment and
						a lack of capital or opportunity.
					</p>
				</motion.div>
			</section>
			<Container>
				<motion.div
					className="about-quote d-flex flex-column container"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.5 }}
				>
					<blockquote className="mb-2 top">
						“Inclusion is the act of including someone or something as part of a
						group...”
					</blockquote>
					<p>-Cambridge Dictionary</p>
				</motion.div>
			</Container>
		</>
	);
};

export default AboutHero;
