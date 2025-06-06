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
    recipientName: "Monsieur Stéphane Le Rouzès",
    recipientCompany: "Priveeo",
    recipientAddress: "35770 Vern-sur-Seiche, France",
  },
  salutation: "Monsieur Le Rouzès,",
  body: {
    introduction:
      "Actuellement apprenant à ADA Tech School en développement web et mobile, je vous adresse ma candidature pour le poste de Développeur Full Stack en alternance au sein de Priveeo. Séduit par votre concept de plateforme de ventes privées dédiées aux commerçants locaux, je suis convaincu que mes compétences me permettront de contribuer efficacement à la mise en œuvre de vos nouvelles fonctionnalités front-end et back-office.",
    mainContent:
      "Au cours de ma formation et de mes projets personnels, j’ai développé une solide expérience en TypeScript, Angular et NestJS. Par exemple, j’ai réalisé “VoidNull” (TypeScript, Angular, NestJS, MySQL), où j’ai conçu une API REST paginée ainsi qu’une interface utilisateur modulable, et j’ai appris à structurer la base de données pour garantir performance et maintenabilité. J’ai également développé “Streamia”, une plateforme de streaming sous Next.js et React, reposant sur Prisma et MySQL, ce qui m’a familiarisé avec la modélisation de données relationnelles et les bonnes pratiques CI/CD (Vercel, Render). Mon goût pour l’apprentissage m’a permis de prendre en main rapidement les mécanismes de Auth/JWT, et je suis à l’aise pour migrer mes compétences SQL de MySQL vers PostgreSQL, que vous utilisez pour vos bases de données. Enfin, ma pratique des méthodologies Agile (daily meetings, rétrospectives, GitFlow) et mes expériences en travail d’équipe m’ont appris à livrer des fonctionnalités robustes dans des délais serrés, tout en collaborant étroitement avec les autres développeurs.",
    conclusion:
      "Intégrer Priveeo.com représente pour moi l’opportunité de mettre en pratique mes acquis techniques dans un contexte concret d’innovation commerciale, tout en poursuivant ma progression vers la certification RNCP de niveau 6. Rigoureux et désireux d’apprendre, je me tiens prêt à m’investir pleinement dans le développement des fonctionnalités Angular/NestJS de votre plateforme. Je serais ravi d’échanger avec vous lors d’un entretien pour vous présenter plus en détail la valeur que je pourrais apporter à Priveeo.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
