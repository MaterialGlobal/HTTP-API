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
            "response": "100 Continue",
            "type": "Normal",
            "category": "Informational HTTP codes",
            "description": "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.",
            "credits": ["Made by honklol on GitHub", "Descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", "GitHub Repository: https://github.com/MaterialGlobal/API"]
        }
    );
} 