import useFetchProjects from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  if (isLoading) {
    return (
      <section className="projects">
        <h2>loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { title, url, id, image } = project;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel={"noreffer"}
              className="project"
            >
              <img src={image} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
