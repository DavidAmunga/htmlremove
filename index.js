/***
 * Removes tags from HTML
 * @param {htmlString}
 */
var htmlRemove = (htmlString) => {
  var div = window.document.createElement("div"),
    text = "";
  div.innerHTML = htmlString;
  text = div.textContent.trim();
  text = text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
  return text;
}


module.exports = htmlRemove;
