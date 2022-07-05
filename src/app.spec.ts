import supertest from 'supertest';
import app from './app';

describe('app', () => {
  it('should return Hello World', async () => {
    const res = await supertest(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello World');
  });
});
