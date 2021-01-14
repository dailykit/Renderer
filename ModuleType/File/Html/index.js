const { getFilePath } = require("../../../Query");
const axios = require("axios");

const isBrowser = require("../../../utils/envDetection");

const html = async ({ type, fileId, filePath, fileContent, elementId }) => {
  if (isBrowser()) {
    if (filePath.length) {
      (async () => {
        const htmlContents = await Promise.all(
          filePath.map(async (path) => {
            try {
              const { data } = await axios.get(path);
              return data;
            } catch (error) {
              console.log(error);
            }
          })
        );
        htmlContents.forEach((content) => {
          if (elementId) {
            document.getElementById(elementId).innerHTML = content;
          } else {
            const htmlNode = document.createElement("div");
            htmlNode.className = `${type}-container`;
            htmlNode.innerHTML = content;
            document.body.appendChild(htmlNode);
          }
        });
      })();
    }

    if (fileId.length) {
      console.log("running..");
      const pathArray = await getFilePath(fileId);
      const htmlContents = await Promise.all(
        pathArray.map(async (path) => {
          try {
            const { data } = await axios.get(path);
            return data;
          } catch (error) {
            console.log(error);
          }
        })
      );
      htmlContents.forEach((content) => {
        if (elementId) {
          document.getElementById(elementId).innerHTML = content;
        } else {
          const htmlNode = document.createElement("div");
          htmlNode.className = `${type}-container`;
          htmlNode.innerHTML = content;
          document.body.appendChild(htmlNode);
        }
      });
    }

    if (fileContent.length) {
      fileContent.forEach((content) => {
        if (elementId) {
          document.getElementById(elementId).innerHTML = content;
        } else {
          const htmlNode = document.createElement("div");
          console.log(htmlNode);
          htmlNode.className = `${type}-container`;
          htmlNode.innerHTML = content;
          document.body.appendChild(htmlNode);
        }
      });
    }
  }
};

module.exports = html;
