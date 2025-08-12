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
    recipientCompany: "SOCOTEC",
    recipientAddress: "France",
  },
  subject: "Candidature – Stage Développeur Full Stack",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
La plateforme IoT de SOCOTEC, avec ses enjeux techniques variés allant de l’intégration de données capteurs à la visualisation 3D BIM, représente pour moi un environnement idéal pour mettre en pratique mes compétences full stack et continuer à progresser. Participer au développement d’outils innovants, tout en travaillant aux côtés d’experts dans des domaines transdisciplinaires, correspond pleinement à mes aspirations.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage de fin d’études à partir de septembre 2025. Je maîtrise JavaScript/TypeScript, React pour la création d’interfaces dynamiques et Node.js pour le développement d’APIs et la gestion de données côté serveur. J’ai également travaillé avec les bases de données relationnelles pour la structuration et l’optimisation des données, ainsi qu’avec Git et Github dans des environnements collaboratifs.

Mes projets m’ont permis de développer des dashboards interactifs, de concevoir des systèmes d’alertes et de travailler sur l’intégration d’APIs externes. Je suis rigoureux dans l’écriture et la documentation du code, et à l’aise pour collaborer en méthode agile (SCRUM), notamment sur des projets complexes nécessitant coordination et évolutivité.
    `.trim(),
    conclusion: `
Rejoindre SOCOTEC me permettrait de contribuer activement à l’architecture et au développement de votre plateforme IoT, tout en approfondissant mes compétences sur des technologies de pointe comme le SIG, le BIM et les systèmes d’alertes en temps réel. Je serais heureux d’échanger avec vous pour discuter de ma candidature et de la manière dont je pourrais participer à vos projets.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
