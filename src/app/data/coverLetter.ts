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
    date: "22 juillet 2025",
    recipientName: "Service des Ressources Humaines",
    recipientCompany: "Sopra Steria",
    recipientAddress: "Rue Serpentine, 92400 Courbevoie, France",
  },
  subject: "Candidature – Alternance Développeur Typescript",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement en formation développeur fullstack à ADA Tech School, je recherche une alternance de 12 à 36 mois dès septembre 2025. Je suis très enthousiaste à l'idée d'intégrer Sopra Steria pour contribuer activement au développement de la plateforme innovante KaNest-XGen.
    `.trim(),

    mainContent: `
Grâce à mon cursus chez ADA Tech School et mon expérience antérieure à la Wild Code School, j'ai acquis des compétences approfondies en JavaScript, TypeScript, Node.js, et React, que j'ai appliquées dans mes projets personnels tels que Streamia (Next.js, Prisma, MySQL) et Abyss (Angular, NestJS). Ces réalisations m'ont permis de maîtriser des environnements technologiques variés et d'adopter pleinement les méthodes agiles, les tests unitaires et d'intégration, ainsi que la pratique du Git Flow et du déploiement via Docker et CI/CD.

Rigoureux, autonome et intéressé par les nouvelles technologies, j'accorde une grande importance à la qualité du code, à la sécurité des applications et à l'amélioration continue. Mon adaptabilité et mon goût pour le travail en équipe me permettront de m'intégrer rapidement au sein de votre équipe agile et d'apporter une valeur ajoutée à vos projets.
    `.trim(),

    conclusion: `
Rejoindre Sopra Steria représente pour moi l'opportunité idéale d'approfondir mes connaissances techniques dans un contexte professionnel stimulant et innovant, tout en poursuivant ma formation vers le titre RNCP Concepteur-Développeur d’Applications Web & Mobile. Je reste à votre disposition pour échanger plus amplement lors d'un entretien.
    `.trim(),
  },
  closing: {
    regards: "Cordialement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
