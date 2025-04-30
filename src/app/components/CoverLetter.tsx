// src\app\components\CoverLetter.tsx

import type { CoverLetterData } from "@/app/data/coverLetter";

export default function CoverLetter({
  data,
}: Readonly<{ data: CoverLetterData }>) {
  const { header, salutation, body, closing } = data;
  return (
    <article className="flex flex-1 flex-col justify-evenly overflow-hidden px-[100px]">
      {/* Header */}
      <header className="mb-8 grid grid-cols-2">
        <div className="space-y-1">
          <p className="font-semibold">{header.senderName}</p>
          <p>{header.senderAddress}</p>
          <p>{header.senderEmail}</p>
          <p>{header.senderPhone}</p>
        </div>
        <div className="space-y-1 text-right">
          <p>{header.date}</p>
          {/* Recipient */}
          <p className="font-semibold">{header.recipientCompany}</p>
          {header.recipientName && <p>{header.recipientName}</p>}
          <p>{header.recipientAddress}</p>
        </div>
      </header>

      {/* Salutation */}
      <section className="mb-6">
        <p>{salutation}</p>
      </section>

      {/* Body */}
      <section className="mb-6 space-y-4">
        <p>{body.introduction}</p>
        <p>{body.mainContent}</p>
        <p>{body.conclusion}</p>
      </section>

      {/* Closing */}
      <section className="space-y-2">
        <p>{closing.regards}</p>
        <p>{closing.signature}</p>
      </section>
    </article>
  );
}
