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
    date: "6 juin 2025",
    recipientName: "Service des Ressources Humaines",
    recipientCompany: "Hellio",
    recipientAddress: "92110 Clichy, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Actuellement apprenant à ADA Tech School, je vous adresse ma candidature pour le poste d’Alternant Développeur Full Stack au sein de Hellio. Intéressé par votre mission dans la transition énergétique et convaincu que le numérique joue un rôle clé pour optimiser la performance énergétique, je souhaite mettre à profit mes compétences techniques pour contribuer à vos solutions durables.",
    mainContent:
      "J'ai acquis une expertise dans le développement front-end et back-end. J'ai conçu Streamia, une plateforme de streaming utilisant TypeScript, Next.js, TailwindCSS et Prisma pour l'authentification et la gestion des médias. J'ai également réalisé VoidNull, un projet personnel avec Angular et NestJS, comprenant une API REST paginée et une base de données MySQL. De plus, j'ai contribué à DAF, une interface React et TypeScript permettant de visualiser les données du FBI via une API REST, à l'aide de PrimeReact, TailwindCSS et Chart.js. Mon expérience m'a permis de travailler React, Next.js, Node.js, NestJS, Git et les méthodologies Agile. Je suis compétent en gestion MySQL et pratiques CI/CD avec Vercel et Render. J'ai également des connaissances de base en Docker pour la conteneurisation. Mes compétences analytiques me permettent d'améliorer la maintenabilité des solutions tout en garantissant leur robustesse. Je m'épanouis dans des équipes collaboratives et multidisciplinaires, où je m'adapte rapidement aux nouveaux outils selon les besoins.",
    conclusion:
      "Rejoindre Hellio représente pour moi l’opportunité d’allier engagement environnemental et savoir-faire numérique. Motivé, rigoureux et désireux d’apprendre, je souhaite m’investir pleinement dans le développement de vos projets web et contribuer à la structuration de vos outils pour accélérer la transition énergétique. Disponible rapidement pour un entretien, je serais ravi de vous exposer plus en détail la valeur que je peux apporter à votre équipe.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
