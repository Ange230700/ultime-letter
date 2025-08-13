// src\app\data\coverLetter.ts

export interface CoverLetterHeader {
  senderName: string;
  senderAddress: string;
  senderEmail: string;
  senderPhone: string;
  date: string;
  recipientName: string;
  recipientCompany: string;
  recipientAddress: string;
}

export interface CoverLetterBody {
  introduction: string;
  mainContent: string;
  conclusion: string;
}

export interface CoverLetterClosing {
  regards: string;
  signature: string;
}

export interface CoverLetterData {
  header: CoverLetterHeader;
  subject: string;
  salutation: string;
  body: CoverLetterBody;
  closing: CoverLetterClosing;
}

const coverLetterData: CoverLetterData = {
  header: {
    senderName: "Ange KOUAKOU",
    senderAddress: "44000 Nantes, France",
    senderEmail: "kouakouangeericstephane@gmail.com",
    senderPhone: "+33 7 59 80 23 43",
    date: "13 août 2025",
    recipientName: "À l’attention de l’équipe Recrutement",
    recipientCompany: "Groupe SII",
    recipientAddress: "Sophia Antipolis, France",
  },
  subject: "Candidature spontanée – Stage / Alternance Développeur React",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre approche centrée sur l’innovation, la collaboration et le développement des compétences m’a particulièrement motivé à vous adresser ma candidature. Je souhaite vous proposer ma candidature spontanée pour un stage ou une alternance à partir de septembre 2025, convaincu que mon profil technique et ma motivation peuvent contribuer à vos projets.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je prépare le titre RNCP 6. Je maîtrise JavaScript/TypeScript et React, ainsi que les technologies associées comme HTML5, CSS3 et Next.js, et j’ai travaillé sur des projets web allant de la conception à la mise en production. J’ai également appliqué la méthodologie Agile/Scrum dans le cadre de travaux en équipe, avec un souci constant de qualité et de respect des délais.

Au fil de mes expériences, j’ai développé un sens aigu de la collaboration et de la communication technique, ce qui me permet de m’intégrer rapidement à des équipes pluridisciplinaires. Je suis rigoureux, curieux et force de proposition, et je m’investis pleinement dans les missions qui me sont confiées, qu’il s’agisse de développement, de maintenance ou d’amélioration continue.
    `.trim(),
    conclusion: `
Intégrer le Groupe SII en stage ou en alternance serait pour moi l’opportunité d’évoluer dans un environnement technique stimulant, aux côtés d’experts passionnés, tout en participant activement à des projets innovants. Je serais heureux d’échanger avec vous afin de discuter de la manière dont je pourrais contribuer à vos missions actuelles et futures.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
