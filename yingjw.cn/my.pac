var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+\u81ea\u52a8", {
    "+\u81ea\u52a8": function(url, host, scheme) {
        "use strict";
        if(/(googleapis.com|gstatic.com|googleusercontent.com|google.com|openai.com)$/.test(host)){
          return "+\u4ee3\u7406";
        }
        return "DIRECT";
    },
    "+\u4ee3\u7406": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
    }
})