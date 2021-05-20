const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");
const css = async ({ type, config, fileDetails }) => {
  if (isBrowser()) {
    fileDetails.forEach(async (fileDetail) => {
      const styleLinks = document.getElementsByClassName(
        "web-renderer-css-link"
      );
      if (styleLinks.length > 0) {
        const i = styleLinks.length;
        while (i--) {
          styleLinks[i].parentNode.removeChild(styleLinks[i]);
        }
      }
      if (fileDetail.cssPath && fileDetail.cssPath.length) {
        fileDetail.cssPath.forEach((path) => {
          const linkNode = document.createElement("link");
          linkNode.className = "web-renderer-css-link";
          linkNode.href = `${config.expressUrl}/template/files${path}`;
          linkNode.rel = "stylesheet";
          linkNode.type = "text/css";
          document.head.appendChild(linkNode);
        });
      }
      if (fileDetail.cssId && fileDetail.cssId.length) {
        const pathArray = await getFilePath(fileDetail.cssId, config);
        pathArray.forEach((path) => {
          const linkNode = document.createElement("link");
          linkNode.className = "web-renderer-css-link";
          linkNode.href = `${config.expressUrl}/template/files${path}`;
          linkNode.rel = "stylesheet";
          linkNode.type = "text/css";
          document.head.appendChild(linkNode);
        });
      }

      if (fileDetail.cssContent && fileDetail.cssContent.length) {
        fileDetail.cssContent.forEach((content, index) => {
          const styleNode = document.createElement("style");
          linkNode.className = "web-renderer-css-link";
          styleNode.className = `${type}-styleContainer-${index}`;
          styleNode.innerHTML = content;
          document.head.appendChild(styleNode);
        });
      }
    });
  }
};
module.exports = css;
