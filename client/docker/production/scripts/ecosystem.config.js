module.exports = {
    apps: [
      {
        name: "veterans",
        script: "server.js",
        watch: true,
        ignore_watch: ["node_modules", "docker"],
      },
    ],
  };
  