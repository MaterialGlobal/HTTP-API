// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/28/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json({ response: '101 Switching Protocols', info: "Normal", category: "Informational HTTP codes", description: "This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
} 