browser.contextMenus.create({
  'contexts': ['link'],
  'title': 'Show QR code for this link'
})
browser.contextMenus.onClicked.addListener(data => {
  browser.browserAction.setPopup({
    'popup': browser.runtime.getURL('src/popup.html') + '#' + data.linkUrl
  })
  browser.browserAction.openPopup()
})
