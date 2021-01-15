const { renderfile } = require("./ModuleType");
const webRenderer = ({
  type,
  config,
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
        config,
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

module.exports = { webRenderer };
