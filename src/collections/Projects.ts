import { CollectionConfig } from "payload/types";
import path from "path";

const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../../media"),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};

export default Projects;
