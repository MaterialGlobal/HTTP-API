// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(201).json(
        {
            "response": "201 Created",
            "type": "Normal",
            "category": "Successful HTTP codes",
            "description": "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }
    );
} 