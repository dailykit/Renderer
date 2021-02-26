const html = require("./Html");
const js = require("./Js");
const css = require("./Css");
const renderfile = ({ type = null, config = null, fileDetails = [] }) => {
  css({ type, config, fileDetails });
  html({ type, config, fileDetails });
  js({ type, config, fileDetails });
};

module.exports = { renderfile };
