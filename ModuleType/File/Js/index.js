const { getFilePath } = require("../../../Query");
const isBrowser = require("../../../utils/envDetection");

const js = async ({ type, config, fileDetails }) => {
  if (isBrowser()) {
    fileDetails.forEach(async (fileDetail) => {
      if (fileDetail.jsPath.length) {
        fileDetail.jsPath.forEach((path) => {
          const scriptNode = document.createElement("script");
          scriptNode.src = `https://test.dailykit.org/template/files${path}`;
          scriptNode.type = "text/javascript";
          scriptNode.async = true;
          document.body.appendChild(scriptNode);
        });
      }

      if (fileDetail.jsId.length) {
        const pathArray = await getFilePath(fileDetail.jsId, config);
        pathArray.forEach((path) => {
          const scriptNode = document.createElement("script");
          scriptNode.src = `https://test.dailykit.org/template/files${path}`;
          scriptNode.type = "text/javascript";
          scriptNode.async = true;
          document.body.appendChild(scriptNode);
        });
      }

      if (fileDetail.jsContent.length) {
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
