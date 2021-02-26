const { renderfile } = require("./ModuleType");
const webRenderer = ({ type, config, fileDetails }) => {
  switch (type) {
    case "file":
      return renderfile({
        type,
        config,
        fileDetails,
      });
    default:
      break;
  }
};

module.exports = { webRenderer };
