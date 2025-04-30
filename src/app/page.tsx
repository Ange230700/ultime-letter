// src\app\page.tsx

import CoverLetter from "@/app/components/CoverLetter";
import coverLetterData from "@/app/data/coverLetter";

export default function Home() {
  return <CoverLetter data={coverLetterData} />;
}
