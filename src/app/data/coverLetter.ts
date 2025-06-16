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
    recipientName: "Équipe Recrutement",
    recipientCompany: "Sylvencia SARL",
    recipientAddress: "Lyon / Chambéry / Ain (Full télétravail)",
  },
  subject: "Candidature alternance – Développeur Front-End TypeScript/React",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant à ADA Tech School et préparant le titre RNCP de Concepteur-Développeur d’Applications Web & Mobile, je souhaite rejoindre Sylvencia en tant qu’alternant front-end à partir de septembre 2025. Je suis passionné par la création de solutions numériques utiles et j’ai à cœur de participer à des projets qui ont du sens, comme la gestion intelligente des parcs urbains portée par Sylvencia.
    `.trim(),
    mainContent: `
Curieux, rigoureux et passionné de code depuis 2016, j’utilise au quotidien React, TypeScript et Next.js dans mes projets personnels et en équipe. J’ai notamment développé Streamia, une plateforme de streaming basée sur Next.js/React/TypeScript, intégrant une authentification par token, des appels d’APIs et une optimisation UX/UI. En équipe, j’ai travaillé sur DAF, un projet de data visualisation utilisant React, PrimeReact et Chart.js pour manipuler et afficher dynamiquement des données issues d’APIs publiques. J’ai également co-développé un quiz multi-thèmes sous Angular/TypeScript, avec une gestion d’état soignée et des pratiques agiles telles que Git Flow.
À l’aise en télétravail et en équipe, j’ai l’habitude des méthodes agiles, de la CI/CD (Vercel, Render) et de la veille tech, avec une capacité à monter rapidement en compétence sur de nouveaux outils comme Firebase ou Figma.
    `.trim(),
    conclusion: `
Votre fiche de poste correspond à mes aspirations : enrichir une application React/TypeScript et proposer des optimisations UX/UI. Mon profil allie autonomie et force de proposition. Je suis prêt à contribuer à la croissance de Sylvencia en apportant mon énergie et ma rigueur au service d’une plateforme web innovante et durable.
Je vous invite à découvrir mes réalisations sur mon portfolio et mon GitHub. Je serais ravi d’échanger avec vous pour détailler ma motivation et ma vision du métier de développeur front-end.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
