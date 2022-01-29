// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/28/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json({ response: '100 Continue', info: "Normal", category: "Informational HTTP codes", description: "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.", credits: 'Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.'});
} 