import React from "react";
import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";

function Gallery() {
	const galleryLength = 15;
	const images = [];
	for (let i = 1; i <= galleryLength; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}
	// console.log(images); //Array of image/

	return (
		<>
			<Header title="Our Gallery" image={HeaderImage}>
			"Discover a diverse range of exercise and yoga options at our fitness club. From high-intensity workouts to serene yoga sessions, we offer a balanced approach to wellness. Join us to sculpt your body, enhance flexibility, and find inner peace—all under one roof."
			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default Gallery;
