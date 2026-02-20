"use client";

import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import WhyHelpSection from "../components/WhyHelpSection";
import CtaBox from "../components/CtaBox";
import OtherWaysToSupport from "../components/OtherWaysToSupport";
import VideoComponent from "../components/VideoComponent";
import { motion } from "framer-motion";

function GetInvolved() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Navbar />
				<div className="team-header">
					<img
						src="https://inclusionafrika.imgix.net/hand-shake.jpg"
						alt="medium-shot-happy-african-people"
						className="img-fluid"
					/>
					<div className="overlay">
						<h1 className="text">Get Involved</h1>
					</div>
				</div>
				<motion.div
					className="text d-flex"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, delay: 1 }}
				>
					<div className="title d-flex mt-4"></div>
					<p className="mt-4 fs-5">
						Young Adults in Africa needs what you have to offer! Your support
						can help individuals climb out of poverty and become self-reliant.
					</p>
				</motion.div>
				<VideoComponent />
				<WhyHelpSection />
				<CtaBox />
				<OtherWaysToSupport />
			</motion.div>
		</>
	);
}

export default GetInvolved;
