// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(200).json(
        {
            "response": "102 Processing",
            "type": "WebDAV",
            "category": "Informational HTTP codes",
            "description": "This code indicates that the server has received and is processing the request, but no response is available yet.",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }          
    );
} 