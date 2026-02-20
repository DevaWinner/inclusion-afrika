
const HeroCarousel = () => {
	return (
		<div>
			<div
				id="carouselExampleSlidesOnly"
				className="carousel"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://inclusionafrika.imgix.net/1.jpg"
							className="d-block w-100 h-100 carousel-image"
							alt="First slide"
						/>
					</div>

					<div className="carousel-item">
						<img
							src="https://inclusionafrika.imgix.net/2.jpg"
							className="d-block w-100 h-100 carousel-image"
							alt="Second slide"
						/>
					</div>

					<div className="carousel-item">
						<img
							src="https://inclusionafrika.imgix.net/3.jpg"
							className="d-block w-100 h-100 carousel-image"
							alt="Third slide"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCarousel;
