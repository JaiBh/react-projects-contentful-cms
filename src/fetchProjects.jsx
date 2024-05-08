import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: "qns4xcp8krvh",
  environment: "master",
  accessToken: `${import.meta.env.VITE_API_KEY}`,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const { items } = await client.getEntries({ content_type: "projects" });
      setIsLoading(false);
      const projects = items.map((item) => {
        const { title, url } = item?.fields;
        const { url: image } = item?.fields?.image?.fields?.file;
        const id = item.sys.id;
        return { image, title, url, id };
      });
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
