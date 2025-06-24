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
    date: "24 juin 2025",
    recipientName: "Service des Ressources Humaines",
    recipientCompany: "Rakoono",
    recipientAddress: "75013 Paris, France",
  },
  subject: "Candidature – Alternant.e Dev Web Fullstack",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant à ADA Tech School, je suis vivement intéressé par l’opportunité d’intégrer Rakoono en tant qu'alternant Développeur Web Fullstack dès l'été 2025. Votre mission d'offrir une expérience d'apprentissage personnalisée grâce à la GenAI correspond parfaitement à mes aspirations professionnelles et à ma passion pour résoudre des problématiques réelles et innovantes.
    `.trim(),
    mainContent: `
Au cours de mes formations à ADA Tech School et Wild Code School, j'ai acquis une solide expertise technique en React, Next.js, TypeScript, Node.js et PostgreSQL. J’ai notamment développé Streamia, une plateforme de streaming conçue en Next.js avec gestion complète de l'authentification et des médias, ainsi qu'une application de visualisation de données exploitant React, TypeScript et Chart.js. Ces expériences m'ont permis de maîtriser les méthodologies Agile, le Git Flow, et les pratiques de CI/CD avec Vercel et Render, tout en renforçant mon goût prononcé pour le travail en équipe.

Ma curiosité et mon autonomie me poussent à constamment explorer les dernières technologies, notamment en matière de GenAI. J'apprécie particulièrement l'intégration de modèles d’intelligence artificielle dans les applications pour enrichir l’expérience utilisateur, un domaine que je souhaite approfondir au sein de votre équipe dynamique.
    `.trim(),
    conclusion: `
Rejoindre Rakoono serait pour moi une opportunité exceptionnelle de contribuer activement à un projet à fort impact éducatif tout en poursuivant mon parcours vers la certification RNCP de niveau 6 de Concepteur-Développeur d’Applications Web & Mobile. Je suis à votre disposition pour toute discussion ou entretien afin d’approfondir ma motivation et mes compétences.

Je vous remercie sincèrement pour l’attention que vous porterez à ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
