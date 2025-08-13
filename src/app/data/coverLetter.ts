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
    recipientCompany: "Monsieur TSHIRT",
    recipientAddress: "Paris, France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur JS Full Stack",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Attiré par votre esprit créatif, votre maîtrise du e-commerce personnalisé et votre environnement technique exigeant mais convivial, je souhaite vous proposer ma candidature pour un stage ou une alternance à partir de septembre 2025.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile, je maîtrise JavaScript/TypeScript, React.js, Node.js et les bases de données PostgreSQL/MySQL, ainsi que Git et les environnements Unix. Mes projets m’ont permis d’intervenir sur des applications web complètes, de la conception à la mise en production, avec un souci constant de performance, de maintenabilité et d’optimisation UX.
    `.trim(),
    conclusion: `
Je serais ravi de contribuer à l’évolution de vos sites e-commerce, à la création d’outils internes et à l’automatisation des processus de production, tout en profitant de l’encadrement de votre équipe technique expérimentée. Votre culture de l’innovation et votre capacité à développer vos propres solutions sur-mesure correspondent parfaitement à mes ambitions professionnelles.

Je vous remercie par avance pour l’attention portée à ma candidature et reste disponible pour échanger sur la manière dont je pourrais m’investir dans vos projets.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
