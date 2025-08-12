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
    date: "12 août 2025",
    recipientName: "À l’attention de l’équipe Talent & Technique",
    recipientCompany: "Smart Experience Factory – Saegus",
    recipientAddress: "Paris, France",
  },
  subject:
    "Candidature – Alternance – Consultant·e en Développement Web FullStack (React/Node.js)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
La Smart Experience Factory de Saegus m’a immédiatement séduit par son approche : concevoir et développer des expériences digitales innovantes, du MVP au produit en production, tout en plaçant l’UX, l’agilité et l’expérimentation au cœur des projets. Contribuer à des applications et intranets sur-mesure, en lien avec des problématiques concrètes et des enjeux IA, correspond à mes aspirations techniques et à ma volonté de participer à des projets à fort impact.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche une alternance de 12 à 24 mois à partir de septembre 2025. Je maîtrise JavaScript/TypeScript, React et Node.js, avec une expérience concrète en développement d’interfaces réactives et performantes, d’APIs back-end robustes, et d’intégration de pipelines CI/CD pour assurer la qualité en production. Mes projets m’ont permis de travailler en mode agile, de participer aux choix techniques (stack, architecture, bonnes pratiques), de mettre en place des tests automatisés. Curieux et autonome, je n’hésite pas à expérimenter de nouvelles approches, à proposer des solutions et à partager mes découvertes avec l’équipe. Mon intérêt pour l’IA et le DevOps m’amène également à explorer régulièrement des outils et concepts liés à l’automatisation et à l’optimisation des workflows.
    `.trim(),
    conclusion: `
Rejoindre la Smart Experience Factory serait pour moi l’opportunité d’évoluer dans un environnement stimulant, d’apporter mes compétences fullstack à vos projets clients et internes, et de contribuer à une culture technique dynamique et collaborative. Je serais ravi d’échanger avec vous pour vous présenter plus en détail ma motivation et mes réalisations. Vous trouverez mon CV en pièce jointe et mes projets sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
