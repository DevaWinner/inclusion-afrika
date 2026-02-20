import { Container, Row, Col } from "react-bootstrap";
import ProgramCard from "./ProgramCard";
import programData from "../data/programData.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgramAreas = () => {
	const { ref: textRef, inView: textInView } = useInView({
		triggerOnce: false,
	});

	return (
		<Container className="program-areas-container" ref={textRef}>
			<motion.div
				className="text d-flex top"
				initial={{ opacity: 0, y: 100 }}
				animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
				transition={{ duration: 0.8 }}
			>
				<div className="title d-flex">
					<h2>Program Areas</h2>
					<hr />
				</div>
				<p>
					Explore our initiatives below to see how we're working towards a
					brighter future for African young adults:
				</p>
			</motion.div>
			<Row xs={1} md={3}>
				{programData.map((program, index) => (
					<ProgramCard key={index} {...program} index={index} />
				))}
			</Row>
		</Container>
	);
};

export default ProgramAreas;
