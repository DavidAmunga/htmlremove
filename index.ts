/***
 * Removes tags from HTML
 * @param {htmlString}
 */
const htmlRemove = (htmlString: string): string => {
  let div = window.document.createElement("div");
  if (div == null) {
    return "";
  }

  let text = "";
  div.innerHTML = htmlString;
  text = div.textContent!.trim();
  text = text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
  return text;

}

htmlRemove("<p>May the force be with you <a href=\"undefined\" class=\"wysiwyg-mention\" data-mention data-value=\"tenant.firstName\">@tenant.firstName</a>  And Awesomeness</p>")

export default htmlRemove;
