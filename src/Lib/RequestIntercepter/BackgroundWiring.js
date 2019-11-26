export default class BackgroundWiring {
    constructor() { }

    /**
     * Call it on ContentScripts to redirect requests to Background Scripts.
     * @param {string} targetName 
     */
    intercept(targetName) {
        var that = this;

        if (targetName.toLowerCase() === "fetch") {

            window.fetch = new Proxy(window.fetch, {
                // Executes on fetch call
                apply(target, thisArg, argumentsList) {
                    let caller = that._getCaller(window.fetch);

                    // If it is called by the current extension, forwards the request
                    if (caller.includes(chrome.runtime.id)) {
                        return that._forwardRequest(targetName, thisArg, argumentsList);
                    } else {
                        return target.call(thisArg, argumentsList);
                    }
                }

            });
        } else if (targetName.toLowerCase() === "xmlhttprequest") {

        }
    }

    /**
     * Call it on Background to complete XMLHTTPRequests.
     */
    listen() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponde) => {

            if (request.target.toLowerCase() === "fetch") {

                fetch(...request.args).then(async (response) => {
                    var jsonResponse = await response.json();
                    sendResponde(jsonResponse);
                });


            } else if (target.toLowerCase() === "xmlhttprequest") {

            }

            return true;
        });
    }

    _forwardRequest(target, thisArg, argumentsList) {

        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({ args: argumentsList, target }, resolve);
        });
    }

    _getCaller() {
        var caller;

        try { throw new Error(); }
        catch (e) {
            var stack = e.stack;
            var regex = /(?:^ +(?:at|@) )(.+)(?::[0-9]+:[0-9]+.*)/gim;
            var methods = [...stack.matchAll(regex)].map((e) => e[1]);

            caller = methods.reverse()[0];
        }
        finally {
            return caller;
        }
    }
}