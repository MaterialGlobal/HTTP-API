// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json({ response: '305 Use Proxy', info: "Deprecated", category: "Redirection HTTP codes", description: "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
}