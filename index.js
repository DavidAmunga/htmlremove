/***
 * Removes tags from HTML
 * @param {htmlString}
 */
var htmlRemove = (htmlString) => {
  var div = window.document.createElement("div"),
    text = "";
  div.innerHTML = htmlString;
  text = _div.textContent.trim();
  text = _text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
  return text;
}

// const html = htmlRemove("<div> May the force be with <a href=\"#\">you</a>. I love <strong>Batman</strong>")

// console.log(html);

module.exports = htmlRemove;
