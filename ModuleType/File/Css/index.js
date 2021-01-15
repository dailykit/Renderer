const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");
const css = async ({ type, config, cssId, cssPath, cssContent }) => {
  if (isBrowser()) {
    if (cssPath.length) {
      cssPath.forEach((path) => {
        const linkNode = document.createElement("link");
        linkNode.href = `https://test.dailykit.org/template/files${path}`;
        linkNode.rel = "stylesheet";
        linkNode.type = "text/css";
        document.head.appendChild(linkNode);
      });
    }
    if (cssId.length) {
      const pathArray = await getFilePath(cssId, config);
      pathArray.forEach((path) => {
        const linkNode = document.createElement("link");
        linkNode.href = `https://test.dailykit.org/template/files${path}`;
        linkNode.rel = "stylesheet";
        linkNode.type = "text/css";
        document.head.appendChild(linkNode);
      });
    }

    if (cssContent.length) {
      cssContent.forEach((content, index) => {
        const styleNode = document.createElement("style");
        styleNode.className = `${type}-styleContainer-${index}`;
        styleNode.innerHTML = content;
        document.head.appendChild(styleNode);
      });
    }
  }
};
module.exports = css;
