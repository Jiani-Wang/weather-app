const express = require('express');
const cors = require('cors');
const config = require('../app/config/app'); 
const weatherRoutes = require('../app/routes/v1/api'); 

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(config.api.prefix, weatherRoutes);

  app.get('/', (req, res) => {
    res.send('Backend is running');
  });

  app.listen(config.port, (err) => {
    if (err) {
      console.error("Failed to start server:", err);
      process.exit(1);
    }
    console.log(`✅ SERVER STARTED at port ${config.port}`);
  });

  return app;
};
