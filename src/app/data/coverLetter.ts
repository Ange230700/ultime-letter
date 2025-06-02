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
    date: "2 juin 2025",
    recipientName: "Direction des Systèmes d'Information",
    recipientCompany: "Groupe Casino",
    recipientAddress: "1 Esplanade de France, 42000 Saint-Étienne",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Actuellement en formation développeur fullstack web et mobile à ADA Tech School, je recherche une alternance de 12 ou 36 mois à partir de septembre 2025. Votre offre d'apprentissage en développement d'applications web et mobiles au sein du Groupe Casino correspond parfaitement à mes compétences et à mes aspirations professionnelles.",

    mainContent:
      "Mon parcours académique et mes expériences en développement m'ont permis d'acquérir une solide maîtrise des technologies telles que Vue.js, Node.js, TypeScript, HTML, CSS et SQL. À travers différents projets, comme la réalisation d'une application React intégrant des données via une API externe, j'ai renforcé mes compétences en gestion des données, développement frontend et architectures API REST. La perspective de contribuer à l'évolution de l'application CPRO, notamment sur les problématiques de planification des tâches et de gestion des ressources humaines, constitue pour moi une opportunité enrichissante. Ma rigueur, mon autonomie et mon esprit d'équipe seront autant d'atouts pour réussir pleinement les missions confiées dans votre environnement agile et innovant.",

    conclusion:
      "Intégrer le Groupe Casino représente pour moi l'occasion idéale de m'impliquer activement dans des projets technologiques innovants tout en développant mes compétences professionnelles. Je reste à votre entière disposition pour un entretien afin d'échanger davantage sur ma motivation et ma contribution potentielle à vos équipes.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
