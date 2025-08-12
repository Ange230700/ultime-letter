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
    recipientCompany: "Ipsos Synthesio",
    recipientAddress: "Paris, France",
  },
  subject: "Candidature – Alternance Front End Engineer",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Intégrer Ipsos Synthesio, avec sa mission d’exploiter des ensembles de données massifs pour fournir des insights clairs et actionnables, représente pour moi l’opportunité idéale d’allier mes compétences en développement front-end et mon intérêt pour l’analyse de données à grande échelle. Votre engagement pour l’innovation, l’UX et la qualité logicielle correspond parfaitement à mes aspirations professionnelles.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche une alternance de 12 à 24 mois à partir de septembre 2025. Je maîtrise JavaScript/TypeScript, HTML5 et CSS3, et j’ai déjà conçu des interfaces dynamiques avec React, en intégrant des APIs REST et en développant des composants réutilisables dans une architecture modulaire. Mes projets m’ont permis de travailler sur des visualisations de données, d’optimiser le rendu pour améliorer l’expérience utilisateur et de mettre en place des pratiques de qualité comme les tests unitaires (Vitest) et end-to-end. Rigoureux et curieux, j’apprécie de travailler en équipe dans des environnements agiles. Je suis particulièrement motivé par l’idée de contribuer à la création de dashboards et visualisations intuitives permettant de simplifier la complexité du Big Data pour vos utilisateurs, tout en respectant vos standards élevés de qualité et de performance.
    `.trim(),
    conclusion: `
Rejoindre Ipsos Synthesio me permettrait de mettre mes compétences techniques au service de projets ambitieux, tout en développant mon expertise dans le traitement et la présentation de données massives. Je serais heureux de contribuer à vos solutions innovantes et de participer à votre dynamique collaborative. Vous trouverez mon CV en pièce jointe et mes réalisations sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700). Je me tiens à votre disposition pour un entretien afin d’échanger sur ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
