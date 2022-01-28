// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/28/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json({ response: '103 Early Hints', info: "Normal", category: "Informational HTTP codes", description: "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
} 