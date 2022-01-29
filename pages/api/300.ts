// API made by honk#9999 on Discord or honklol on GitHub.
// Last updated: 1/29/2022
// Licensed under the Apache License 2.0.
// https://github.com/honkdevelopment/API/blob/main/LICENSE

export default function handler(req, res) {
    res.status(300).json(
        {
            "response": "300 Multiple Choice",
            "type": "Normal",
            "category": "Redirection HTTP codes",
            "description": "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)",
            "credits": "Made by honk#9999, descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status."
        }
    );
}