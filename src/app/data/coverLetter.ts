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
    date: "18 juin 2025",
    recipientName: "Équipe recrutement",
    recipientCompany: "Beeldi",
    recipientAddress: "48 Rue René Clair, 75018 Paris, France",
  },
  subject:
    "Candidature alternance – Développeur(se) FullStack Typescript React/Node (F/H/X) - ALTERNANCE",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant à ADA Tech School où je prépare le titre RNCP de Concepteur-Développeur d’Applications Web & Mobile, je suis à la recherche d’une alternance de 12 à 36 mois à compter de septembre 2025. Votre annonce pour le poste de Développeur Fullstack React/Node.js chez Beeldi a immédiatement retenu mon attention par son approche technique moderne et son environnement dynamique, parfaitement alignés avec mon projet professionnel.
    `.trim(),
    mainContent: `
J’utilise quotidiennement TypeScript, React et Node.js, technologies que j’ai mobilisées sur des projets significatifs comme Streamia, une plateforme de streaming développée avec Next.js, et DAF, une application de visualisation de données via l’API du FBI. Ces expériences m'ont permis d'acquérir une aisance tant sur le frontend que sur le backend, ainsi qu’une maîtrise approfondie des principes Agile, notamment grâce à un travail régulier en équipe.
Rigoureux, autonome et intéressé par les bonnes pratiques du software craftsmanship (SOLID, clean architecture), je suis convaincu que mon profil correspond idéalement à vos attentes. Rejoindre Beeldi serait pour moi l’occasion de contribuer activement à vos développements innovants tout en poursuivant ma progression vers un rôle de concepteur-développeur polyvalent, avec pour ambition de devenir à terme architecte logiciel.
    `.trim(),
    conclusion: `
Je vous invite à découvrir mes réalisations sur mon portfolio et mon GitHub. Je reste à votre entière disposition pour un échange qui me permettrait de détailler davantage ma motivation et la manière dont je pourrais apporter une réelle valeur ajoutée à votre équipe.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
