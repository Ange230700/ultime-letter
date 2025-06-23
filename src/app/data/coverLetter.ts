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
    date: "23 juin 2025",
    recipientName: "Birgit Bachimont",
    recipientCompany: "MACK One France",
    recipientAddress: "Plobsheim (67), France",
  },
  subject:
    "Candidature – Alternance Developer (h|f) front-end junior chez MACK One France",
  salutation: "Madame Bachimont,",
  body: {
    introduction: `
Actuellement en formation à ADA Tech School, je souhaite vivement intégrer MACK One France en alternance en tant que développeur front-end junior dès septembre 2025. Votre engagement envers des expériences numériques immersives résonne particulièrement avec mon intérêt pour la création d’interfaces innovantes et interactives.
    `.trim(),
    mainContent: `
Mon parcours m'a permis de maîtriser les langages HTML, CSS, JavaScript ainsi que des frameworks modernes tels que React, Vue et Next.js, et j'ai également acquis de solides bases en TypeScript. Lors de projets réalisés en équipe, notamment la création d'une plateforme de data visualisation utilisant React, TailwindCSS et Chart.js, j'ai développé une aisance dans l'intégration de maquettes Figma, la consommation d'APIs REST et le travail collaboratif sous méthodologie Agile.

Rigoureux et curieux, je m'attache à structurer mon code avec clarté et efficacité. Votre mention de TailwindCSS, de frameworks modernes et votre intérêt pour l'UI design correspondent parfaitement à mes compétences et à mes ambitions professionnelles.
    `.trim(),
    conclusion: `
Rejoindre votre équipe serait une excellente opportunité pour contribuer activement à vos projets innovants tout en continuant à développer mes compétences techniques et créatives. Je serais ravi d'échanger avec vous afin de détailler davantage mon parcours et ma motivation.

Je reste à votre disposition pour toute information complémentaire ou entretien à votre convenance.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
