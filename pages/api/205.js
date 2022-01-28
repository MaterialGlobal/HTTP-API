// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/28/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json({ response: '205 Reset Content', info: "Normal", category: "Successful HTTP codes", description: "Tells the user agent to reset the document which sent this request.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
} 