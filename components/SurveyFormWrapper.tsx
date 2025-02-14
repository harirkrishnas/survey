"use client"; // This marks the file as a Client Component

import dynamic from 'next/dynamic';

// Dynamically import SurveyForm with SSR disabled.
const SurveyForm = dynamic(() => import("./SurveyForm"), { ssr: false });

interface SurveyFormWrapperProps {
  stakeholder: string;
}

export default function SurveyFormWrapper({ stakeholder }: SurveyFormWrapperProps) {
  return <SurveyForm stakeholder={stakeholder} />;
}

