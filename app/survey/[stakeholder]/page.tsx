import SurveyForm from '../../../components/SurveyForm';

export default async function SurveyPage({
  params,
}: {
  // Using any here avoids the conflict between an object and a promise type.
  params: any;
}): Promise<JSX.Element> {
  // Now we assert that params has a stakeholder property.
  const { stakeholder } = params as { stakeholder: string };
  return <SurveyForm stakeholder={stakeholder} />;
}