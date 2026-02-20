import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ModalFooter } from "react-bootstrap";

const DonateButton = () => {
	const [showModal, setShowModal] = useState(false);

	const handleModalOpen = () => {
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<Button
				variant="secondary"
				className="mobile-button"
				onClick={handleModalOpen}
			>
				Donate
			</Button>

			{/* Modal */}
			<Modal
				show={showModal}
				onHide={handleModalClose}
				centered
				animation={true}
				size="lg"
			>
				<Modal.Header closeButton>
					<Modal.Title>Donate</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="donate-row">
						<Col md={6} className="text-center mb-3 mb-md-0 image"></Col>

						<Col
							md={6}
							className="donate-instruction d-flex flex-column justify-content-center align-items-center "
						>
							<p>
								We partner with Skep Foundation to process our donations. Skep
								Foundation is a 501(c)3 organization that connects African
								talent to careers.
							</p>

							<p>To make a donation to our cause</p>

							<a
								href="https://www.zeffy.com/en-US/donation-form/10a7300e-8c6a-4af3-a738-79517cc3b372"
								target="_blank"
								rel="noopener noreferrer"
								className="donate-link-button"
							>
								Click Here
							</a>
						</Col>
					</Row>
				</Modal.Body>
				<ModalFooter>
					<p className="tax-info">
						*{" "}
						<small>
							Please email{" "}
							<a href="mailto:drupper@gmail.com">drupper@gmail.com</a> if you
							would like to donate via check or appreciated securities
						</small>
					</p>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default DonateButton;
