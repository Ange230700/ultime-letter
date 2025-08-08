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
    recipientName: "À l’attention de l’équipe Tech & RH",
    recipientCompany: "Nanotera",
    recipientAddress: "92300 Levallois-Perret, France",
  },
  subject:
    "Candidature spontanée – Contrat d’apprentissage développeur fullstack TypeScript",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Nanotera, grâce à ses équipes pluridisciplinaires et sa maîtrise de projets à fort enjeu, représente pour moi l’environnement idéal pour monter en compétences et contribuer à des solutions qui ont un réel impact. La diversité de votre stack technique (TypeScript, React, Docker…), votre attention à la qualité logicielle et votre culture de la transmission m’inspirent particulièrement.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je suis à la recherche d’un contrat d’apprentissage de 12 à 36 mois à compter de septembre 2025, en vue d’obtenir la certification RNCP de niveau 6. Curieux et rigoureux, j’ai acquis de solides bases sur l’ensemble de la stack TypeScript : du front (React, Angular, Vue, Svelte) au back (Node.js, Express, NestJS), avec une attention particulière portée à la POO, aux principes SOLID et aux patterns de conception. J’ai mené divers projets : plateformes SaaS (Streamia, Abyss), applications mobiles (Shaka), microservices Docker (Nihil), et j’ai développé de nombreux composants réutilisables en mettant l’accent sur la maintenabilité et la performance. Je pratique la documentation, et la collaboration en équipe, tout en accordant une importance forte à l’autonomie, et à la transmission des bonnes pratiques.
    `.trim(),
    conclusion: `
Je crois que rejoindre Nanotera dans le cadre d’un contrat d’apprentissage serait une expérience formatrice et stimulante. Mon adaptabilité et ma capacité à m’intégrer rapidement dans une équipe pourraient être de vrais atouts pour accompagner vos projets. En retour, évoluer auprès de professionnels expérimentés et exigeants comme ceux de Nanotera serait pour moi une occasion unique de progresser, d’approfondir mes compétences. Je reste à votre disposition pour un entretien afin d’échanger sur la façon dont je pourrais contribuer à vos équipes, et vous transmets en pièce jointe mon CV.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
