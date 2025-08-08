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
    recipientName: "Équipe Tech & RH",
    recipientCompany: "Aimigo",
    recipientAddress: "65 Rue de Reuilly, 75012 Paris, France",
  },
  subject: "Candidature – Stage Développeur React Native (6 mois)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
J’ai découvert votre lancement d’Aimigo Coach avec beaucoup d’intérêt : le mélange entre technologie mobile, personnalisation, et impact concret dans la vie des apprenants me parle particulièrement. Je suis sensible à vos valeurs de diversité, de bienveillance, et à la dynamique multiculturelle de votre équipe, que je retrouve dans vos engagements et votre communication.
    `.trim(),
    mainContent: `
Je recherche un stage de 6 mois à partir de septembre/octobre 2025. Mon parcours m’a permis d’explorer la réalisation de projets concrets avec React, React Native, TypeScript, Node.js, et Prisma. J’ai eu l’opportunité de développer une application mobile (Shaka, avec React Native et Expo) pour visualiser des spots de surf dans le monde, incluant intégration d’API. Je travaille régulièrement en équipe et j’accorde une grande importance à l’autonomie, et à la solidarité au sein du collectif. Au fil de mes projets, j’ai affiné ma maîtrise de l’écosystème JavaScript/TypeScript, des outils de CI/CD, de la documentation API, et de la gestion de projet. Mon souci de la qualité de code et mon envie de progresser m’amènent aussi à explorer les bonnes pratiques. Rigoureux, déterminé et animé par la volonté de résoudre des problèmes réels, j’ai à cœur de toujours apprendre et de m’adapter à de nouveaux contextes techniques ou humains.
    `.trim(),
    conclusion: `
Je souhaite rejoindre Aimigo pour contribuer au développement de vos applications mobiles et participer à vos projets d’innovation pédagogique. Mes compétences en React Native, mon expérience avec les API seraient des atouts pour épauler votre équipe. J’aspire à évoluer dans un environnement où l’on partage le goût de la transmission, de l’ingéniosité et du travail bien fait, en participant à la fois à la conception, au développement et à l’optimisation de produits à impact. Je suis prêt à m’investir avec curiosité et ouverture d’esprit. Je serais ravi d’échanger avec vous sur vos enjeux techniques et sur la manière dont je pourrais y contribuer.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
