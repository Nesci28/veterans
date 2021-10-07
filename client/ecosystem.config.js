module.exports = {
    apps: [
      {
        name: "D3S",
        script: "server.js",
        watch: true,
        ignore_watch: ["node_modules", "docker"],
      },
    ],
  };