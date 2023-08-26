const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  const appName = 'First Appliction'
  const appVersion = 'v1.0'
  const hostName = os.hostname();
  const deployEnv = process.env.DEPLOY_ENV || 'DEV'; // Default env to deploy is DEV
  const bgColor = process.env.BG_COLOR || '#FFFFFF'; // Default color is white
  const currentTime = new Date().toLocaleTimeString();
  const cpuUsage = os.loadavg()[0]; // Get the 1-minute load average
  const memoryUsage = (1 - os.freemem() / os.totalmem()) * 100; // Calculate memory usage percentage

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: ${bgColor};
        }
      </style>
    </head>
    <body>
      <h1>Application Name   : ${appName}</h1>
      <h1>Application Version: ${appVersion}</h1>
      <h2>Host Name: ${hostName}</h2>
      <h2>Environment Name: ${deployEnv}</h2>
      <p>System Time: ${currentTime}</p>
      <p>CPU Usage: ${cpuUsage.toFixed(2)} (1-minute load average)</p>
      <p>Memory Usage: ${memoryUsage.toFixed(2)}%</p>
    </body>
    </html>
  `);
  res.end();
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
