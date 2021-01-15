const html = require("./Html");
const js = require("./Js");
const css = require("./Css");
const renderfile = ({
  type = null,
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
  css({ type, cssId, cssPath, cssContent });
  html({ type, elementId, fileId, filePath, fileContent });
  js({ type, jsId, jsPath, jsContent });
};

module.exports = { renderfile };
