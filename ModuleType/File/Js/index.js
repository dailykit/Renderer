const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");

const js = async ({ type, config, fileDetails }) => {
  if (isBrowser()) {
    fileDetails.forEach(async (fileDetail) => {
      const scripts = document.getElementsByClassName("web-renderer-script");
      if (scripts.length > 0) {
        const i = scripts.length;
        while (i--) {
          scripts[i].parentNode.removeChild(scripts[i]);
        }
      }
      if (fileDetail.jsPath && fileDetail.jsPath.length) {
        fileDetail.jsPath.forEach((path) => {
          const scriptNode = document.createElement("script");
          scriptNode.className = "web-renderer-script";
          scriptNode.src = `${config.expressUrl}/template/files${path}`;
          scriptNode.type = "text/javascript";
          document.body.appendChild(scriptNode);
        });
      }

      if (fileDetail.jsId && fileDetail.jsId.length) {
        const pathArray = await getFilePath(fileDetail.jsId, config);
        pathArray.forEach((path) => {
          const scriptNode = document.createElement("script");
          scriptNode.className = "web-renderer-script";
          scriptNode.src = `${config.expressUrl}/template/files${path}`;
          scriptNode.type = "text/javascript";
          document.body.appendChild(scriptNode);
        });
      }

      if (fileDetail.jsContent && fileDetail.jsContent.length) {
        fileDetail.jsContent.forEach((content, index) => {
          const scriptNode = document.createElement("script");
          scriptNode.className = "web-renderer-script";
          scriptNode.className = `${type}-scriptContainer-${index}`;
          scriptNode.innerHTML = content;
          document.body.appendChild(scriptNode);
        });
      }
    });
  }
};

module.exports = js;
