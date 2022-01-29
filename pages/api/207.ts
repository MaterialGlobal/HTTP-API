// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(207).json(
        {
            "response": "207 Multi-Status",
            "type": "WebDAV",
            "category": "Successful HTTP codes",
            "description": "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }
    );
}