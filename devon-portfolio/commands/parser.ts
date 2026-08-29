import { skills } from "../data/skills";
import { resume } from "../data/resume";
import { contact } from "../data/contact";
import { links } from "../data/links";
import { homelab } from "../data/homelab";
import { topology } from "../data/topology";

export function executeCommand(input: string): string[] {
  const command = input.trim().toLowerCase();

  if (!command) {
    return [];
  }

  switch (command) {
    case "help":
      return showHelp();

    case "show about":
      return showAbout();

    case "show skills":
      return showSkills();

    case "show resume":
      return showResume();

    case "show experience":
      return showExperience();

    case "show education":
      return showEducation();
    
    case "show links":
      return showLinks();

    case "show homelab":
      return showHomelab();

    case "show certifications":
      return showCertifications();
   
    case "show contact":
      return showContact();

    case "show topology":
      return showTopology();

      case "clear":
      return ["__CLEAR__"];

    default:
      return [
        "",
        `% Unknown command: ${input}`,
        "Type 'help' for available commands.",
        "",
      ];
  }
}

function showHelp(): string[] {
  return [
    "",
    "Available commands:",
    "",
    "  help                  Show available commands",
    "  clear                 Clear terminal",
    "",
    "  show about            About Devon",
    "  show resume           View resume",
    "  show experience       Professional experience",
    "  show skills           Technical skills",
    "  show education        Education",
    "  show certifications   Certifications",
    "  show projects         Technical projects",
    "  show homelab          Show homelab information",
    "  show topology         Homelab topology",
    "  show contact          Contact information",
    "  show links            Show some helpful links",
    "",
  ];
}

function showAbout(): string[] {
  return [
    "",
    resume.name.toUpperCase(),
    "",
    resume.summary,
    "",
    `Location: ${resume.location}`,
    "",
  ];
}

function showSkills(): string[] {
  return [
    "",
    "NETWORKING",
    "──────────",
    skills.networking.join(" · "),
    "",
    "AUTOMATION",
    "──────────",
    skills.automation.join(" · "),
    "",
    "MONITORING",
    "──────────",
    skills.monitoring.join(" · "),
    "",
    "SECURITY",
    "────────",
    skills.security.join(" · "),
    "",
    "SYSTEMS",
    "───────",
    skills.systems.join(" · "),
    "",
  ];
}

function showResume(): string[] {
  return [
    "",
    "════════════════════════════════════════════════════════════",
    resume.name.toUpperCase(),
    resume.experience[0].title.toUpperCase(),
    "════════════════════════════════════════════════════════════",
    "",
    `LOCATION    ${resume.location}`,
    `EMAIL       ${resume.email}`,
    `PHONE       ${resume.phone}`,
    `LINKEDIN    ${resume.linkedin}`,
    "",
    "SUMMARY",
    "───────",
    resume.summary,
    "",
    "EXPERIENCE",
    "──────────",
    "",
    ...resume.experience.flatMap((job) => [
      `${job.title.toUpperCase()} — ${job.company.toUpperCase()}`,
      job.period,
      "",
      ...job.description.map((item) => `• ${item}`),
      "",
    ]),
    "EDUCATION",
    "─────────",
    "",
    ...resume.education.flatMap((education) => [
      education.institution,
      education.degree,
      education.period,
      "",
    ]),
    "CERTIFICATIONS",
    "──────────────",
    "",
    ...resume.certifications.map((certification) => `• ${certification}`),
    "",
  ];
}

function showExperience(): string[] {
  return [
    "",
    "PROFESSIONAL EXPERIENCE",
    "═══════════════════════",
    "",
    ...resume.experience.flatMap((job, index) => [
      `[${String(index + 1).padStart(2, "0")}] ${job.company.toUpperCase()}`,
      `     ${job.title}`,
      `     ${job.period}`,
      "",
      ...job.description.map((item) => `     • ${item}`),
      "",
    ]),
  ];
}

function showEducation(): string[] {
  return [
    "",
    "EDUCATION",
    "═════════",
    "",
    ...resume.education.flatMap((education) => [
      education.institution.toUpperCase(),
      `     ${education.degree}`,
      `     ${education.period}`,
      "",
    ]),
  ];
}

function showContact(): string[] {
return [
      "",
    "CONTACT INFORMATION",
    "══════════════════",
    "",
    `Email: ${contact.email}`,
    `Phone: ${contact.phone}`,
    `LinkedIn: ${contact.linkedin}`,
    `GitHub: ${contact.github}`,
    "",
];
}

function showTopology(): string[] {
  return [
    "",
    "HOMELAB NETWORK TOPOLOGY",
    "════════════════",
    "",
    ...topology.diagram.split("\n"),
    "",
  ];
}

function showLinks(): string[] {
  return [
    "",
    "LINKS",
    "═════",
    "",
    `LinkedIn: ${links.linkedin}`,
    `GitHub: ${links.github}`,
    `TryHackMe: ${links.tryhackme}`,
    `NetworkJourney: ${links.networkjourney}`,
    `SubnetLab: ${links.subnetlab}`,
    "",
  ];
}

function showHomelab(): string[] {
  return [
    "",
    "HOMELAB",
    "═══════",
    "",
    ...homelab.diagram.trim().split("\n"),
    "",
  ];
}

function showCertifications(): string[] {
  return [
    "",
    "CERTIFICATIONS",
    "══════════════",
    "",
    ...resume.certifications.map(
      (certification, index) =>
        `[${String(index + 1).padStart(2, "0")}] ${certification}`
    ),
    "",
  ];
}