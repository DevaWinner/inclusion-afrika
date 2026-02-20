import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
	const { ref: parentRef, inView: parentInView } = useInView({
		triggerOnce: false,
	});

	const parentVariants = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
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

	const cardVariants = {
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

	const stagger = {
		show: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const { ref: card1Ref, inView: card1InView } = useInView({
		triggerOnce: false,
	});

	const { ref: card2Ref, inView: card2InView } = useInView({
		triggerOnce: false,
	});

	const { ref: card3Ref, inView: card3InView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.div
			className="top container"
			variants={parentVariants}
			initial="hidden"
			animate={parentInView ? "show" : "hidden"}
			ref={parentRef}
		>
			<div className="text d-flex">
				<div className="title d-flex">
					<motion.h2 variants={titleVariants} initial="hidden" animate="show">
						Our Approach
					</motion.h2>
					<motion.hr variants={titleVariants} initial="hidden" animate="show" />
				</div>
				<motion.p variants={textVariants} initial="hidden" animate="show">
					We provide hope to the "forgotten" and acceptance to those who "have
					not"
				</motion.p>
			</div>

			<motion.div
				className="card-group d-flex container"
				variants={stagger}
				initial="hidden"
				animate="show"
			>
				<motion.div
					className="card"
					variants={cardVariants}
					initial="hidden"
					animate={card1InView ? "show" : "hidden"}
					ref={card1Ref}
				>
					<LazyLoadImage
						src="https://inclusionafrika.imgix.net/seller.jpg"
						effect="blur"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h3 className="card-title">Micro Loans</h3>
						<p className="card-text">
							We provide micro loans to motivated individuals across Africa.
							These loans spark entrepreneurial spirit, fuel local businesses,
							and foster self-reliance. From pig farming to soccer cinemas, our
							loans support a wide range of ventures.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="card"
					variants={cardVariants}
					initial="hidden"
					animate={card2InView ? "show" : "hidden"}
					ref={card2Ref}
				>
					<LazyLoadImage
						src="https://inclusionafrika.imgix.net/students.jpg"
						effect="blur"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h3 className="card-title">Educational Growth</h3>
						<p className="card-text">
							We facilitate workshops, learning centers, and scholarships that
							accelerate skill development and job readiness among African
							youth. Our goal is to prepare young adults for remote work
							opportunities in the digital age.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="card"
					variants={cardVariants}
					initial="hidden"
					animate={card3InView ? "show" : "hidden"}
					ref={card3Ref}
				>
					<LazyLoadImage
						src="https://inclusionafrika.imgix.net/hand-shake.jpg"
						effect="blur"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h3 className="card-title">Mentoring and Support</h3>
						<p className="card-text">
							We are dedicated to helping loan recipients succeed. We work
							closely with borrowers, offering guidance and assistance to ensure
							the success of their ventures.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default WhatWeDo;
