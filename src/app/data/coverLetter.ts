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
    date: "6 juin 2025",
    recipientName: "Responsable du recrutement",
    recipientCompany: "Zaion",
    recipientAddress: "35 Rue des Mathurins, 75008 Paris, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Actuellement apprenant à ADA Tech School en développement web et mobile, je vous adresse ma candidature pour le poste de Backend Developer en alternance au sein de Zaion. Intéressé par l’envergure de vos projets de Callbot, je suis convaincu que mes compétences techniques et mon goût pour le travail en équipe sauront contribuer efficacement à l'atteinte de vos objectifs.",
    mainContent:
      "Au cours de ma formation et de mes projets personnels, j’ai acquis une maîtrise de Node.js et de JavaScript/TypeScript, ainsi qu’une expérience concrète sur NestJS allant de la conception d’API REST à la structuration de bases de données performantes. Par exemple, pour mon projet « VoidNull », j’ai développé une API paginée en TypeScript/NestJS avec MySQL, et j’ai veillé à optimiser les performances côté back-end. J’ai également conçu « Streamia », une plateforme de streaming en Next.js et React, qui m’a permis de mettre en place une architecture front-end/back-end cohérente, d’intégrer Prisma pour la gestion de données et de déployer en continu via Vercel et Render. Ces expériences m’ont familiarisé avec les bonnes pratiques de tests unitaires et d’intégration, ainsi qu’avec les principes CI/CD – des atouts essentiels dans un environnement Agile/DevOps tel que le vôtre.",
    conclusion:
      "Intégrer Zaion représente pour moi l’opportunité de mettre en pratique mes acquis techniques au service d’une entreprise dans l’IA conversationnelle, tout en poursuivant ma progression vers la certification RNCP de niveau 6. Motivé, rigoureux et désireux de relever les défis techniques que vous proposez, je serais honoré de pouvoir échanger avec vous lors d’un entretien afin de vous exposer plus en détail la valeur que je pourrais apporter à vos équipes.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
