import { asset } from "@/lib/asset";
export const footerlabels: { label: string; herf: string }[] = [
  { label: "Privacy", herf: "#faq" },
  { label: "Governance", herf: "#governance" },
  { label: "Contact", herf: "#contact" },
  { label: "Company", herf: "#about" },
];

export const pricedata: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "AI Systems",
    short: "Core",
    icon: asset("/images/portfolio/portfolio-icon-1.svg"),
    background: "bg-chart-5/20",
    price: "Intelligent",
    mark: "Product stack",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Automation",
    short: "Ops",
    icon: asset("/images/portfolio/portfolio-icon-2.svg"),
    background: "bg-secondary/15",
    price: "Reliable",
    mark: "Workflow layer",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Software",
    short: "Apps",
    icon: asset("/images/icons/icon-Services.svg"),
    background: "bg-chart-5/20",
    price: "Practical",
    mark: "Business tools",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Analytics",
    short: "Insight",
    icon: asset("/images/portfolio/portfolio-icon-3.svg"),
    background: "bg-secondary/15",
    price: "Actionable",
    mark: "Decision support",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Compliance",
    short: "Trust",
    icon: asset("/images/perks/peak-icon-1.svg"),
    background: "bg-secondary/15",
    price: "Colorado",
    mark: "US entity",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Partnerships",
    short: "Growth",
    icon: asset("/images/perks/peak-icon-2.svg"),
    background: "bg-secondary/15",
    price: "Global",
    mark: "Ready to scale",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: asset("/images/portfolio/portfolio-icon-1.svg"),
    title: "AI product engineering",
  },
  {
    image: asset("/images/portfolio/portfolio-icon-2.svg"),
    title: "Secure digital infrastructure",
  },
  {
    image: asset("/images/portfolio/portfolio-icon-3.svg"),
    title: "Enterprise-ready delivery",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "AI-first product mindset" },
  { title: "Colorado, USA company" },
  { title: "Clear corporate governance" },
  { title: "Secure-by-design approach" },
  { title: "Modern delivery process" },
  { title: "Partner-ready engagement" },
  { title: "Transparent communication" },
  { title: "Long-term product focus" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: asset("/images/perks/peak-icon-1.svg"),
    title: "Dedicated Support",
    text: "Work with a focused team that responds quickly and clearly.",
    space: "lg:mt-8",
  },
  {
    icon: asset("/images/perks/peak-icon-2.svg"),
    title: "Partner Network",
    text: "Collaborate across technology, product, and go-to-market teams.",
    space: "lg:mt-14",
  },
  {
    icon: asset("/images/perks/peak-icon-3.svg"),
    title: "Knowledge Hub",
    text: "Learn how we design, ship, and operate intelligent systems.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: asset("/images/timeline/icon-planning.svg"),
    title: "Discover",
    text: "Define goals, constraints, and success metrics together",
    position: "md:top-0 md:left-0",
  },
  {
    icon: asset("/images/timeline/icon-refinement.svg"),
    title: "Design",
    text: "Shape the product architecture and experience",
    position: "md:top-0 md:right-0",
  },
  {
    icon: asset("/images/timeline/icon-prototype.svg"),
    title: "Build",
    text: "Ship working systems with measurable outcomes",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: asset("/images/timeline/icon-support.svg"),
    title: "Scale",
    text: "Operate, improve, and grow with ongoing support",
    position: "md:bottom-0 md:right-0",
  },
];

