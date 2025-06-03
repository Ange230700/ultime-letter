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
    date: "3 juin 2025",
    recipientName: "Responsable Recrutement",
    recipientCompany: "Groupe RAJA",
    recipientAddress: "16 Rue de l'Étang, 93290 Tremblay-en-France, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Le but de ma candidature pour le poste d’Alternant·e Développeur·euse Web Front‑End au sein de la Digital Factory de RAJA est de comprendre davantage les enjeux et concepts du e-commerce. Aussi, le fait que la stack technologique tourne autour de JavaScript/TypeScript correspond parfaitement à l'écosystème dans lequel je veux continuer à m'améliorer. Cette alternance serait une opportunité de mettre en application ma maîtrise de TypeScript et des frameworks JavaScript modernes.",

    mainContent:
      "Je suis actuellement étudiant à l'ADA Tech School, où j'ai développé des interfaces performantes et accessibles dans le cadre de projets tels que Streamia (une plateforme de streaming utilisant Next.js), DAF (visualisation des données des enquêtes du FBI dans React) et Void Trivia (une application de quiz multithèmes dans Angular). Ces expériences m'ont permis d'intégrer des pages d'accueil et des composants réutilisables à l'aide de HTML5, SASS et TailwindCSS, ainsi que d'utiliser et de documenter des API REST tout en appliquant des tests unitaires avec Jest. Je me concentre également sur les performances web et le référencement naturel (SEO) en utilisant le chargement différé et l'optimisation des images, et j'automatise les processus de déploiement à l'aide de Git, GitHub Actions et Docker. Ma fascination pour l'intelligence artificielle m'aide à créer rapidement des maquettes et à concevoir des scénarios de test.",

    conclusion:
      "Intégrer RAJA serait l’occasion de contribuer à la réussite de vos temps forts commerciaux (Black Friday, Cyber Monday, Pâques…) tout en participant à la transition environnementale portée par le Groupe. Cette alternance constitue également une étape essentielle vers l’obtention de ma certification RNCP niveau 7 en architecture logicielle. Je serais ravi d’échanger avec vous pour détailler la valeur que je peux apporter à la Digital Factory.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
