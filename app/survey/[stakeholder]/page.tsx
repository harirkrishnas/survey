import SurveyForm from '../../../components/SurveyForm';

export default async function SurveyPage({
  params,
}: {
  // Accept either a plain object or a promise
  params: { stakeholder: string } | Promise<{ stakeholder: string }>;
}): Promise<JSX.Element> {
  // Await or resolve the params so that we have an object with a stakeholder property
  const resolvedParams = await Promise.resolve(params);
  const { stakeholder } = resolvedParams;
  return <SurveyForm stakeholder={stakeholder} />;
}