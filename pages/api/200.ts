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
      "response": "200 OK",
      "type": "Normal",
      "category": "Successful HTTP codes",
      "description": {
        "0": "The request succeeded. The result meaning of success depends on the HTTP method:",
        "1": "GET: The resource has been fetched and transmitted in the message body.",
        "2": "HEAD: The representation headers are included in the response without any message body.",
        "3": "PUT or POST: The resource describing the result of the action is transmitted in the message body.",
        "4": "TRACE: The message body contains the request message as received by the server."
      },
      "credits": ["Made by honklol on GitHub", "Descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", "GitHub Repository: https://github.com/MaterialGlobal/API"]
    }
  );
} 