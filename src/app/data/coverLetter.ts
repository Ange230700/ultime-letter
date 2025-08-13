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
    recipientCompany: "Delos",
    recipientAddress: "Paris 7, France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur Frontend React/Next.js",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre ambition de révolutionner le monde des suites bureautiques grâce à l’IA souveraine française, et la vision portée par Delos.so, résonnent particulièrement avec mes aspirations. Je souhaite vous proposer ma candidature spontanée pour un stage ou une alternance à partir de septembre 2025, convaincu que mes compétences techniques et ma motivation peuvent contribuer à vos projets.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je prépare un diplôme de niveau Master. Je maîtrise JavaScript/TypeScript et React, ainsi que Next.js, et j’ai travaillé sur des projets mettant en œuvre l’App Router, la gestion d’état avec hooks, et la création de composants réutilisables. Je suis également à l’aise avec TailwindCSS pour concevoir des interfaces performantes et responsives, et j’accorde une attention particulière à l’optimisation et à la qualité du code.

Au fil de mes projets, j’ai collaboré étroitement avec des designers et des développeurs backend, intégré des APIs, et participé à des prises de décisions techniques en visant toujours un équilibre entre performance, maintenabilité et expérience utilisateur. Mon intérêt pour l’IA et les LLMs, ainsi que ma curiosité pour les technologies comme Supabase et PostgreSQL, m’amènent à vouloir m’investir dans un environnement innovant tel que le vôtre.
    `.trim(),
    conclusion: `
Intégrer Delos en stage ou alternance serait pour moi l’opportunité de contribuer au développement d’un produit ambitieux et innovant, tout en évoluant au contact d’une équipe passionnée et expérimentée. Je serais ravi d’échanger avec vous afin de discuter plus en détail de ma candidature et de la manière dont je pourrais participer à la construction de vos applications.

Vous trouverez mon CV en pièce jointe, et mes projets sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
