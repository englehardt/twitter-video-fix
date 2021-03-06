console.info(
  "window.cookieEnabled has been overwritten for compatibility reasons. See https://bugzilla.mozilla.org/show_bug.cgi?id=1665035 for details."
);

Object.defineProperty(window.navigator.wrappedJSObject, 'cookieEnabled', {
  value: true,
  writable: false
});

if (navigator.platform.includes("Linux")) {
  console.info(
    "navigator.platform has been overwritten for compatibility reasons. See https://bugzilla.mozilla.org/show_bug.cgi?id=1665035 for details."
  );
  Object.defineProperty(window.navigator.wrappedJSObject, 'platform', {
    value: 'Win64',
    writable: false
  });
}
