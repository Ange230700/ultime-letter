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
    recipientName: "Équipe Engineering",
    recipientCompany: "Everysens",
    recipientAddress: "[Lille / Paris]",
  },
  subject: "Candidature – Alternance Développeur Front Angular (2 ans)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre ambition d’offrir une supply chain plus résiliente fait sens pour moi, tout comme la place centrale que vous accordez à la qualité logicielle, à l’excellence, et au travail d’équipe. Le projet “Lego” de refonte graphique et d’implémentation d’un design system, dans un contexte de migration Angular et d’amélioration continue de l’expérience utilisateur, est une opportunité unique d'évoluer'.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web et Mobile à ADA Tech School, je recherche une alternance à partir de septembre 2025. J’ai mené plusieurs projets concrets avec Angular, TypeScript, NodeJS, et des outils modernes du front (PrimeNG, Figma, monorepo Nx), qui m’ont permis d’acquérir de solides bases en développement, gestion de composants réutilisables, et intégration continue (CI/CD). Je porte une attention particulière à la qualité du code, aux bonnes pratiques (tests, documentation, clean architecture), et à la cohérence du design pour offrir une expérience utilisateur optimale. Autonome, rigoureux, et passionné de design UI/UX, j’ai également contribué à la création et à la documentation de composants dans des environnements d’équipe (méthodes agiles/SCRUM).
    `.trim(),
    conclusion: `
Je souhaite m’investir chez Everysens pour contribuer activement à la création de votre nouveau design system et participer à la migration technique de vos applications. Je me reconnais dans vos valeurs de curiosité, d’exigence et de bienveillance : je suis convaincu que l’échange avec vos équipes et l’accompagnement de profils expérimentés comme les vôtres seront de véritables leviers pour monter en compétences et enrichir vos projets. Je serais heureux de mettre mon énergie, mon sens du détail pour le front-end d’une solution qui a un impact concret sur la logistique durable en Europe.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
