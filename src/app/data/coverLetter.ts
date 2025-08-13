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
    recipientCompany: "Chouic",
    recipientAddress: "Nantes, France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur JS Full Stack",
  salutation: "Bonjour,",
  body: {
    introduction: `
Passionné par le développement web et mobile, et actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile, je souhaite vous proposer ma candidature pour le stage de Développeur React-Native à partir de septembre 2025.
    `.trim(),
    mainContent: `
Au cours de mes projets récents, j’ai développé des applications complètes en React et React Native avec TypeScript, intégrant des API et optimisant l’expérience utilisateur. J’ai également travaillé sur des outils front-end et back-end, maîtrisant Git et les bonnes pratiques de code propre et maintenable. Mon intérêt pour la performance, le design intuitif et la typage fort me motive à créer des applications fiables et agréables à utiliser.

L’univers créatif de Chouic, vos projets à forte visibilité internationale, ainsi que votre volonté d’innover dans le divertissement mobile correspondent pleinement à mes aspirations. Je suis convaincu que mon sens du détail, ma curiosité technique et mon esprit d’équipe me permettront de contribuer efficacement à vos applications et à votre back-office.
    `.trim(),
    conclusion: `
Je serais ravi d’échanger avec vous afin de discuter de la manière dont je pourrais apporter ma contribution à vos projets. Vous trouverez mon CV en pièce jointe, et mes réalisations sont visibles sur mon portfolio (ultime-portfolio.vercel.app) et mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
