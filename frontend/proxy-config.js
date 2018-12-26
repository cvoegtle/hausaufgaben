const PROXY_CONFIG = [{
  context: [
    "/list",
    "/create",
    "/delete",
    "/_ah"
  ],
  target: "http://localhost:8080",
  secure: false
}]

module.exports = PROXY_CONFIG;