import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoComponent = () => {
	const videoId = "JVKucRC0IbA";

	const opts = {
		playerVars: {
			autoplay: 0,
			controls: 0,
			showinfo: 0,
			rel: 0,
		},
	};

	const { ref: videoRef, inView: videoInView } = useInView({
		triggerOnce: false,
	});

	return (
		<Container ref={videoRef} className="mt-3">
			<Row className="align-items-center justify-content-center">
				<Col md={{ span: 8, offset: 2 }}>
					<motion.div
						className="video-container"
						initial={{ opacity: 0, y: 100 }}
						animate={
							videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
						}
						transition={{ duration: 0.8 }}
					>
						<YouTube videoId={videoId} opts={opts} />
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
};

export default VideoComponent;
