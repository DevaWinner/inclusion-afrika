export const programDetails = [
	{
		slug: "micro-loans",
		title: "Micro Loans",
		imgSrc: "https://inclusionafrika.imgix.net/mask-market.jpg",
		cardSummary:
			"Small, strategic capital that helps young entrepreneurs launch income-generating ventures with coaching support.",
		detailSubtitle:
			"Enable promising youth to move from informal hustle to stable business ownership.",
		overview:
			"Many young adults already have practical business ideas but cannot access startup capital through formal channels. Our micro-loan pathway helps remove that first barrier while adding mentorship and accountability.",
		needStatement:
			"Without accessible startup funding, motivated youth often remain trapped in unstable work cycles that cannot support family growth.",
		donorImpact: [
			{
				title: "Unlock First Capital",
				copy: "Your gift helps finance initial inventory, tools, and market entry for a participant's first business cycle.",
			},
			{
				title: "Pair Money With Guidance",
				copy: "Funding also supports mentor check-ins and simple financial coaching so capital is used well.",
			},
			{
				title: "Build Repeatability",
				copy: "As businesses stabilize, participants gain confidence and create household-level resilience.",
			},
		],
		fundingUse: [
			{
				title: "Startup Inventory",
				copy: "Seed stock, raw materials, or first product batches to start operations quickly.",
			},
			{
				title: "Tools and Setup",
				copy: "Basic equipment and operational setup required for small enterprise continuity.",
			},
			{
				title: "Follow-Up Support",
				copy: "Mentorship touchpoints and performance follow-up to reduce early failure risk.",
			},
		],
		deliverySteps: [
			"Participant screening with local partner validation",
			"Loan readiness training and simple planning support",
			"Capital disbursement with milestone tracking",
			"Mentor-led review and reinvestment coaching",
		],
		outcomes: [
			"Increased income consistency for youth-led households",
			"Higher survival rates for early-stage micro-enterprises",
			"Improved financial confidence and business discipline",
		],
	},
	{
		slug: "educational-growth",
		title: "Educational Growth",
		imgSrc: "https://inclusionafrika.imgix.net/students.jpg",
		cardSummary:
			"Practical learning pathways that increase employability, digital readiness, and long-term earning potential.",
		detailSubtitle:
			"Equip youth with relevant skills that create real opportunity in local and global markets.",
		overview:
			"Educational Growth focuses on practical, market-relevant learning. We prioritize skill development that translates into employment readiness, stronger entrepreneurship, and long-term mobility.",
		needStatement:
			"Talent is abundant, but many young adults lack affordable access to structured training that aligns with current economic opportunities.",
		donorImpact: [
			{
				title: "Expand Access",
				copy: "Donations help remove cost barriers so motivated learners can join growth-oriented training pathways.",
			},
			{
				title: "Improve Learning Quality",
				copy: "Gifts support facilitators, curriculum delivery, and learning resources that strengthen outcomes.",
			},
			{
				title: "Connect Skills to Opportunity",
				copy: "Funding enables mentorship and follow-up that help learners apply skills in real-world contexts.",
			},
		],
		fundingUse: [
			{
				title: "Workshops and Training",
				copy: "Hands-on sessions for entrepreneurship, digital skills, and career development.",
			},
			{
				title: "Learning Resources",
				copy: "Training materials, connectivity support, and program tools that improve participation.",
			},
			{
				title: "Coaching and Follow-Up",
				copy: "Post-training support to help participants convert learning into actionable progress.",
			},
		],
		deliverySteps: [
			"Needs assessment and participant cohort formation",
			"Structured training and practical assignments",
			"Skill application through guided projects",
			"Coaching support toward employment or enterprise use",
		],
		outcomes: [
			"Stronger employability and job readiness",
			"Greater confidence in digital and business competencies",
			"More youth transitioning from learning to earning",
		],
	},
	{
		slug: "mentorship-support",
		title: "Mentorship and Support",
		imgSrc: "https://inclusionafrika.imgix.net/happy-people.jpg",
		cardSummary:
			"Relational guidance and accountability that help youth persist, adapt, and grow through challenge.",
		detailSubtitle:
			"Pair ambition with experienced guidance so progress is sustained beyond first wins.",
		overview:
			"Mentorship and Support ensures no participant walks alone. Through trusted advisors and regular check-ins, youth receive practical guidance for decision-making, resilience, and next-step growth.",
		needStatement:
			"Many promising youth stop early not from lack of effort, but from lack of trusted guidance during difficult transitions.",
		donorImpact: [
			{
				title: "Sustain Motivation",
				copy: "Your support helps maintain mentor relationships that keep participants focused through setbacks.",
			},
			{
				title: "Strengthen Decision-Making",
				copy: "Donor funding enables practical coaching around priorities, planning, and responsible risk-taking.",
			},
			{
				title: "Increase Retention",
				copy: "Structured follow-up and emotional support improve continuity across learning and enterprise journeys.",
			},
		],
		fundingUse: [
			{
				title: "Mentor Coordination",
				copy: "Recruitment, matching, and mentor enablement for consistent participant engagement.",
			},
			{
				title: "Guidance Sessions",
				copy: "Regular one-on-one and group mentorship interactions focused on growth milestones.",
			},
			{
				title: "Progress Tracking",
				copy: "Simple systems for measuring participant progress and adjusting support as needs evolve.",
			},
		],
		deliverySteps: [
			"Mentor matching based on participant goals and context",
			"Routine coaching sessions and milestone check-ins",
			"Challenge resolution and adaptive planning",
			"Long-term encouragement toward self-reliance",
		],
		outcomes: [
			"Higher participant persistence across programs",
			"Better business and life decisions under pressure",
			"Stronger confidence and leadership in local communities",
		],
	},
];

export const programDetailsBySlug = Object.fromEntries(
	programDetails.map((program) => [program.slug, program]),
);
