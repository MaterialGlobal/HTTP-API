// API made by honk#9999 on Discord or honklol on GitHub.
// Now a part of the Material Global family! 💖
// Last updated: 5/9/2022 (9th of May 2022)

// Licensed under the Apache License 2.0.
// https://github.com/MaterialGlobal/API/blob/main/LICENSE

// Project URL on GitHub: MaterialGlobal/API
// https://github.com/MaterialGlobal/API

export default function handler(req, res) {
    res.status(200).json(
        {
            "response": "305 Use Proxy",
            "type": "Deprecated",
            "category": "Redirection HTTP codes",
            "description": "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.",
            "credits": ["Made by honklol on GitHub", "Descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", "GitHub Repository: https://github.com/MaterialGlobal/API"]
        }
    );
}