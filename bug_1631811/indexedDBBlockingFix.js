console.info(
  "window.indexedDB has been overwritten for compatibility reasons. See https://bugzilla.mozilla.org/show_bug.cgi?id=1631811 for details."
);
Object.defineProperty(window.wrappedJSObject, 'indexedDB', {
  get: undefined,
  set: undefined
});
