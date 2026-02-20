// Import necessary libraries and components...
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhoWeAreSection = () => {
	const { ref: parentRef, inView: parentInView } = useInView({
		triggerOnce: false,
	});

	const parentVariants = {
		hidden: { opacity: 0, y: 100 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
				staggerChildren: 0.5,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
				ease: "easeInOut",
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.5,
				ease: "easeInOut",
			},
		},
	};

	const imgVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1.5,
				ease: "easeInOut",
			},
		},
	};

	const parallaxOffset = 50;

	const parallaxVariants = {
		hidden: { y: -parallaxOffset, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.5,
				ease: "easeInOut",
			},
		},
	};

	const { ref: missionRef, inView: missionInView } = useInView({
		triggerOnce: false,
	});

	const { ref: visionRef, inView: visionInView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.section
			className="who-we-are container"
			variants={parentVariants}
			initial="hidden"
			animate={parentInView ? "show" : "hidden"}
			ref={parentRef}
		>
			<div className="text d-flex">
				<div className="title d-flex">
					<motion.h2 variants={titleVariants} initial="hidden" animate="show">
						Who we are
					</motion.h2>
					<motion.hr variants={titleVariants} initial="hidden" animate="show" />
				</div>
				<motion.p variants={titleVariants} initial="hidden" animate="show">
					Inclusion Afrika is a non-profit organization that believes in the
					"power of one." We believe "one donor" and "one African" recipient can
					be a catalyst for good in our world. The donor's expression of love
					unleashes potential and results in meaningful change in Africa.
				</motion.p>
			</div>

			<div className="intro d-flex">
				<div className="mission d-flex" ref={missionRef}>
					<motion.div
						variants={parallaxVariants}
						initial="hidden"
						animate={missionInView ? "show" : "hidden"}
						className="img d-flex"
						style={{ maxHeight: "201px" }}
					>
						<div>
							<LazyLoadImage
								src="https://inclusionafrika.imgix.net/transaction.jpg"
								effect="blur"
								alt="Inclusion Africa"
								className="img-fluid"
							/>
						</div>
					</motion.div>
					<div className="vertical-line"></div>
					<motion.div
						variants={textVariants}
						initial="hidden"
						animate={missionInView ? "show" : "hidden"}
						className="description text-justify d-flex"
					>
						<div className="d-flex justify-content-center align-items-center gap-4">
							<motion.img
								src="https://inclusionafrika.imgix.net/target.png"
								alt="Target Graphic"
								className="icons"
								variants={imgVariants}
							/>
							<motion.h3 variants={textVariants}>Our Mission</motion.h3>
						</div>
						<motion.p variants={textVariants}>
							Our mission is to facilitate inclusion and self-reliance,
							empowering individuals to thrive. Through sustainable programs, we
							break down barriers, promote diversity, and create opportunities
							that enable young adults to progress.
						</motion.p>
					</motion.div>
				</div>

				<div className="vision d-flex" ref={visionRef}>
					<motion.div
						variants={textVariants}
						initial="hidden"
						animate={visionInView ? "show" : "hidden"}
						className="description text-justify d-flex"
					>
						<div className="d-flex justify-content-center align-items-center gap-4">
							<motion.img
								src="https://inclusionafrika.imgix.net/opportunity.png"
								alt="Target Graphic"
								className="icons"
								variants={imgVariants}
							/>
							<motion.h3 variants={textVariants}>Our Vision</motion.h3>
						</div>
						<motion.p variants={textVariants}>
							Our vision is to transform lives by providing micro-loans and
							sponsoring educational activities. By blending financial support
							with educational opportunities, we pave the way for a brighter
							future in young adults.
						</motion.p>
					</motion.div>
					<div className="vertical-line"></div>
					<motion.div
						variants={parallaxVariants}
						initial="hidden"
						animate={visionInView ? "show" : "hidden"}
						className="img d-flex"
						style={{ maxHeight: "201px" }}
					>
						<div>
							<LazyLoadImage
								src="https://inclusionafrika.imgix.net/vision.jpg"
								effect="blur"
								alt="Inclusion Africa"
								className="img-fluid"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default WhoWeAreSection;
