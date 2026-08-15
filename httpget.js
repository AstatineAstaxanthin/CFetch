async function run() {
  /**
   * Arguments
   * process.argv[2] : URL
   * process.argv[3] : METHOD ('GET', 'POST', 'PUT', 'PATCH', 'DELETE' etc / default: 'GET')
   * process.argv[4] : PAYLOAD / BODY (JSON or text / if empty, "")
   * process.argv[5] : HEADERS (JSON string - example: '{"Authorization":"Bearer token", "X-Key":"123"}' / if none "")
   */
  const args = process.argv;
  const url = args[2];
  const method = (args[3] || 'GET').toUpperCase();
  const payload = args[4] || null;
  const header = args[5] || null;

  if (!url) {
    console.error("theres no url");
    process.exit(1);
  }

  try {
    let headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'C-JS-Fetch-Bridge/1.0'
    };

    if (header) {
      try {
        const customheaders = JSON.parse(header);
        headers = { ...headers, ...customheaders };
      } catch (e) {
        console.error("parsing failed, using default header");
      }
    }

    // fetch
    const options = { method, headers };

    // Body/Payload
    if (payload && ['POST', 'PUT', 'PATCH'].includes(method)) {
       options.body = payload;
    }

    const res = await fetch(url, options);

    const restxt = await res.text();

    console.log(restxt);
  } catch (error) {
    console.error(`request failed: ${error.message}`);
    process.exit(1);
  }
}
run();
