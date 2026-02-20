import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImpactContainer = () => {
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

	const colVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const { ref: col1Ref, inView: col1InView } = useInView({
		triggerOnce: false,
	});

	const { ref: col2Ref, inView: col2InView } = useInView({
		triggerOnce: false,
	});

	const { ref: col3Ref, inView: col3InView } = useInView({
		triggerOnce: false,
	});

	const { ref: col4Ref, inView: col4InView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.section
			className="impact-container top d-flex flex-column align-items-center container"
			variants={containerVariants}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			ref={ref}
		>
			<Container>
				<Row>
					<div className="text d-flex">
						<div className="title d-flex">
							<motion.h2
								variants={textVariants}
								initial="hidden"
								animate="show"
							>
								Our Impact in Africa
							</motion.h2>
							<motion.hr
								className="bg-primary"
								variants={textVariants}
								initial="hidden"
								animate="show"
							/>
						</div>
						<motion.p variants={textVariants} initial="hidden" animate="show">
							Our commitment equals impact. Every action makes a difference in
							the lives of African young adults
						</motion.p>
					</div>
				</Row>
				<Row className="about-impact d-flex justify-content-center ">
					<Col
						xs={6}
						xl={3}
						className="impact-item d-flex flex-column align-items-center"
						ref={col1Ref}
					>
						<motion.div
							className="item-1"
							variants={colVariants}
							initial="hidden"
							animate={col1InView ? "show" : "hidden"}
						>
							<svg
								viewBox="0 0 162 141"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M90.3462 3.55709C110.588 5.34 131.854 6.32574 145.469 21.3938C160.01 37.4857 164.63 60.0218 160.617 81.3253C156.391 103.756 144.515 125.061 124.034 135.181C103.324 145.415 79.5749 140.758 58.23 131.92C34.8338 122.233 10.5566 109.383 3.23542 85.1647C-4.56797 59.3512 1.82763 28.9223 21.5177 10.4761C39.213 -6.10133 66.18 1.42853 90.3462 3.55709Z"
									fill="#C4C4C4"
									fillOpacity="0.26"
								/>
							</svg>
						</motion.div>
						<p className="impact-texts">
							2,000 lives <br />
							impacted
						</p>
					</Col>
					<Col
						xs={6}
						xl={3}
						className="impact-item item-2 d-flex flex-column align-items-center"
						ref={col2Ref}
					>
						<motion.div
							variants={colVariants}
							initial="hidden"
							animate={col2InView ? "show" : "hidden"}
						>
							<svg
								viewBox="0 0 153 145"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M80.727 0.000796375C104.791 0.0738878 130.976 4.37501 145.05 23.8835C158.61 42.6789 152.076 67.698 145.621 89.953C139.772 110.115 130.401 129.862 111.596 139.214C92.5252 148.699 70.4609 145.479 50.8921 137.067C29.9926 128.083 10.2242 114.491 3.53103 92.7593C-3.73286 69.1746 0.122738 42.4633 15.9117 23.4913C31.3733 4.91266 56.5481 -0.0726431 80.727 0.000796375Z"
									fill="#C4C4C4"
									fillOpacity="0.26"
								/>
							</svg>
						</motion.div>
						<p className="impact-texts">
							$50,000 in <br />
							micro loans made
						</p>
					</Col>
					<Col
						xs={6}
						xl={3}
						className="impact-item item-3 d-flex flex-column align-items-center"
						ref={col3Ref}
					>
						<motion.div
							variants={colVariants}
							initial="hidden"
							animate={col3InView ? "show" : "hidden"}
						>
							<svg
								viewBox="0 0 167 149"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M84.4604 0.257979C109.997 -1.41415 137.175 4.84438 153.179 24.8411C169.22 44.8827 169.917 72.9836 162.294 97.5068C155.376 119.759 137.46 136.341 115.837 144.961C96.0863 152.836 75.1203 148.1 55.4119 140.12C33.32 131.175 7.81831 121.688 1.52356 98.6733C-4.95274 74.9948 10.3452 51.921 26.1568 33.1584C41.2933 15.197 61.0404 1.7915 84.4604 0.257979Z"
									fill="#C4C4C4"
									fillOpacity="0.26"
								/>
							</svg>
						</motion.div>
						<p className="impact-texts">
							Activities in <br />
							10 countries
						</p>
					</Col>
					<Col
						xs={6}
						xl={3}
						className="impact-item item-4 d-flex flex-column align-items-center"
						ref={col4Ref}
					>
						<motion.div
							variants={colVariants}
							initial="hidden"
							animate={col4InView ? "show" : "hidden"}
						>
							<svg
								viewBox="0 0 153 145"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M80.727 0.000796375C104.791 0.0738878 130.976 4.37501 145.05 23.8835C158.61 42.6789 152.076 67.698 145.621 89.953C139.772 110.115 130.401 129.862 111.596 139.214C92.5252 148.699 70.4609 145.479 50.8921 137.067C29.9926 128.083 10.2242 114.491 3.53103 92.7593C-3.73286 69.1746 0.122738 42.4633 15.9117 23.4913C31.3733 4.91266 56.5481 -0.0726431 80.727 0.000796375Z"
									fill="#C4C4C4"
									fillOpacity="0.26"
								/>
							</svg>
						</motion.div>
						<p className="impact-texts">
							$36,000 in <br />
							educational assistance
						</p>
					</Col>
				</Row>
			</Container>
		</motion.section>
	);
};

export default ImpactContainer;
