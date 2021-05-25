/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const openGraphImage = createOpenGraphImage(createPage, {
    path: "/public/image/preview.png",
    component: path.resolve(`public/image/preview.png`),
    size: {
      width: 400,
      height: 50,
    },
    context: {
      description: "portfolio image preview",
    },
  });
};