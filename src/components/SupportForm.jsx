"use client";

import { useState } from "react";

const BASIN_ENDPOINT = "https://usebasin.com/f/588bb7afd7a4";

const initialState = {
	name: "",
	email: "",
	phone: "",
	interest: "",
	message: "",
};

export default function SupportForm() {
	const [formData, setFormData] = useState(initialState);
	const [status, setStatus] = useState("idle");
	const [statusText, setStatusText] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus("loading");
		setStatusText("Sending your message...");

		try {
			const response = await fetch(BASIN_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Request failed");
			}

			setStatus("success");
			setStatusText(
				"Thanks. We received your message and will reach out soon.",
			);
			setFormData(initialState);
		} catch (error) {
			setStatus("error");
			setStatusText(
				"Unable to submit right now. Please email  drupper@gmail.com instead.",
			);
		}
	};

	return (
		<form className="support-form" onSubmit={handleSubmit}>
			<div className="support-form__grid">
				<label>
					Full Name
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
			</div>

			<div className="support-form__grid">
				<label>
					Phone (optional)
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
					/>
				</label>
				<label>
					How would you like to help?
					<select
						name="interest"
						value={formData.interest}
						onChange={handleChange}
						required
					>
						<option value="">Select one</option>
						<option value="donate">Donate</option>
						<option value="mentor">Mentor</option>
						<option value="partnership">Partnership</option>
						<option value="volunteer">Volunteer</option>
					</select>
				</label>
			</div>

			<label>
				Message
				<textarea
					name="message"
					rows="4"
					value={formData.message}
					onChange={handleChange}
					placeholder="Tell us about your interest"
					required
				/>
			</label>

			<div className="support-form__actions">
				<button
					type="submit"
					className="btn btn--primary"
					disabled={status === "loading"}
				>
					{status === "loading" ? "Sending..." : "Send Message"}
				</button>
				{status !== "idle" && (
					<p className={`support-form__status support-form__status--${status}`}>
						{statusText}
					</p>
				)}
			</div>
		</form>
	);
}
