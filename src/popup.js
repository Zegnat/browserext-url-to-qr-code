const draw = text => document.querySelector('body').appendChild(window.kjua({
  size: 280,
  fill: '#000',
  back: '#FFF',
  text: text
}))
const url = document.location.hash.substr(1)
if (url.length === 0) {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }).then(tabs => draw(tabs[0].url))
} else {
  draw(url)
  browser.browserAction.setPopup({
    'popup': browser.runtime.getURL('src/popup.html')
  })
}
