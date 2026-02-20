import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SupportForm = ({ setShowAlert }) => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		donationType: "",
		message: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: "POST",
			url: "https://usebasin.com/f/588bb7afd7a4",
			headers: { "Content-Type": "application/json" },
			data: formData,
		})
			.then((response) => {
				console.log("Form submitted successfully", response);
				setShowAlert(true);
				setFormData({
					fname: "",
					lname: "",
					email: "",
					phone: "",
					donationType: "",
					message: "",
				});
			})
			.catch((error) => {
				console.error("Error submitting form", error);
			});
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const { ref: formRef, inView: formInView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.Form
			onSubmit={handleSubmit}
			className="support-form d-flex flex-column"
			style={{ position: "relative" }}
			ref={formRef}
			initial={{ opacity: 0, y: 100 }}
			animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
			transition={{ duration: 0.8 }}
		>
			<Row className="mb-3">
				<Col>
					<label htmlFor="fname">First Name</label>
					<input
						type="text"
						name="fname"
						id="fname"
						className="form-control p-2"
						value={formData.fname}
						onChange={handleChange}
						required
					/>
				</Col>
				<Col>
					<label htmlFor="lname">Last Name</label>
					<input
						type="text"
						name="lname"
						id="lname"
						className="form-control p-2"
						value={formData.lname}
						onChange={handleChange}
						required
					/>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						className="form-control p-2"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</Col>
				<Col>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						required
						title="Please enter a phone number"
						name="phone"
						id="phone"
						className="form-control p-2"
						value={formData.phone}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Row className="mb-3">
				<Col>
					<label htmlFor="donationType">
						What donation type are you interested in?
					</label>
					<select
						name="donationType"
						id="donationType"
						className="form-control p-2"
						required
						value={formData.donationType}
						onChange={handleChange}
					>
						<option value="">Select...</option>
						<option value="check">Donation via Check</option>
						<option value="stock">Give Stock</option>
						<option value="volunteer">Volunteer</option>
						<option value="other">Other</option>
					</select>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						rows="4"
						placeholder="Enter your message"
						className="form-control p-2"
						required
						value={formData.message}
						onChange={handleChange}
					></textarea>
				</Col>
			</Row>

			<motion.button
				type="submit"
				className="button align-self-center"
				initial={{ opacity: 0, y: 50 }}
				animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.8 }}
			>
				Submit
			</motion.button>
		</motion.Form>
	);
};

const OtherWaysToSupport = () => {
	const [showAlert, setShowAlert] = useState(false);

	const handleAlertClose = () => {
		setShowAlert(false);
	};

	useEffect(() => {
		let timeoutId;
		if (showAlert) {
			timeoutId = setTimeout(() => {
				handleAlertClose();
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [showAlert]);

	const { ref: waysToSupportRef, inView: waysToSupportInView } = useInView({
		triggerOnce: false,
	});

	return (
		<motion.section
			className="contact-container bg-light text-dark container top"
			ref={waysToSupportRef}
			initial={{ opacity: 0, y: 100 }}
			animate={
				waysToSupportInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
			}
			transition={{ duration: 0.8 }}
		>
			<Container>
				<Row>
					<Col md={6} className="text-container p-5 rounded">
						<motion.h2
							className="mb-3"
							initial={{ opacity: 0, x: -50 }}
							animate={
								waysToSupportInView
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -50 }
							}
							transition={{ duration: 0.8 }}
						>
							Other Ways to Support
						</motion.h2>
						<motion.p
							className="mb-4"
							initial={{ opacity: 0, x: 50 }}
							animate={
								waysToSupportInView
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: 50 }
							}
							transition={{ duration: 0.8 }}
						>
							For larger donations or other kinds of donations, please contact
							us directly by filling out the form below.
						</motion.p>
					</Col>
					<Col md={6} className="bg-white p-4 rounded shadow">
						<SupportForm setShowAlert={setShowAlert} />
						{showAlert && (
							<Alert
								variant="success"
								onClose={handleAlertClose}
								dismissible
								className="mt-3"
							>
								Message sent successfully!
							</Alert>
						)}
					</Col>
				</Row>
			</Container>
		</motion.section>
	);
};

export default OtherWaysToSupport;
