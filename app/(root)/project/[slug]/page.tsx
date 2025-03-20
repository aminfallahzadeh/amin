const ProjectDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  // CONSTS
  const { slug } = await props.params;

  // CONTENT
  const content = <h1>{slug}</h1>;

  return content;
};
export default ProjectDetailsPage;
