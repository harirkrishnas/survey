import SurveyForm from '../../../components/SurveyForm';

/**
 * By typing `params` as either a plain object or a PromiseLike object,
 * we avoid the type error without resorting to `any`.
 */
export default async function SurveyPage({
  params,
}: {
  params: { stakeholder: string } | PromiseLike<{ stakeholder: string }>;
}): Promise<JSX.Element> {
  // Await the params so that whether they are provided synchronously (as an object)
  // or as a promise, we end up with an object having the stakeholder property.
  const resolvedParams = await Promise.resolve(params);
  const { stakeholder } = resolvedParams;
  return <SurveyForm stakeholder={stakeholder} />;
}