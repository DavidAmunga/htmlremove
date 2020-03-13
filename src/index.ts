/***
 * Removes tags from HTML
 * @param {htmlString}
 */
const htmlremove = (htmlString: string): string => {
  const newText = htmlString.replace(
    /(<\?[a-z]*(\s[^>]*)?\?(>|$)|<!\[[a-z]*\[|\]\]>|<!DOCTYPE[^>]*?(>|$)|<!--[\s\S]*?(-->|$)|<[a-z?!\/]([a-z0-9_:.])*(\s[^>]*)?(>|$))/gi,
    '',
  );
  return newText;
};

// htmlremove("<p>May the <ha>asdasda </ha> force be with you <a href=\"#\" class=\"wysiwyg-mention\" data-mention data-value=\"firstName\">firstName</a></p>")

export default htmlremove;
