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
    date: "11 août 2025",
    recipientName: "Responsable du recrutement",
    recipientCompany: "Edumapper",
    recipientAddress: "Avenue des Champs-Élysées, 75008 Paris, France",
  },
  subject: "Candidature – Stage développeur fullstack",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Edumapper allie mission sociale forte et ambition technologique, avec l’objectif d’accompagner chaque étudiant dans ses choix d’orientation. Votre engagement en faveur d’un outil accessible, scientifique et à fort impact social correspond pleinement à mes valeurs. La perspective de contribuer à l’évolution de votre plateforme en rejoignant une petite équipe passionnée, tout en développant des fonctionnalités front et back sur une stack moderne, est une opportunité qui m’enthousiasme particulièrement.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage à partir de Septembre/Octobre 2025. Mes expériences m’ont permis de maîtriser JavaScript, TypeScript, Node.js, et d’explorer différents frameworks front tels que Vue, Nuxt, React et Angular. J’ai conçu et intégré des interfaces responsives avec TailwindCSS, manipulé des données via des APIs REST, et travaillé sur des projets fullstack allant de plateformes SaaS à des applications mobiles.

Je pratique le développement collaboratif avec Git, et je porte une attention particulière à la qualité du code, à la performance et à la maintenabilité. Mes projets personnels comme professionnels m’ont appris à naviguer entre le front et le back, à intégrer des maquettes issues de Figma, et à optimiser l’expérience utilisateur.
    `.trim(),
    conclusion: `
Rejoindre Edumapper serait pour moi l’occasion de mettre mes compétences techniques au service d’un produit utile, tout en continuant à apprendre aux côtés d’une équipe exigeante et inspirante. Je serais ravi d’échanger avec vous afin de discuter de la manière dont je pourrais contribuer à l’innovation et à l’amélioration continue de votre plateforme. Vous trouverez mon CV en pièce jointe et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
