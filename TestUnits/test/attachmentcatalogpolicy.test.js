var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api'; // AQUI DEBEN DE COLOCAR LA RUTA DEL SERVIDOR DE BACKEND O DEJARLO ASI SI QUIEREN TRABAJAR LOCALMENTE
var id = 0;
var cant = 0;

describe('Catalogo de adjuntos de poliza: ', () => {
    it('Paso 1 Creacion de un registro para el catalogo de adjuntos de poliza', (done) => {
        chai.request(url)
            .post('/attachmentcatalogpolicy')
            .send({ attachment_catalog_policy: "PRUEBA" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 2 Obtener el valor ingresado en el paso 1', (done) => {
        chai.request(url)
            .get('/attachmentcatalogpolicy')
            .end(function (err, res) {
                id = res.body[Object.keys(res.body).length - 1].id_attachment_catalog_policy;
                cant = Object.keys(res.body).length;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('attachment_catalog_policy').to.be.equal('PRUEBA');
                done();
            });
    })
    it('Paso 3 Actualizar el registro obtenido en el paso 2', (done) => {
        chai.request(url)
            .put('/attachmentcatalogpolicy')
            .send({ id_attachment_catalog_policy: id, attachment_catalog_policy: "PRUEBA 2" })
            .end(function (err, res) {
                chai.request(url)
                    .get('/attachmentcatalogpolicy')
                    .end(function (err, res) {
                        expect(res.body[Object.keys(res.body).length - 1]).to.have.property('attachment_catalog_policy').to.be.equal('PRUEBA 2');
                        done();
                    });
            });
    })
    it('Paso 4 Eliminar un registro de la tabla de catalogos de adjuntos de poliza', (done) => {
        chai.request(url)
            .delete('/attachmentcatalogpolicy/' + id)
            .end(function (err, res) {
                chai.request(url)
                    .get('/attachmentcatalogpolicy')
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