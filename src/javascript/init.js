// Add extension JS in page
var s = document.createElement('script')
s.src = chrome.extension.getURL('javascript/included.js')
s.onload = function() {
    this.parentNode.removeChild(this)
}
(document.head||document.documentElement).appendChild(s)
