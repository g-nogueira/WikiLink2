This is the Background folder. It holds the files that run in, well, the background.

> Extensions are event based programs used to modify or enhance the Chrome browsing experience. Events are browser triggers, such as navigating to a new page, removing a bookmark, or closing a tab. Extensions monitor these events in their background script, then react with specified instructions.


For more information, see [Background Pages](https://developer.chrome.com/extensions/background_pages) in the Chrome for Developers page.


## Using Functions Defined in the Background
If another view needs to call a function defined in the background, you need get the background page first, then you can use it. Example following.

**background.js**  

```javascript
function backgroundFunction () {
    return "hello from the background!"
}
```

**contentScript.js**  

```javascript
var backgroundWindows = chrome.extension.getBackgroundPage();

console.log(backgroundWindows.backgroundFunction()); 
```

For more information, see [getBackgroundPage](https://developer.chrome.com/extensions/runtime#method-getBackgroundPage) in the Chrome for Developers page.