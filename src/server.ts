import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const server = app.listen(process.env['PORT'], () => {
  console.log(`Example app listening on port ${process.env['PORT']}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
