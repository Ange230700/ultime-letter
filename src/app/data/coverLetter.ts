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
    date: "17 juin 2025",
    recipientName: "Philippe Eid, CEO @Eid Lab",
    recipientCompany: "Eid Lab",
    recipientAddress: "Lyon, France (Full remote)",
  },
  subject:
    "Candidature alternance – Développeur Web Fullstack Next.js / TypeScript",
  salutation: "Monsieur Eid,",
  body: {
    introduction: `
Actuellement apprenant à ADA Tech School et préparant le titre RNCP de Concepteur-Développeur d’Applications Web & Mobile, je suis à la recherche d’une alternance de 12 à 36 mois, en full remote, à partir de septembre 2025. Votre annonce a tout de suite retenu mon attention : elle correspond parfaitement à mon projet professionnel et à mon envie de rejoindre une équipe jeune et passionnée, travaillant sur des projets innovants avec une stack moderne.
    `.trim(),
    mainContent: `
J’utilise au quotidien React, Next.js et TypeScript, que j’ai mis en pratique sur des projets comme Streamia (plateforme de streaming avec gestion d’API et authentification) et DAF (visualisation de données issues de l’API du FBI). J’ai aussi co-développé des applications en Angular et Node.js, ce qui m’a permis d’être à l’aise sur le front et le back. Habitué au travail d’équipe en mode agile et en full remote, je suis curieux, rigoureux et toujours prêt à apprendre. Rejoindre Eid Lab serait pour moi l’occasion de progresser et de contribuer à des projets ambitieux.
    `.trim(),
    conclusion: `
Votre culture d’équipe et votre ouverture à la montée en compétence me correspondent totalement. J’aimerais mettre mon énergie, ma motivation et mes compétences au service de vos projets, tout en poursuivant mon objectif de devenir un concepteur-développeur d’applications polyvalent, et, à terme, architecte logiciel.

Je vous invite à découvrir mes réalisations sur mon portfolio et mon github. Je serais ravi d’échanger avec vous pour discuter de ma motivation et de la manière dont je pourrais contribuer à l’aventure Eid Lab !
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
