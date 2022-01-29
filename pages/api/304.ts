// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json({ response: '304 Not Modified', info: "Normal", category: "Redirection HTTP codes", description: "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
}