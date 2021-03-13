const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");

const js = async ({ type, config, fileDetails }) => {
  if (isBrowser()) {
    fileDetails.forEach(async (fileDetail) => {
      if (fileDetail.jsPath && fileDetail.jsPath.length) {
        fileDetail.jsPath.forEach((path) => {
          const scriptNode = document.createElement("script");
          scriptNode.src = `${config.expressUrl}/template/files${path}`;
          scriptNode.type = "text/javascript";
          document.body.appendChild(scriptNode);
        });
      }

      if (fileDetail.jsId && fileDetail.jsId.length) {
        const pathArray = await getFilePath(fileDetail.jsId, config);
        pathArray.forEach((path) => {
          const scriptNode = document.createElement("script");
          scriptNode.src = `${config.expressUrl}/template/files${path}`;
          scriptNode.type = "text/javascript";
          document.body.appendChild(scriptNode);
        });
      }

      if (fileDetail.jsContent && fileDetail.jsContent.length) {
        fileDetail.jsContent.forEach((content, index) => {
          const scriptNode = document.createElement("script");
          scriptNode.className = `${type}-scriptContainer-${index}`;
          scriptNode.innerHTML = content;
          document.body.appendChild(scriptNode);
        });
      }
    });
  }
};

module.exports = js;
