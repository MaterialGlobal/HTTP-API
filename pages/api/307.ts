// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(307).json(
        {
            "response": "307 Temporary Redirect",
            "type": "Normal",
            "category": "Redirection HTTP codes",
            "description": "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }
    );
}