const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");

const js = async ({ type, jsId, jsPath, jsContent }) => {
  if (isBrowser()) {
    if (jsPath.length) {
      jsPath.forEach((path) => {
        const scriptNode = document.createElement("script");
        scriptNode.src = `https://test.dailykit.org/template/files${path}`;
        scriptNode.type = "text/javascript";
        scriptNode.async = true;
        document.body.appendChild(scriptNode);
      });
    }

    if (jsId.length) {
      const pathArray = await getFilePath(jsId);
      pathArray.forEach((path) => {
        const scriptNode = document.createElement("script");
        scriptNode.src = `https://test.dailykit.org/template/files${path}`;
        scriptNode.type = "text/javascript";
        scriptNode.async = true;
        document.body.appendChild(scriptNode);
      });
    }

    if (jsContent.length) {
      jsContent.forEach((content, index) => {
        const scriptNode = document.createElement("script");
        scriptNode.className = `${type}-scriptContainer-${index}`;
        scriptNode.innerHTML = content;
        console.log(scriptNode);
        document.body.appendChild(scriptNode);
      });
    }
  }
};

module.exports = js;
