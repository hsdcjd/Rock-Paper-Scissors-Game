import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('tests for RPS Express app', () => {
  it('should return status 200 when GET request is made to root route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return an HTML file when GET request is made to root route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
        done();
      });
  });

  it('should render the index.ejs template when GET request is made to root route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.include('Relax');
        done();
      });
  });

  it('should return status 404 when GET request is made to non-existent route', (done) => {
    chai.request(app)
      .get('/non-existent-path')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should return status 200 when POST request is made to game route', (done) => {
    chai.request(app)
      .post('/game')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return status 200 when (GET request is made to score route after) a POST to the game route', (done) => {
    chai.request(app)
        .post('/game')
        .send({play: 'rock'})
        .end((err, res) => {
        expect(res).to.have.status(200);
          done();
        
      });
  });
});
