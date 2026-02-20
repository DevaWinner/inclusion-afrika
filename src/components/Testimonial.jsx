import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
	const { ref: testimonialRef, inView: testimonialInView } = useInView({
		triggerOnce: false,
	});

	const getRandomTestimonials = () => {
		const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
		return shuffledTestimonials.slice(0, 4);
	};

	const randomTestimonials = getRandomTestimonials();

	return (
		<div
			className="container top"
			ref={testimonialRef}
			initial={{ opacity: 0, y: 100 }}
			animate={
				testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
			}
			transition={{ duration: 0.8 }}
		>
			<div className="text d-flex">
				<motion.div
					className="title d-flex"
					initial={{ opacity: 0, x: -50 }}
					animate={
						testimonialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
					}
					transition={{ duration: 0.8 }}
				>
					<h2>Testimonials</h2>
					<hr />
				</motion.div>
				<motion.p
					initial={{ opacity: 0, x: 50 }}
					animate={
						testimonialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
					}
					transition={{ duration: 0.8 }}
				>
					We are uplifting and Supporting hundreds of amazing young adults in
					Africa
				</motion.p>
			</div>
			<div className="d-flex flex-column flex-md-row gap-md-0 gap-4 align-items-center">
				{randomTestimonials.map((testimonial, index) => (
					<TestimonialCard key={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default Testimonial;
