// API made by honk#9999 on Discord or honklol on GitHub.
// Now a part of the Material Global family! 💖
// Last updated: 5/9/2022 (9th of May 2022)

// Licensed under the Apache License 2.0.
// https://github.com/MaterialGlobal/API/blob/main/LICENSE

// Project URL on GitHub: MaterialGlobal/API
// https://github.com/MaterialGlobal/API

export default function handler(req, res) {
    res.status(208).json(
        {
            "response": "208 Already Reported",
            "type": "WebDAV",
            "category": "Successful HTTP codes",
            "description": "Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.",
            "credits": ["Made by honklol on GitHub", "Descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", "GitHub Repository: https://github.com/MaterialGlobal/API"]
        }
    );
} 