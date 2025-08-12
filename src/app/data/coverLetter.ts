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
    date: "12 août 2025",
    recipientName: "À l’attention de l’équipe Recrutement",
    recipientCompany: "Aubay – Agence de Bordeaux",
    recipientAddress: "Bordeaux, France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur JS / Node.js",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre agence bordelaise, avec son esprit d’équipe, sa proximité avec ses collaborateurs et ses projets innovants auprès de clients prestigieux, correspond parfaitement à l’environnement professionnel dans lequel je souhaite évoluer. Je me permets de vous adresser ma candidature spontanée pour un stage ou une alternance, convaincu que mon profil et ma motivation peuvent également contribuer à vos projets.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche une expérience de 6 à 24 mois à partir de septembre 2025. Je maîtrise JavaScript/TypeScript et Node.js, avec une expérience en conception et développement d’API RESTful, intégration de bases de données MongoDB et mise en place de pipelines CI/CD. J’ai également travaillé avec Jest pour la réalisation de tests unitaires, et je suis familier avec les environnements collaboratifs Git ainsi qu’avec la méthodologie agile.

Mes projets personnels et académiques m’ont permis de développer des applications, de la définition des besoins jusqu’au déploiement, en veillant à la qualité du code, à la performance et à la documentation. Rigoureux et proactif, j’apprécie particulièrement le travail en équipe et les échanges techniques, et je suis motivé par l’idée de progresser aux côtés de développeurs expérimentés.
    `.trim(),
    conclusion: `
Intégrer Aubay Bordeaux en stage ou alternance serait pour moi l’opportunité de contribuer activement à vos projets tout en consolidant mes compétences sur des environnements exigeants et stimulants. Je serais ravi d’échanger avec vous pour discuter de la manière dont je pourrais m’impliquer dans vos missions actuelles et futures.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont visibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
