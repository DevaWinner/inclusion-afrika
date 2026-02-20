import DonateButton from "./DonateButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CtaBox = () => {
	const { ref, inView } = useInView({
		triggerOnce: false,
	});

	const ctaVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5,
			},
		},
	};

	const descriptionVariants = {
		hidden: { opacity: 0, x: -20 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				delay: 1,
			},
		},
	};

	const buttonContainerVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 0.9,
			},
		},
	};

	return (
		<motion.section
			className="cta-box d-flex flex-column container top"
			variants={ctaVariants}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			ref={ref}
		>
			<motion.p className="cta-title" variants={titleVariants}>
				Become a catalyst for good
			</motion.p>
			<motion.div className="d-flex" variants={ctaVariants}>
				<motion.p className="cta-description" variants={descriptionVariants}>
					Please support our cause and experience the "power of one"
				</motion.p>
				<motion.div
					className="button-container d-flex"
					variants={buttonContainerVariants}
				>
					<motion.div>
						<DonateButton />
					</motion.div>
					<Link href="/getinvolved">
						<motion.button className="mentor-btn">Get involved</motion.button>
					</Link>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default CtaBox;
