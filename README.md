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
  fileDetails: "array which consist of object having file data",
});
```

fileDetails example

```js
fileDetails: [
  {
    elementId:
      "dom element id(string) where you want to inject the html content",
    fileId: "file id provided by datahub [array]",
    filePath: "file path provided by datahub [array]",
    fileContent: "any html content [array]",

    cssId: "css file id provided by datahub [array]",
    cssPath: "css file path provided by datahub [array]",
    cssContent: "any css content [array]",

    jsId: "js file id provided by datahub [array]",
    jsPath: "js file path provided by datahub [array]",
    jsContent: "any js content [array]",
  },
];
```

> **NOTE:** You can use any option `fileId`, `filePath` or `fileContent` similarly for css and js also.
> If `elementId` is not given the html will be injected at the end of the document body

Example

```js
webRenderer({
  type: "file",
  config: {
    uri: "test@test.com",
    adminSecret: "test@secret123",
  },
  fileDetails: [
    {
      elementId: "mydivId-1",
      fileId: [101, 104, 112],
      csspath: [
        "https://csspath1.com",
        "https://csspath2.com",
        "https://csspath3.com",
      ],
      jsId: [11, 23, 45],
    },
    {
      elementId: "mydivId-2",
      fileId: [102, 105, 113],
      csspath: [
        "https://csspath4.com",
        "https://csspath5.com",
        "https://csspath6.com",
      ],
      jsId: [11, 23, 45],
    },
  ],
});
```
