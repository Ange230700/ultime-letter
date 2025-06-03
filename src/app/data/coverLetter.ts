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
    recipientCompany: "Everysens",
    recipientAddress: "Lille, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "C’est avec un enthousiasme certain que je vous adresse ma candidature pour le poste d’Alternant Développeur Front Angular au sein d’Everysens, pour une durée de 24 mois. Passionné par l’UI/UX et convaincu par votre projet de création d’un Design System « Lego », je souhaite mettre mon expertise TypeScript / Angular au service de votre équipe Engineering.",

    mainContent:
      "Actuellement apprenant à ADA Tech School, j’ai développé une bonne expérience avec l’écosystème Angular et des bonnes pratiques de qualité logicielle (tests unitaires, documentation, CI/CD GitLab). Mes projets – plateforme de streaming *Streamia*, data-visualisation des enquêtes du FBI, quiz *Void Trivia* – m’ont amené à concevoir des interfaces performantes, à intégrer des API REST et à collaborer en Scrum. Ayant une expérience avec Figma, je saurai coopérer efficacement avec Lara (Product Designer) et Mathieu (Tech Lead Front) pour bâtir un Design System cohérent : définition de tokens, création de composants modulaires et rédaction de la documentation. Mon goût pour la veille technologique, notamment autour de l’IA générative, me permet d’accélérer la génération de tests et de maquettes, un atout pour tenir les délais tout en maintenant un haut niveau d’exigence.",

    conclusion:
      "Rejoindre Everysens représente pour moi l’opportunité de contribuer à la digitalisation et à la décarbonation de la supply-chain ferroviaire européenne, tout en poursuivant mon objectif de certification RNCP niveau 7 en architecture logicielle. Je serais ravi d’échanger avec vous afin de détailler ma motivation et la valeur que je peux apporter à votre projet Design System.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
