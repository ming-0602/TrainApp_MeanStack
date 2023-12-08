const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');
const sinon = require('sinon');
const trainController = require('../app_api/controllers/traininfo')

chai.use(chaiHttp);

describe('Trains API', () => {
    it('should return all trains', (done) => {
        chai
            .request(app)
            .get('/api/traininfo')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

