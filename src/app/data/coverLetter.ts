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
    recipientCompany: "onRuntime Studio",
    recipientAddress: "Rouen, France",
  },
  subject: "Candidature – Stage Frontend Developer",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Rejoindre onRuntime Studio pour participer au développement de Tonight Pass représente pour moi une opportunité enthousiasmante. L’idée de contribuer à une application événementielle innovante, pensée pour améliorer l’expérience des utilisateurs et des organisateurs, correspond à la fois à mon intérêt pour les projets à impact et à mon envie de travailler dans un environnement collaboratif, créatif et stimulant.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage à partir de septembre 2025. Je maîtrise JavaScript/TypeScript et j’ai une expérience concrète avec React et Next.js pour la création d’interfaces dynamiques et performantes. Je suis également familier avec React Native pour le développement mobile.

Mes projets m’ont amené à intégrer des APIs, optimiser les performances front-end et résoudre des bugs en autonomie tout en respectant les bonnes pratiques de développement. J’accorde une attention particulière à la communication au sein de l’équipe, que ce soit pour coordonner l’intégration avec le back-end ou pour proposer des améliorations UX/UI. Mon objectif est de livrer un code maintenable, performant et agréable à faire évoluer.
    `.trim(),
    conclusion: `
Rejoindre l’équipe de Tonight Pass me permettrait de contribuer à un projet innovant tout en continuant à développer mes compétences dans un environnement bienveillant et passionné. Je serais ravi de mettre mon énergie et mes compétences au service de votre produit et d’apprendre aux côtés de votre équipe technique expérimentée.

Vous trouverez mon CV en pièce jointe et mes réalisations sont visibles sur mon portfolio (ultime-portfolio.vercel.app) et mon GitHub (github.com/Ange230700). Je reste à votre disposition pour échanger sur ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
