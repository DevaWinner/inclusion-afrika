import Image from "next/image";

export default function PageHero({
	eyebrow,
	title,
	description,
	image,
	actions,
	priority = false,
}) {
	return (
		<section className="page-hero">
			<div className="page-hero__media" aria-hidden="true">
				<Image
					src={image}
					alt=""
					fill
					sizes="100vw"
					className="page-hero__image"
					priority={priority}
				/>
			</div>
			<div className="page-hero__shade" aria-hidden="true" />
			<div className="page-hero__content">
				{eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
				<h1>{title}</h1>
				<p>{description}</p>
				{actions ? <div className="hero-actions">{actions}</div> : null}
			</div>
		</section>
	);
}
