# webRenderer

Render Html, Css and Js by injecting it into dom.

## Installing

Using npm:

```bash
$ npm install @dailykit/web-renderer
```

Using yarn:

```bash
$ yarn add @dailykit/web-renderer
```

## Getting Started

```js
const { webRenderer } = require("@dailykit/web-renderer");
or;
import { webRenderer } from "@dailykit/web-renderer";
```

Rendering the html,css and js

```js
webRenderer({
  type: "file",
  config: {
    uri: "datahub uri",
    adminSecret: "datahub admin secret",
  },
  elementId: "dom element id where you want to inject the html content",
  fileId: "file id provided by datahub",
  filePath: "file path provided by datahub",
  fileContent: "any html content",
  cssId: "css file id provided by datahub",
  cssPath: "css file path provided by datahub",
  cssContent: "any css content",
  jsId: "js file id provided by datahub",
  jsPath: "js file path provided by datahub",
  jsContent: "any js content",
});
```

> **NOTE:** You can use any option `fileId`, `filePath` or `fileContent` similarly for css and js also.
> If `elementId` is not given the html will be injected at the end of the document body
