import SurveyForm from '../../../components/SurveyForm';

export default function SurveyPage({
  params,
}: {
  params: { stakeholder: string };
}): JSX.Element {
  const { stakeholder } = params;
  return <SurveyForm stakeholder={stakeholder} />;
}