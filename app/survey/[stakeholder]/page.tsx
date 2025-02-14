import SurveyForm from '../../../components/SurveyForm';

// Mark the page as async so that the return type is a Promise<ReactElement>
export default async function SurveyPage({ params }: { params: { stakeholder: string } }) {
  const { stakeholder } = params;
  return <SurveyForm stakeholder={stakeholder} />;
}