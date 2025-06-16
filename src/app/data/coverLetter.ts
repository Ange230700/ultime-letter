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
    date: "16 juin 2025",
    recipientName: "Équipe Recrutement",
    recipientCompany: "Niji",
    recipientAddress: "Rennes, France",
  },
  subject: "Candidature alternance Développeur Full Stack – F/H",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant développeur full-stack à ADA Tech School, je suis à la recherche d’une alternance de 12 ou 36 mois pour la rentrée de septembre 2025, dans le cadre de la préparation au titre RNCP de Concepteur-Développeur d’Applications Web & Mobile. Passionné par la transformation digitale et animé par l’envie de participer à des projets innovants, je souhaite rejoindre Niji et contribuer à l’excellence de votre équipe sur le poste de Développeur Full Stack.
    `.trim(),
    mainContent: `
Mon parcours m’a permis d’explorer l’ensemble de la chaîne de valeur du développement logiciel, du design à la réalisation technique, en passant par la gestion de projet en mode agile et la veille technologique. Lors de ma formation à ADA Tech School, j’ai développé une plateforme de streaming, bâtie avec Next.js, TypeScript et MySQL, pour laquelle j’ai mis en place une intégration et une livraison continues via Vercel.
En complément, j’ai également pris en main des outils de planification tels que GitHub Projects et Jira, ainsi que le maquettage avec Figma. Je maîtrise les technologies demandées dans votre annonce : HTML, CSS, JavaScript, TypeScript, React, NodeJS/NextJS, bases de données relationnelles, et je me forme continuellement à l’intégration et la livraison continue. Rigoureux, organisé et autonome, j’apprécie particulièrement le travail en équipe et les défis techniques stimulants, dans une démarche de partage et de montée en compétence collective.
    `.trim(),
    conclusion: `
Rejoindre Niji serait pour moi l’opportunité de contribuer à la réalisation de dispositifs digitaux ambitieux, de progresser au contact d’experts passionnés, et de m’engager dans une aventure humaine fidèle à vos valeurs : Audace, Bienveillance, Performance et Talent. Je serais ravi d’échanger lors d’un entretien pour discuter de ma motivation et de la valeur ajoutée que je pourrais apporter à votre équipe.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
