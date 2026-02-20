import partnerLogo from "../data/partnerLogo.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const PartnerSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: false,
	});

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
			},
		},
	};

	const textVariants = {
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

	const partnerVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<motion.section
			className="partner-container container top"
			variants={containerVariants}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			ref={ref}
		>
			<div className="text d-flex">
				<div className="title d-flex">
					<motion.h2 variants={textVariants} initial="hidden" animate="show">
						Partners
					</motion.h2>
					<motion.hr variants={textVariants} initial="hidden" animate="show" />
				</div>
				<motion.p variants={textVariants} initial="hidden" animate="show">
					We are grateful for the collaborative spirit of our amazing partners
				</motion.p>
			</div>
			<Row className="partners d-flex">
				{partnerLogo.map((partner, index) => (
					<Col key={index} xl={2} md={1} xs={4}>
						<motion.div
							className="partner d-flex align-items-center flex-column"
							variants={partnerVariants}
							initial="hidden"
							animate={inView ? "show" : "hidden"}
						>
							<LazyLoadImage
								src={partner.partnerLogo}
								alt={partner.partnerName}
								className="img-fluid"
								style={{ maxWidth: "60%", height: "auto" }}
							/>
						</motion.div>
					</Col>
				))}
			</Row>
		</motion.section>
	);
};

export default PartnerSection;
