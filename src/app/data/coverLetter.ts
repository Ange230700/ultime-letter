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
    recipientName: "À l’attention d’Olivier, Lead dev – Équipe Console",
    recipientCompany: "Evermaps",
    recipientAddress: "15 Rue Pasquier, 75008 Paris, France",
  },
  subject: "Candidature – Alternance Développeur front-end Angular (1 an)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Evermaps, par son expertise dans l’optimisation de la visibilité digitale des réseaux de points de vente, m'intrigue particulièrement par l’impact concret de ses solutions et par son approche technologique exigeante. Votre projet au sein de l’équipe Console, visant à enrichir et optimiser l’interface web utilisée par vos clients, correspond parfaitement à mes compétences et à mon envie de contribuer à des développements front-end de qualité, performants et centrés sur l’utilisateur.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je prépare un titre RNCP de niveau 6 et recherche un contrat d’un an à partir de septembre 2025. Je maîtrise JavaScript, HTML5 et CSS3, et j’ai de solides compétences en TypeScript et Angular, acquises à travers différents projets : intégration responsive de maquettes, développement de composants réutilisables, optimisation des performances et gestion de l’état des applications.

Mes réalisations incluent la plateforme Abyss (Angular, PrimeNG, NestJS), où j’ai travaillé sur la gestion des données via API et la documentation technique. Je suis à l’aise avec Git, le travail collaboratif en équipe agile, et j’accorde une grande importance à la qualité du code, aux revues, et à la maintenabilité des projets. Curieux et autonome, je sais m’adapter rapidement et j’apprécie particulièrement les échanges techniques qui permettent à la fois de progresser et d’améliorer collectivement le produit.
    `.trim(),
    conclusion: `
Rejoindre Evermaps dans le cadre de cette alternance serait pour moi l’occasion de mettre à profit mes compétences Angular et front-end tout en apprenant auprès de professionnels expérimentés. Je suis motivé à contribuer activement aux intégrations, aux nouvelles fonctionnalités et aux optimisations que vous envisagez pour votre console. Je serais ravi d’échanger avec vous afin de vous présenter mes réalisations et de discuter de la manière dont je pourrais participer à vos projets.

Vous trouverez mon CV en pièce jointe et mes projets sont visibles sur mon portfolio (https://ultime-portfolio.vercel.app/) ainsi que sur mon GitHub (https://github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
