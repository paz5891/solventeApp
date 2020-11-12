var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api'; // AQUI DEBEN DE COLOCAR LA RUTA DEL SERVIDOR DE BACKEND O DEJARLO ASI SI QUIEREN TRABAJAR LOCALMENTE
var id = 0;
var cant = 0;

describe('Tipo de Persona: ', () => {
    it('Paso 1 Creacion de un registro para el tipo de persona', (done) => {
        chai.request(url)
            .post('/typepersoncatalog')
            .send({ type_person: "PRUEBA" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 2 OBTENER EL VALOR INGRESADO EN EL PASO 1', (done) => {
        chai.request(url)
            .get('/typepersoncatalog')
            .end(function (err, res) {
                id = res.body[Object.keys(res.body).length - 1].id_type_person;
                cant = Object.keys(res.body).length;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('type_person').to.be.equal('PRUEBA');
                done();
            });
    })
    it('Paso 3 actualizamos el registro obtenido del paso 2', (done) => {
        chai.request(url)
            .put('/typepersoncatalog')
            .send({ id_type_person: id, type_person: "PRUEBA 2" })
            .end(function (err, res) {
                chai.request(url)
                    .get('/typepersoncatalog')
                    .end(function (err, res) {
                        expect(res.body[Object.keys(res.body).length - 1]).to.have.property('type_person').to.be.equal('PRUEBA 2');
                        done();
                    });
            });
    })
    it('Paso 4 eliminar un registro de la tabla de tipo de personas', (done) => {
        chai.request(url)
            .delete('/typepersoncatalog/' + id)
            .end(function (err, res) {
                chai.request(url)
                    .get('/typepersoncatalog')
                    .end(function (err, res) {
                        let cantt = Object.keys(res.body).length;
                        if (cantt == (cant - 1)) {
                            expect(res).to.have.status(200);
                        } else {
                            expect(res).to.have.status(404);
                        }
                        done();
                    });
            });
    })
});