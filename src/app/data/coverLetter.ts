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
    recipientCompany: "GE HealthCare",
    recipientAddress: "Buc, France",
  },
  subject:
    "Candidature – Stage/Alternance Ingénieur – Réalité étendue sur application web",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
L’opportunité de contribuer au développement d’un outil web innovant basé sur la réalité mixte pour GE HealthCare représente pour moi un projet à la fois technique et porteur de sens. La perspective de mettre la XR et les technologies 3D au service de la formation médicale, de la préparation d’interventions et du suivi des patients correspond à mes aspirations professionnelles et à ma volonté de participer à des solutions ayant un impact concret sur la santé.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage ou une alternance à partir de septembre 2025. Je maîtrise JavaScript et TypeScript, et j’ai une expérience dans le développement d’applications.

Je suis intéressé par les concepts mathématiques nécessaires à la manipulation de données 3D (algèbre linéaire, transformations, projections) et motivé par l’intégration de données issues d’imageries médicales (CT, IRM) pour créer des visualisations précises et utiles. Mon intérêt pour la XR est renforcé par mon attrait pour le développement d’expériences immersives.
    `.trim(),
    conclusion: `
Rejoindre GE HealthCare serait pour moi l’occasion de contribuer à un projet innovant au croisement de la santé et de la technologie, tout en apprenant aux côtés d’experts reconnus. Je serais ravi de mettre mon énergie et mes compétences au service de votre mission et d’échanger avec vous pour discuter plus en détail de ma candidature.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont consultables sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
