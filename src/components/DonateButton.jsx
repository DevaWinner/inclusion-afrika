const DONATION_URL =
	"https://www.zeffy.com/en-US/donation-form/10a7300e-8c6a-4af3-a738-79517cc3b372";

export default function DonateButton({ label = "Donate Now", className = "" }) {
	const classes = `btn btn--donate ${className}`.trim();

	return (
		<a
			href={DONATION_URL}
			target="_blank"
			rel="noreferrer"
			className={classes}
		>
			{label}
		</a>
	);
}
