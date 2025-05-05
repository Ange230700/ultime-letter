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
    date: "5 Mai 2025",
    recipientName: "Lucien DERHY, CTO",
    recipientCompany: "Digitevent",
    recipientAddress: "36 Rue Vivienne, 75002 Paris, France",
  },
  salutation: "Monsieur DERHY,",
  body: {
    introduction:
      "Actuellement apprenant à l’ADA Tech School et fort d’une formation initiale en bootcamp web à la Wild Code School, je suis à la recherche d’une alternance de 12 à 36 mois. Votre offre pour un poste de Développeur Fullstack en alternance au sein de Digitevent correspond à mes aspirations professionnelles et à mes compétences techniques.",
    mainContent:
      "Durant mes études et mes projets, j’ai cultivé une solide maîtrise de JavaScript et TypeScript, enrichie par la pratique de frameworks variés tels que Next.js, React et Angular. J’ai également exploré Spring Boot pour le backend et Chart.js pour la visualisation de données. Mon expérience avec ces technologies me permettra de m’adapter rapidement à Vue.js, qui semble être la technologie utilisée pour développer votre plateforme.\n\nRigoureux, je porte une attention particulière à la qualité du code et aux bonnes pratiques (architecture DDD, principes SOLID). Je ne cesse de renforcer mes compétences – qu’il s’agisse d’optimiser la performance, de sécuriser les endpoints ou d’améliorer l’expérience utilisateur. Ma pratique du travail en équipe et mon expérience de la méthode Agile/SCRUM me permettront de collaborer efficacement avec vos équipes tech et produit, tout en contribuant activement aux sessions de team building et aux projets transverses.\n\nRejoindre Digitevent représente pour moi une opportunité unique de mettre en pratique mes acquis dans un environnement startup dynamique. Je serais honoré de participer au développement de votre solution et de contribuer à la maintenance de votre codebase.",
    conclusion:
      "Je me tiens à votre disposition pour un entretien afin de vous exposer plus en détail mes motivations et la valeur que je pourrais apporter à votre équipe. Disponible à partir de juin 2025, je suis prêt à m’investir pleinement dans cette alternance.\n\nDans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
