# ![](logo/qr-64.png) URL to QR code

A super simple [Browser Extension][] for generating [QR codes][] from URLs.

1. Adds a button to the browser’s toolbar that generates a QR code for the
   currently active tab.

2. Adds a context menu item to links that generates a QR code for the clicked
   link. Especially helpful for links that the browser can’t open in a tab.

## Differences from spec

The extension was created with [the Browser Extensions specification][spec] in
mind. However, for a more consistent UX, it uses the Firefox-only API
[openPopup][] when the user interacts with the context menu.

This means that until a fallback is added to the code, this extension is only
compatible with Firefox version 57 and later.

Any other differences are bugs and should be reported.

## Code Style

This extension follows the [JavaScript Standard Style][]. I apologise if you
love semicolons. Make sure to run it under the WebExtensions environment:

```
standard --env webextensions
```

## Licenses

* [kjua][] is included as [`kjua.min.js`](src/kjua.min.js) and is “Copyright
  (c) 2016 Lars Jung (https://larsjung.de)”, used under [MIT License][].

* Everything else is released under the BSD Zero Clause License (0BSD).
  Please see the [`LICENSE`](LICENSE) file for more information.

[Browser Extension]: https://browserext.github.io/
[QR codes]: https://en.wikipedia.org/wiki/QR_code
[spec]: https://browserext.github.io/browserext/
[openPopup]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction/openPopup
[JavaScript Standard Style]: https://standardjs.com/
[kjua]: https://larsjung.de/kjua/
[MIT License]: https://github.com/lrsjng/kjua/blob/11f3910a8906b4a0929abaf5a2f17d356748ef34/README.md#license
