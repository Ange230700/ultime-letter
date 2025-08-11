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
    recipientName: "Responsable du recrutement",
    recipientCompany: "Flatsy",
    recipientAddress: "50 Rue d'Aboukir, 75002 Paris, France",
  },
  subject: "Candidature – Stage développeur frontend React",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Flatsy m’a immédiatement séduit par son ambition de révolutionner la gestion des visites immobilières et des états des lieux, en offrant aux professionnels et aux candidats des parcours fluides et efficaces. L’opportunité de contribuer au développement et à l’unification de vos plateformes, tout en évoluant au sein d’une équipe expérimentée et passionnée, correspond parfaitement à mes aspirations techniques et humaines.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage de fin d’études de 4 à 6 mois à partir de septembre 2025. Je maîtrise TypeScript et React, ainsi que la création d’interfaces performantes et maintenables. Mes projets m’ont permis d’intégrer de travailler avec des APIs documentées via Swagger, et de mettre en place des pipelines CI/CD pour assurer qualité et résilience du code. Mon expérience inclut le développement d’applications web responsives, l’optimisation des performances, la correction de bugs en production, et la participation à des revues de code en équipe agile. Curieux et rigoureux, j’apprécie particulièrement les environnements collaboratifs où l’échange de bonnes pratiques et la montée en compétences sont encouragés. Je suis également motivé par l’idée de contribuer à un produit concret et utile, en lien direct avec les besoins métiers.
    `.trim(),
    conclusion: `
Rejoindre Flatsy serait pour moi l’occasion d’apporter mes compétences frontend à un projet à fort impact, tout en bénéficiant du coaching de votre CTO et de l’expérience de vos équipes. Je serais ravi de contribuer à l’implémentation de nouvelles fonctionnalités, à la résolution d’incidents, et à l’amélioration continue de vos interfaces. Vous trouverez mon CV en pièce jointe et mes réalisations sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700). Je me tiens à votre disposition pour échanger plus en détail sur ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
