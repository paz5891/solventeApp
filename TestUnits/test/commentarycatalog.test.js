/*var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api'; // AQUI DEBEN DE COLOCAR LA RUTA DEL SERVIDOR DE BACKEND O DEJARLO ASI SI QUIEREN TRABAJAR LOCALMENTE
var id_commentary1 = 0;
var cant_commentary = 0;

describe('Comentario: ', () => {
    it('Paso 1 Creacion de un comentario de una persona', (done) => {
        chai.request(url)
            .post('/commentarycatalog')
            .send({ id_person: 1001, commentary: "adios" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 2 mostrar un comentario de una persona', (done) => {
        chai.request(url)
            .get('/commentarycatalog/1001')
            .end(function (err, res) {
                id_commentary1 = res.body[Object.keys(res.body).length - 1].id_commentary;
                cant_commentary = Object.keys(res.body).length;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('commentary').to.be.equal('adios');
                done();
            });
    })
    it('Paso 3 actualizar un comentario de una persona', (done) => {
        chai.request(url)
            .put('/commentarycatalog')
            .send({ id_commentary: id_commentary1, commentary: "HELLO" })
            .end(function (err, res) {
                chai.request(url)
                    .get('/commentarycatalog/1001')
                    .end(function (err, res) {
                        expect(res.body[Object.keys(res.body).length - 1]).to.have.property('commentary').to.be.equal('HELLO');
                        done();
                    });
            });
    })
    it('Paso 4 eliminar un comentario de una persona', (done) => {
        chai.request(url)
            .delete('/commentarycatalog/' + id_commentary1)
            .end(function (err, res) {
                chai.request(url)
                    .get('/commentarycatalog/1001')
                    .end(function (err, res) {
                        let cant = Object.keys(res.body).length;
                        if (cant == (cant_commentary - 1)) {
                            expect(res).to.have.status(200);
                        } else {
                            expect(res).to.have.status(404);
                        }
                        done();
                    });
            });
    })
});*/