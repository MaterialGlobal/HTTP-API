// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json(
        {
            "response": "306 unused",
            "type": "Reserved",
            "category": "Redirection HTTP codes",
            "description": "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }
    );
}