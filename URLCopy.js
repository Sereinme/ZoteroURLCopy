/**
 * @ProjectName: Zotero URL Copy
 * @Author: Sereinme
 * @CreatedDate: 2024-11-01
 * @Version: 1.0
 * @Description: Copy URLs from Zotero items to clipboard
 */

var items = Zotero.getActiveZoteroPane().getSelectedItems();
var url = "";

for (item of items) {
    url += "zotero://select/items/";
    url += item.key.toString();
}
copyToClipboard(url);
return url;

function copyToClipboard(clipboardText) {
    if (clipboardText) {
        const gClipboardHelper =
            Components.classes['@mozilla.org/widget/clipboardhelper;1']
            .getService(Components.interfaces.nsIClipboardHelper);
        gClipboardHelper.copyString(clipboardText, document);
    } else {
        var prompts = Components.
            classes['@mozilla.org/embedcomp/prompt-service;1'].
            getService(Components.interfaces.nsIPromptService);
        var title = Zutilo.getString('zutilo.error.copynoitemstitle')
        var text = Zutilo.getString('zutilo.error.copynoitemstext')
        prompts.alert(null, title, text)
    }
 }