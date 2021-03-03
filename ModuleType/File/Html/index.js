const { getFilePath } = require("../../../Query");
const axios = require("axios");

const isBrowser = require("../../../utils/envDetection");

const html = async ({ type, config, fileDetails }) => {
  if (isBrowser()) {
    fileDetails.forEach(async (fileDetail) => {
      if (fileDetail.filePath && fileDetail.filePath.length) {
        (async () => {
          const htmlContents = await Promise.all(
            fileDetail.filePath.map(async (path) => {
              try {
                const { data } = await axios.get(
                  `${config.expressUrl}/template/files${path}`
                );
                return data;
              } catch (error) {
                console.log(error);
              }
            })
          );
          htmlContents.forEach((content, index) => {
            if (fileDetail.elementId) {
              document.getElementById(fileDetail.elementId).innerHTML = content;
            } else {
              const htmlNode = document.createElement("div");
              htmlNode.className = `${type}-container-${index}`;
              htmlNode.innerHTML = content;
              document.body.appendChild(htmlNode);
            }
          });
        })();
      }

      if (fileDetail.fileId && fileDetail.fileId.length) {
        const pathArray = await getFilePath(fileDetail.fileId, config);
        const htmlContents = await Promise.all(
          pathArray.map(async (path) => {
            try {
              const { data } = await axios.get(
                `${config.expressUrl}/template/files${path}`
              );
              return data;
            } catch (error) {
              console.log(error);
            }
          })
        );
        htmlContents.forEach((content, index) => {
          if (fileDetail.elementId) {
            document.getElementById(fileDetail.elementId).innerHTML += content;
          } else {
            const htmlNode = document.createElement("div");
            htmlNode.className = `${type}-container-${index}`;
            htmlNode.innerHTML = content;
            document.body.appendChild(htmlNode);
          }
        });
      }

      if (fileDetail.fileContent && fileDetail.fileContent.length) {
        fileDetail.fileContent.forEach((content, index) => {
          if (fileDetail.elementId) {
            document.getElementById(fileDetail.elementId).innerHTML = content;
          } else {
            const htmlNode = document.createElement("div");
            htmlNode.className = `${type}-container-${index}`;
            htmlNode.innerHTML = content;
            document.body.appendChild(htmlNode);
          }
        });
      }
    });
  }
};

module.exports = html;
