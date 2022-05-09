// API made by honk#9999 on Discord or honklol on GitHub.
// Now a part of the Material Global family! 💖
// Last updated: 5/9/2022 (9th of May 2022)

// Licensed under the Apache License 2.0.
// https://github.com/MaterialGlobal/API/blob/main/LICENSE

// Project URL on GitHub: MaterialGlobal/API
// https://github.com/MaterialGlobal/API

export default function handler(req, res) {
    res.status(302).json(
        {
            "response": "302 Found",
            "type": "Normal",
            "category": "Redirection HTTP codes",
            "description": "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.",
            "credits": ["Made by honklol on GitHub", "Descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", "GitHub Repository: https://github.com/MaterialGlobal/API"]
        }
    );
}