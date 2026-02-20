import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutStory = () => {
	const containerVariants = {
		hidden: { opacity: 0, y: 100 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 100 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5,
			},
		},
	};

	return (
		<motion.section
			className="about-story top d-flex flex-column align-items-center container"
			variants={containerVariants}
			initial="hidden"
			animate="show"
		>
			<Container>
				<div className="text d-flex">
					<div className="title d-flex">
						<motion.h2 variants={textVariants} initial="hidden" animate="show">
							Our Story
						</motion.h2>
						<motion.hr
							className="bg-primary"
							variants={textVariants}
							initial="hidden"
							animate="show"
						/>
					</div>
					<motion.p variants={textVariants} initial="hidden" animate="show">
						Inclusion Afrika was created to exercise the "power of one" and to
						act on our unwavering belief in the potential of young Africans.
					</motion.p>
				</div>
				<Row className="story-container d-flex flex-column gap-4">
					<StoryItem
						title="The Visionaries"
						text="Founded by Joseph Bentum and David Rupper, our story brings together two individuals from diverse backgrounds. Joseph, born and raised in Ghana, and David, hailing from the United States of America, may have had different life circumstances, but they shared a common belief: that working together, they could make a difference."
					/>
					<StoryItem
						title="The Spark"
						text="Our journey began with the realization that Africa's young adults were facing significant challenges, including poverty, inadequate education, and unemployment. The statistics were daunting - 70% of sub-Saharan Africa's population is under the age of 30, presenting both an opportunity and a responsibility."
					/>
					<StoryItem
						title="The Belief"
						text="We believe in the power of inclusion, the idea that everyone, regardless of their background or circumstances, should have the opportunity to thrive. We believe in the interdependence between those who have and those who have not, a principle that guides our actions."
					/>
					<StoryItem
						title="Our Initiatives"
						text="Inclusion Afrika was created to facilitate self-reliance opportunities for those born with so little but so determined to succeed. We believe microloans fuel the entrepreneurial spirit and target educational grants are answers to hard work and prayer."
					/>
				</Row>
			</Container>
		</motion.section>
	);
};

const StoryItem = ({ title, text }) => {
	const { ref, inView } = useInView({
		triggerOnce: false,
	});

	const storyVariants = {
		hidden: { opacity: 0, y: 100 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<motion.div
			className="story d-flex align-items-center col gap-4"
			variants={storyVariants}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			ref={ref}
		>
			<p className="story-title">{title}</p>
			<div className="story-line"></div>
			<p className="story-text">{text}</p>
		</motion.div>
	);
};

export default AboutStory;
