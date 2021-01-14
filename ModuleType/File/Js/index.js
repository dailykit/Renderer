const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");

const js = async ({ type, jsId, jsPath, jsContent }) => {
  if (isBrowser()) {
    if (jsPath.length) {
      jsPath.forEach((path) => {
        const scriptNode = document.createElement("script");
        scriptNode.src = path;
        scriptNode.type = "text/javascript";
        scriptNode.async = true;
        document.body.appendChild(scriptNode);
      });
    }

    if (jsId.length) {
      const pathArray = await getFilePath(jsId);
      pathArray.forEach((path) => {
        const scriptNode = document.createElement("script");
        scriptNode.src = path;
        scriptNode.type = "text/javascript";
        scriptNode.async = true;
        document.body.appendChild(scriptNode);
      });
    }

    if (jsContent.length) {
      jsContent.forEach((content) => {
        const scriptNode = document.createElement("script");
        scriptNode.className = `${type}-scriptContainer`;
        scriptNode.innerHTML = content;
        document.body.appendChild(scriptNode);
      });
    }
  }
};

module.exports = js;
