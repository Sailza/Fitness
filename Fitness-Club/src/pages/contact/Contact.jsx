import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
	return (
		<>
			<Header title="Gt In Touch" image={HeaderImage}>
				Feel Free To Contact Us Anytime!!!
			</Header>

			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="mailto:it.shailzagupta@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a
							href="https://www.facebook.com/sailza gupta/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href="https://wa.me/+6203578708"
							target="_blank"
							rel="noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
