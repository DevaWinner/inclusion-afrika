"use client";

import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import HeroCarousel from "../components/Carousel";
import Reach from "../components/Reach";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDo from "../components/WhatWeDo";
import CtaBox from "../components/CtaBox";
import ContactForm from "../components/ContactForm";
import PartnerSection from "../components/PartnerSection";
import { motion } from "framer-motion";

function Home() {
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
				<section className="hero">
					<HeroCarousel />

					<div className="overlay heading">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.5, delay: 1 }}
							className="text"
						>
							<h1>
								Become a
								<br />
								Catalyst for <br />
								Good in Africa
							</h1>
						</motion.div>
					</div>
				</section>
				<Reach />
				<WhoWeAreSection />
				<WhatWeDo />
				<CtaBox />
				<ContactForm />
				<PartnerSection />
			</motion.div>
		</>
	);
}

export default Home;
