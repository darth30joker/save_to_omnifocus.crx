function onClick(info, tab) {
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  if (info.selectionText) {
    var name = info.selectionText;
    var url = info.linkUrl;
  } else {
    var name = tab.title;
    var url = tab.url;
  }
  var omnifocus_url = "omnifocus:///add?name=" + encodeURIComponent(name) + "&amp;note=" + encodeURIComponent(url);
  document.body.insertAdjacentHTML("afterEnd", '<iframe src="' + omnifocus_url + '" style="display:none" />');
}

var button = chrome.contextMenus.create({"title": "Save to Omni Focus2",
                     "contexts": ["page", "selection", "link"],
                     "onclick": onClick});
