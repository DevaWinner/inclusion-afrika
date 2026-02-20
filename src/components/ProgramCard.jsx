import { Col, Button, Row } from "react-bootstrap";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DonateButton from "./DonateButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgramCard = ({ title, imgSrc, description }) => {
	const { ref: imgRef, inView: imgInView } = useInView({
		triggerOnce: false,
	});

	const { ref: textRef, inView: textInView } = useInView({
		triggerOnce: false,
	});

	return (
		<Col md={12} className="program-areas px-4">
			<Row className="program-card d-flex align-items-center justify-content-center gap-4">
				<Col xs={12} md={6} className="program-card-img" ref={imgRef}>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
						transition={{ duration: 0.8 }}
					>
						<LazyLoadImage
							src={imgSrc}
							effect="blur"
							alt={title}
							className="img-fluid rounded"
						/>
					</motion.div>
				</Col>
				<Col
					xs={12}
					md={6}
					className="program-card-text d-flex flex-column gap-md-3"
					ref={textRef}
				>
					<div className="title d-flex">
						<motion.h3
							className="program-title"
							initial={{ opacity: 0, y: 100 }}
							animate={
								textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
							}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{title}
						</motion.h3>
						<hr />
					</div>
					<motion.p
						className="text-justify"
						initial={{ opacity: 0, y: 100 }}
						animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						{description}
					</motion.p>
					<motion.div
						className="program-button-container d-flex gap-3"
						initial={{ opacity: 0, y: 100 }}
						animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<DonateButton />
						<Link href="/getinvolved">
							<Button className="program-button-2">Get Involved</Button>
						</Link>
					</motion.div>
				</Col>
			</Row>
		</Col>
	);
};

export default ProgramCard;
