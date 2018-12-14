
const app = require('../src/app');
const hippie = require('hippie');


describe('Test Hello', () => {

    beforeAll(() => {
        this.server = app.callback();
    });

    afterAll(() => {
        this.server.close();
    });

    it('Hello world works', async (done) => {
        hippie(this.server)
          .get('/')
          .expectStatus(200)
          .end((err, res, body) => {
            if(err){
              throw err;
            }

            console.log(body);
            
            done();
          });
    });
});

