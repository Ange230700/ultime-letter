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
    date: "8 août 2025",
    recipientName: "À l’attention de l’équipe Technique",
    recipientCompany: "Campsider",
    recipientAddress: "115 Boulevard de Sébastopol, 75002 Paris, France",
  },
  subject: "Candidature – Stage Développeur Web",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
En tant que passionné de développement web et sensible à l’impact positif des solutions #TechForGood, j’ai été immédiatement séduit par la mission de Campsider : rendre l’aventure accessible tout en favorisant une consommation sportive plus responsable. Contribuer au développement et à l’évolution de votre outil d’onboarding vendeur, au sein d’une start-up en pleine croissance soutenue par des acteurs majeurs du sport, représente pour moi une opportunité idéale pour mettre mes compétences techniques au service d’un produit utile et engagé.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage de fin d’études à partir de Septembre/Octobre 2025. J’ai acquis une solide maîtrise des fondamentaux du web (HTML5, CSS3, JavaScript) et travaillé sur des projets intégrant JSON, CSV et SQL pour manipuler et présenter des données. J’ai également une expérience avec Node.js, Express et l’automatisation de tâches, ainsi que dans la conception et la mise à jour de documentations techniques. Mes projets m’ont permis de développer des interfaces claires et responsives, de corriger des bugs en production, et de travailler en équipe sur des outils collaboratifs (Git, GitHub) en méthode agile.
    `.trim(),
    conclusion: `
Rejoindre Campsider serait pour moi l’occasion de contribuer concrètement à vos projets techniques, tout en évoluant aux côtés de développeurs expérimentés et passionnés. Je suis motivé à participer à la maintenance, à l’automatisation et à la création d’outils internes qui amélioreront l’expérience de vos vendeurs et de vos équipes. Je serais ravi d’échanger avec vous pour discuter plus en détail de ma candidature. Vous trouverez mon CV en pièce jointe, et mes réalisations sont visibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
