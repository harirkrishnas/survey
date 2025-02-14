import SurveyForm from '../../../components/SurveyForm';

export default function SurveyPage({ params }: { params: { stakeholder: string } }) {
  const { stakeholder } = params;
  return <SurveyForm stakeholder={stakeholder} />;
}