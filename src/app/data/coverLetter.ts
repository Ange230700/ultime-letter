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
    date: "16 juin 2025",
    recipientName: "Équipe Recrutement",
    recipientCompany: "FETIS group – Secom Engineering",
    recipientAddress: "Nantes, France",
  },
  subject:
    "Candidature alternance – Apprenti Ingénieur Informatique Full Stack H/F",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant développeur full stack à ADA Tech School, je souhaite rejoindre Secom Engineering (FETIS group) en alternance à partir de septembre 2025, pour contribuer au développement de vos solutions de machines connectées tout en préparant le titre RNCP de Concepteur-Développeur d’Applications (niveau 6).
    `.trim(),
    mainContent: `
Ma formation et mes projets m’ont permis de maîtriser les technologies front-end (Angular, TypeScript, React) et back-end (Node.js, API REST, MySQL), ainsi que les environnements Linux et les pratiques CI/CD. J’ai, par exemple, co-développé une application de visualisation de données du FBI (Vite, TypeScript, React) et conçu une plateforme de streaming sécurisée avec Next.js.

Rigoureux, curieux et appréciant le travail en équipe, je veille à la qualité du code, à la sécurité et à la robustesse des applications. Je suis motivé par l’idée de contribuer à l’innovation industrielle et à la transformation digitale de vos solutions.
    `.trim(),
    conclusion: `
Intégrer Secom Engineering serait pour moi l’opportunité de participer à des projets innovants au cœur de l’industrie connectée, tout en évoluant dans un environnement bienveillant et stimulant. Je serais ravi d’échanger lors d’un entretien pour discuter plus en détail de ma motivation et de l’apport que je pourrais offrir à vos équipes. Je vous remercie pour votre attention et me tiens à votre disposition pour toute information complémentaire.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
