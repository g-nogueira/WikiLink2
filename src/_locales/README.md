This is the Locales folder. It holds the i18n resources strings that will be used across the extension.

> You need to put all of its user-visible strings into a file named messages.json. Each time you add a new locale, you add a messages file under a directory named _locales/localeCode, where localeCode is a code such as en for English.

For more information, see [chrome.i18n](https://developer.chrome.com/extensions/i18n) in the Chrome for Developers page.

**Table of Contents**
- [Using i18n in HTML](#Using-i18n-in-HTML)
- [Using i18n in CSS](#Using-i18n-in-CSS)
- [Using i18n in JavaScript](#Using-i18n-in-JavaScript)
- [Detecting a Language](#Detecting-a-Language)

## Using i18n in HTML
Every translatable text in HTML has to be inside a tag with the `data-i18n` property with the value being the name of a resource present in the `message.json`. Refer to the following example.

**index.html**
```html
<div data-i18n="Pages_Options_Title"><div>
```

**messages.json**
```json
{
    "Pages_Options_Title": {
        "message": "Options Page"
    },
}
```

## Using i18n in CSS
Every translatable text in CSS has to be prefixed with `__MSG_` and suffixed with `__`. Refer to the following example.

> Careful! Resources prefixed with `@@` are system predefined messages.  
> For more information, see [Predefined Messages](https://developer.chrome.com/extensions/i18n#overview-predefined) in the official docs.

**index.html**
```css
body {
    background-image:url('chrome-extension://__MSG_@@extension_id__/__MSG_Resources_Images_background.png');
}
```

**messages.json**
```json
{
    "Pages_Options_Title": {
        "message": "Options Page"
    },
}
```

## Using i18n in JavaScript
The official way of getting i18n resourses is by using the `getMessage` function, passing up to nine substitution strings. Refer to the following example.

**index.js**
```javascript
var error = chrome.i18n.getMessage("error", errorDetails);
/*OR*/
var errorWithCode = chrome.i18n.getMessage("error", [errorDetails, errorCode]);
```

**messages.json**
```json
{
    "error": {
        "message": "Error: $details$",
        "description": "Generic error template. Expects error parameter to be passed in.",
        "placeholders": {
          "details": {
            "content": "$1",
            "example": "Failed to fetch RSS feed."
          }
        }
    },

    "errorWithCode": {
        "message": "Error: $details$ - $code$",
        "description": "Generic error template. Expects error and code array to be passed in.",
        "placeholders": {
          "details": {
            "content": "$1",
            "example": "Failed to fetch RSS feed."
          },
          "code": {
            "content": "$2",
            "example": "404"
          }
        }
    }
}
```

## Detecting a Language

By default chrome itself has a language API. In this API is included the `i18n.detectLanguage` function. It receives an input text and outputs the language guess together with an `isReliable` paramenter. See the following example.

The following code detects up to 3 languages from the given string and displays the result as strings separated by new lines.
```js
function detectLanguage(inputText) {
    chrome.i18n.detectLanguage(inputText, (result) => {
        var output = "";
        var outputLang = "Detected Language: ";
        var outputPercent = "Language Percentage: ";

        result.languages.forEach( lang => {
            outputLang += lang.language + " ";
            outputPercent += lang.percentage + " ";
        });

        output = `${outputLang}\n${outputPercent}\nReliable: ${result.isReliable}`;
        
        document.getElementById("languageSpan").innerHTML = output;
    });
}
```
For more details on calling detectLanguage(inputText), see the [API reference](https://developer.chrome.com/extensions/i18n#method-detectLanguage).

