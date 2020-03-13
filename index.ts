/***
 * Removes tags from HTML
 * @param {htmlString}
 */
const htmlRemove = (htmlString : string) : string => {
  const newText = htmlString.replace(/(<\?[a-z]*(\s[^>]*)?\?(>|$)|<!\[[a-z]*\[|\]\]>|<!DOCTYPE[^>]*?(>|$)|<!--[\s\S]*?(-->|$)|<[a-z?!\/]([a-z0-9_:.])*(\s[^>]*)?(>|$))/gi, '');
  return newText;

}

htmlRemove("<p>May the <asdas>asdasda </asdas> force be with you <a href=\"undefined\" class=\"wysiwyg-mention\" data-mention data-value=\"tenant.firstName\">@tenant.firstName</a>  And Awesomeness</p>")

export default htmlRemove;
