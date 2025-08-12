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
    recipientName: "À l’attention de l’équipe Recrutement",
    recipientCompany: "Naboo",
    recipientAddress: "7 Rue de Paradis, 75010 Paris, France",
  },
  subject: "Candidature – Stage Fullstack Typescript",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Rejoindre Naboo et contribuer à réinventer l’organisation des événements d’entreprise, dans un environnement où la réactivité, la qualité logicielle et l’impact produit sont au cœur des priorités, correspond parfaitement à mes aspirations. Votre approche alliant automatisation intelligente, réduction des tâches répétitives et expérience utilisateur soignée m’inspire particulièrement.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage à partir de septembre 2025. Je maîtrise JavaScript/TypeScript et j’ai travaillé sur des projets complets utilisant Node.js et NestJS côté backend, ainsi que React et Next.js côté frontend. Mon expérience inclut la création et l’intégration d’APIs GraphQL, la gestion de bases de données MongoDB, et le développement d’interfaces performantes et maintenables.

Au fil de mes projets, j’ai appris à naviguer dans des environnements dynamiques, à prendre en charge un sujet de bout en bout, et à contribuer à l’amélioration continue du code et des pratiques techniques. Curieux et autonome, j’apprécie particulièrement le partage de connaissances et la collaboration inter-équipes pour avancer plus vite et mieux.
    `.trim(),
    conclusion: `
Intégrer Naboo serait pour moi l’occasion de mettre mes compétences fullstack au service d’une plateforme ambitieuse, tout en évoluant dans un cadre exigeant et bienveillant qui valorise la clarté, l’autonomie et l’impact. Je serais ravi d’échanger avec vous pour discuter de ma candidature et de la manière dont je pourrais contribuer à vos projets en cours et à venir.

Vous trouverez mon CV en pièce jointe et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
