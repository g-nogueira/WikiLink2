export default function storage() {
    return {
        get,
        set
    };

    function set(data) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set({
                [data.constructor.name]: JSON.stringify(data)
            },
                () => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError.message);
                    } else {
                        resolve();
                    }
                });
        });
    }

    function get(type) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(type.name,
                (obj) => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError.message);
                    } else {
                        resolve(type.fromJson(obj[type.name]));
                    }
                });
        });
    }
}