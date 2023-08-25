import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
	return (
		<>
			<Header title="About us" image={HeaderImage}>
			"Discover a diverse range of exercise and yoga options at our fitness club. From high-intensity workouts to serene yoga sessions, we offer a balanced approach to wellness. Join us to sculpt your body, enhance flexibility, and find inner peace—all under one roof."
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
						Once upon a time in a bustling neighborhood, a group of health enthusiasts had a vision to create a place where people of all ages and backgrounds could come together to pursue their fitness goals. They transformed an old warehouse into a vibrant fitness club, bringing their dream to life.
						</p>
						<p>
						As the club opened its doors, it quickly became a hub of activity. Early risers hit the cardio zone, their feet pounding on treadmills and ellipticals. The strength area buzzed with the clinking of weights and the encouraging words of personal trainers. The spacious studio echoed with laughter and focused determination during yoga and dance classes.
						</p>
						<p>
						the story of the fitness club continued, a story of strength, unity, and unwavering commitment to well-being. It stood as a reminder that with determination, community, and a shared vision, anything was possible—even turning an old warehouse into a place where dreams took shape, and lives were changed for the better.
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
						our fitness club's vision is a tapestry woven from the threads of wellness, community, growth, and inspiration. It's a place where individuals find not just a gym, but a home where they can realize their potential and transform their lives.
						</p>
						<p>
						The vision of our fitness club is to create a vibrant and inclusive community dedicated to inspiring and facilitating positive transformations in the lives of individuals. We envision a place where people of all backgrounds, fitness levels, and ages come together with a shared commitment to their well-being
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
						The mission of our fitness club is to empower individuals to lead healthier, more fulfilling lives through a holistic approach to well-being. We are committed to providing a supportive and inclusive community that nurtures personal growth, fosters connections, and promotes physical and mental vitality.
						</p>
						<p>
						our fitness club's mission is to be a catalyst for positive change, providing a nurturing space where individuals can evolve into healthier, happier versions of themselves, supported by a community that believes in their potential.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
