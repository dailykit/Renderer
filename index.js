require("dotenv").config();
const { renderfile } = require("./ModuleType");
const renderer = ({
  type,
  elementId,
  filePath,
  fileId,
  fileContent,
  cssPath,
  cssId,
  cssContent,
  jsPath,
  jsId,
  jsContent,
  templateId,
  templatePath,
  templateContent,
  internalModuleId,
  internalModulePath,
  internalModuleContent,
}) => {
  switch (type) {
    case "file":
      return renderfile({
        type,
        elementId,
        fileId,
        filePath,
        fileContent,
        cssId,
        cssPath,
        cssContent,
        jsId,
        jsPath,
        jsContent,
      });
    default:
      break;
  }
};

module.exports = renderer;
