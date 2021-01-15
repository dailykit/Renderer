const html = require("./Html");
const js = require("./Js");
const css = require("./Css");
const renderfile = ({
  type = null,
  config = null,
  elementId = null,
  filePath = [],
  fileId = [],
  fileContent = [],
  cssPath = [],
  cssId = [],
  cssContent = [],
  jsPath = [],
  jsId = [],
  jsContent = [],
}) => {
  css({ type, config, cssId, cssPath, cssContent });
  html({ type, config, elementId, fileId, filePath, fileContent });
  js({ type, config, jsId, jsPath, jsContent });
};

module.exports = { renderfile };
