"use client";

import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import ProfileSection from "../components/ProfileSection";
import boardMembersData from "../data/boardMembersData.json";
import foundersData from "../data/foundersData.json";
import techTeamData from "../data/techTeamData.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
	const { ref: headerRef, inView: headerInView } = useInView({
		triggerOnce: true,
	});

	const { ref: textRef, inView: textInView } = useInView({
		triggerOnce: true,
	});

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Navbar />
				<div className="team-header" ref={headerRef}>
					<img
						src="https://inclusionafrika.imgix.net/happy-people.jpg"
						alt="medium-shot-happy-african-people"
						className="img-fluid"
					/>
					<div className="overlay">
						<h1 className="text">Meet the Team</h1>
					</div>
				</div>
				<section className="container top">
					<motion.div
						className="text d-flex"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						ref={textRef}
					>
						<div className="title d-flex"></div>
						<p>
							Our team is made up of a diverse group of people and experiences.
							We are united by our passion for helping others and our desire to
							make a difference in the world.
						</p>
					</motion.div>
					<div className="text d-flex">
						<div className="title d-flex">
							<h2>Founders</h2>
							<hr />
						</div>
					</div>
					<ProfileSection profiles={foundersData} type="Founder" />
					<div className="text d-flex">
						<div className="title d-flex">
							<h2>Board Members</h2>
							<hr />
						</div>
					</div>
					<ProfileSection profiles={boardMembersData} type="Board" />
					<div className="text d-flex">
						<div className="title d-flex">
							<h2>Tech Team</h2>
							<hr />
						</div>
					</div>
					<ProfileSection profiles={techTeamData} type="Tech" />
				</section>
			</motion.div>
		</>
	);
};

export default OurTeam;
