// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(303).json({ response: '303 See Other', info: "Normal", category: "Redirection HTTP codes", description: "The server sent this response to direct the client to get the requested resource at another URI with a GET request.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
}