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

webRenderer({
  type: "file",
  config: {
    uri: "https://test.dailykit.org/datahub/v1/graphql",
    adminSecret: "60ea76ab-5ab6-4f09-ad44-efeb00f978ce",
  },
  fileDetails: [
    {
      elementId: "mydivId-1",
      fileId: [646, 17046],
      csspath: [426],
      jsId: [],
    },
  ],
});

module.exports = { webRenderer };
