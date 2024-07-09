function FindProxyForURL(url, host){
    return /(gstatic|google|openai|github)/.test(host) ? 'SOCKS5 127.0.0.1:1080' : 'DIRECT'
}
