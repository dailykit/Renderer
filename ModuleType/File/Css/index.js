const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");
const css = async ({ type, cssId, cssPath, cssContent }) => {
  if (isBrowser()) {
    if (cssPath.length) {
      cssPath.forEach((path) => {
        const linkNode = document.createElement("link");
        linkNode.href = path;
        linkNode.rel = "stylesheet";
        linkNode.type = "text/css";
        document.head.appendChild(linkNode);
      });
    }
    if (cssId.length) {
      const pathArray = await getFilePath(cssId);
      pathArray.forEach((path) => {
        const linkNode = document.createElement("link");
        linkNode.href = path;
        linkNode.rel = "stylesheet";
        linkNode.type = "text/css";
        document.head.appendChild(linkNode);
      });
    }

    if (cssContent.length) {
      cssContent.forEach((content) => {
        const styleNode = document.createElement("style");
        styleNode.className = `${type}-styleContainer`;
        styleNode.innerHTML = content;
        document.head.appendChild(styleNode);
      });
    }
  }
};
module.exports = css;
