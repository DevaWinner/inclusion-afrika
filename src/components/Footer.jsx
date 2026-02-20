import React from "react";

const Footer = () => {
	return (
		<div className="footer d-flex flex-column top">
			<div className="footer-details d-flex">
				<p className="inclusion">Inclusion Afrika</p>
				<div className="footer-contact d-flex flex-column">
					<h3 className="footer-heading">Contact Info</h3>
					<ul className="d-flex flex-column">
						<li>
							<i className="fa-solid fa-phone"></i>
							<p>
								+1 (814) 619-5491 <br /> +233 24 716 8781
							</p>
						</li>
						<li>
							<i className="fa-solid fa-envelope"></i>
							<p>info@inclusionafrika.org</p>
						</li>
					</ul>
				</div>
				<div className="socials d-flex flex-column">
					<ul className="d-flex">
						<li>
							<a href="https://facebook.com/inclusionafrika">
								<i className="fa-brands fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://x.com/inclusionafrika">
								<i className="fa-brands fa-x-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://linkedin.in/a/inclusionafrika">
								<i className="fa-brands fa-linkedin"></i>
							</a>
						</li>
					</ul>
					<div className="newsletter d-flex flex-column">
						<p>Join our Newsletter</p>
						<form action="submit" className="subscribe">
							<input
								type="email"
								placeholder="Enter your email"
								className="subscribe-input"
							/>
							<button className="subscribe-btn">Subscribe</button>
						</form>
					</div>
				</div>
			</div>
			<div className="developer">
				<p className="copyright">
					Copyright © {new Date().getFullYear()} Inclusion Afrika. All rights
					reserved. <br className="developer-br" /> Designed and developed with
					<i className="fa fa-heart developer-heart"></i> by
					<a
						href="https://www.linkedin.com/in/winnera/"
						target="_blank"
						className="developer-name"
					>
						Aniekan Winner
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
