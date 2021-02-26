const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");
const css = async ({ type, config, fileDetails }) => {
  if (isBrowser()) {
    fileDetails.forEach(async (fileDetail) => {
      if (fileDetail.cssPath.length) {
        fileDetail.cssPath.forEach((path) => {
          const linkNode = document.createElement("link");
          linkNode.href = `https://test.dailykit.org/template/files${path}`;
          linkNode.rel = "stylesheet";
          linkNode.type = "text/css";
          document.head.appendChild(linkNode);
        });
      }
      if (fileDetail.cssId.length) {
        const pathArray = await getFilePath(fileDetail.cssId, config);
        pathArray.forEach((path) => {
          const linkNode = document.createElement("link");
          linkNode.href = `https://test.dailykit.org/template/files${path}`;
          linkNode.rel = "stylesheet";
          linkNode.type = "text/css";
          document.head.appendChild(linkNode);
        });
      }

      if (fileDetail.cssContent.length) {
        fileDetail.cssContent.forEach((content, index) => {
          const styleNode = document.createElement("style");
          styleNode.className = `${type}-styleContainer-${index}`;
          styleNode.innerHTML = content;
          document.head.appendChild(styleNode);
        });
      }
    });
  }
};
module.exports = css;
