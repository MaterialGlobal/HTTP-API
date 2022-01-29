// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(301).json({ response: '301 Moved Permanently', info: "Normal", category: "Redirection HTTP codes", description: "The URL of the requested resource has been changed permanently. The new URL is given in the response.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
}