"use client";

import SocialEntrepreneursForm from "./SocialEntrepreneursForm";
import DigitalPlatformProvidersForm from "./DigitalPlatformProvidersForm";
import PolicyMakersForm from "./PolicyMakersForm";
import DonorAgenciesForm from "./DonorAgenciesForm";
import GenericSurveyForm from "./GenericSurveyForm";

interface SurveyFormProps {
  stakeholder: string;
}

export default function SurveyForm({ stakeholder }: SurveyFormProps) {
  const normalized = stakeholder.toLowerCase();
  if (normalized.includes("social entrepreneurs") || normalized.includes("social-entrepreneurs")) {
    return <SocialEntrepreneursForm stakeholder={stakeholder} />;
  } else if (normalized.includes("digital platform")) {
    return <DigitalPlatformProvidersForm stakeholder={stakeholder} />;
  } else if (normalized.includes("policy") || normalized.includes("government")) {
    return <PolicyMakersForm stakeholder={stakeholder} />;
  } else if (normalized.includes("donor")) {
    return <DonorAgenciesForm stakeholder={stakeholder} />;
  } else {
    return <GenericSurveyForm stakeholder={stakeholder} />;
  }
}
