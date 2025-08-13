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
    recipientCompany: "Experience Internship Canada",
    recipientAddress: "France",
  },
  subject: "Candidature – Stage Développeur Front-End – IT (H/F)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile, je souhaite mettre mes compétences en HTML, CSS, JavaScript et React au service d’un projet ambitieux et international. C’est avec un vif intérêt que je vous présente ma candidature pour un stage Front-End au sein d’Experience Internship Canada.

Votre mission d’accompagner des étudiants dans une expérience professionnelle enrichissante à l’étranger résonne pleinement avec mes ambitions : évoluer dans un environnement multiculturel, relever des défis techniques concrets et contribuer à des projets à forte visibilité.
    `.trim(),
    mainContent: `
Au fil de mes projets académiques et personnels, j’ai développé des interfaces web responsives et performantes, en veillant à l’ergonomie, à l’accessibilité et à la qualité du code. Mon expérience inclut également l’utilisation de Git pour la gestion de version, ainsi que la collaboration avec des designers pour transformer des maquettes en expériences fluides.

Rigoureux, curieux et doté d’un bon esprit d’équipe, je suis convaincu que je saurai m’intégrer rapidement dans votre dynamique et apporter une réelle valeur ajoutée à vos projets tout en m’enrichissant des pratiques professionnelles au Canada.
    `.trim(),
    conclusion: `
Je serais ravi d’échanger avec vous afin de vous exposer plus en détail ma motivation et mes compétences.

Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
