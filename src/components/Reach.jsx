import React, { lazy, Suspense } from "react";
import Marquee from "react-fast-marquee";
import { Col } from "react-bootstrap";
import flagsData from "../data/FlagsData.json";
import { motion } from "framer-motion";

const Reach = () => {
	return (
		<motion.div
			className="operations d-flex align-items-center flex-column"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 1.5 }}
		>
			<h3 className="text">Our Footprint</h3>
			<Marquee className="countries" pauseOnHover={true} gradient={true }>
				{flagsData.map((flag, index) => (
					<Suspense key={index} fallback={<div>Loading...</div>}>
						<Col key={index} xl={2} md={1} xs={4} className="d-flex flex-row">
							<div className="country d-flex align-items-center flex-column justify-content-center ">
								<img
									src={flag.flagPath}
									alt={`${flag.country} Flag`}
									className="footprint-image"
								/>
								<p className="text-truncate justify-self-end">{flag.country}</p>
							</div>
						</Col>
					</Suspense>
				))}
			</Marquee>
		</motion.div>
	);
};

export default Reach;
