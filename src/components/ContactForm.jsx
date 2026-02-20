import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		message: "",
	});

	const [showAlert, setShowAlert] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
					message: "",
				});
			})
			.catch((error) => {
				console.error("Error submitting form", error);
			});
	};

	useEffect(() => {
		let timeoutId;

		if (showAlert) {
			timeoutId = setTimeout(() => {
				setShowAlert(false);
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [showAlert]);

	return (
		<>
			<section className="contact-container container">
				<Container className="top">
					<Row className="contact">
						<Col md={6} className="form flex column">
							<div className="text d-flex">
								<div className="title d-flex">
									<h2>Contact us</h2>
									<hr />
								</div>
								<p>
									Thank you for your interest, and we are happy to answer any
									questions. Please fill this short form, and we will get back
									to you as soon as possible.
								</p>
							</div>
							<Form
								className="form-fill d-flex flex-column"
								onSubmit={handleSubmit}
							>
								<Row className="mb-3">
									<Col>
										<label htmlFor="fname">First Name</label>
										<input
											type="text"
											name="fname"
											id="fname"
											className="form-control"
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
											className="form-control"
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
											className="form-control"
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
											className="form-control"
											value={formData.phone}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<Col>
										<label htmlFor="message">Message</label>
										<textarea
											name="message"
											id="message"
											rows="4"
											placeholder="Send us a message"
											className="form-control"
											value={formData.message}
											onChange={handleChange}
											required
										></textarea>
									</Col>
								</Row>
								<button type="submit" className="button">
									Submit
								</button>
								<Alert
									variant="success"
									onClose={() => setShowAlert(false)}
									show={showAlert}
									className="mt-3"
									dismissible
								>
									Thank you for contact us. Message sent successfully!
								</Alert>
							</Form>
							<p className="agreement">
								* By submitting this form, you agree to our{" "}
								<strong>privacy policy</strong>
							</p>
						</Col>
						<Col md={6} className="address d-flex flex-column">
							<h3 className="form-heading">Get Connected</h3>
							<p>
								You can also reach us anytime through the following medium, and
								we will be available to answer your questions
							</p>
							<ul className="address-items">
								<li>
									<i className="fa-solid fa-phone"></i>
									<p>
										+1 (814) 619-5491 <br /> +233 24 716 8781
									</p>
								</li>
								<li>
									<i className="fa-solid fa-envelope"></i>
									<p>
										<a href="mailto: drupper@gmail.com">drupper@gmail.com</a>
									</p>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default ContactForm;
