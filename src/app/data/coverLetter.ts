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
    date: "11 août 2025",
    recipientName: "À l’attention de l’équipe Technique",
    recipientCompany: "Exceenis",
    recipientAddress: "Rue de Provence, 13090 Aix-en-Provence, France",
  },
  subject: "Candidature – Stage Ingénieur Front End",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Exceenis m’a particulièrement séduit par son engagement en faveur de l’innovation technologique, de la production locale et de la réparabilité, tout en intégrant des composantes avancées comme l’IA, la computer vision et le machine learning. L’opportunité de contribuer à vos projets web, au sein d’un bureau d’étude dynamique, correspond pleinement à mes aspirations techniques.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage à partir de septembre 2025. Je maîtrise HTML5, CSS3 et JavaScript, et j’ai une solide expérience avec React pour la création d’interfaces utilisateurs performantes et responsives. Côté back-end, je travaille régulièrement avec Node.js et TypeScript pour développer des API RESTful, gérer la logique serveur et interagir avec des bases de données relationnelles. Mes projets (plateformes SaaS, applications mobiles, back-offices) m’ont amené à collaborer avec des designers, à intégrer des maquettes Figma, et à optimiser le rendu pour offrir une expérience fluide. Je pratique le versioning avec Git, écris des tests unitaires pour fiabiliser le code, et suis habitué aux méthodes agiles. Mon profil fullstack me permet de naviguer aisément entre front et back, tout en restant attentif à la qualité, à la maintenabilité et à la sécurité des applications.
    `.trim(),
    conclusion: `
Rejoindre Exceenis serait pour moi l’occasion de mettre mes compétences au service de produits innovants et responsables, tout en évoluant au contact d’une équipe expérimentée et multidisciplinaire. Je suis motivé à contribuer activement au développement et à l’optimisation de vos applications web, et à participer à vos projets ambitieux mêlant électronique, robotique et logiciel. Vous trouverez mon CV en pièce jointe, et mes réalisations sont consultables sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700). Je serais ravi d’échanger avec vous afin de discuter plus en détail de ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
