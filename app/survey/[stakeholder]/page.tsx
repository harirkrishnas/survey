import SurveyForm from '../../../components/SurveyForm';

export default async function SurveyPage({
  params,
}: {
  // Using any here to bypass the Next.js PageProps constraint.
  params: any;
}): Promise<React.ReactElement> {
  // Assert that params has a stakeholder property.
  const { stakeholder } = params as { stakeholder: string };
  return <SurveyForm stakeholder={stakeholder} />;
}