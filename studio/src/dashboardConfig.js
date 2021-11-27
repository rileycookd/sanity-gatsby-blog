export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61a2724b62b3366bb9f97eee",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tywje3uo",
                  apiId: "a16c5b2f-bfe1-49bc-90fd-e972a0cfc05d",
                },
                {
                  buildHookId: "61a2724bf233073eac8c4419",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9rnrsfrn",
                  apiId: "c3881f23-8ea8-40a7-b007-ad3f00c968a3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rileycookd/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9rnrsfrn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
