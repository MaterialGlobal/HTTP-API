// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json(
        {
            "response": "204 No Content",
            "type": "Normal",
            "category": "Successful HTTP codes",
            "description": "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }
    );
}