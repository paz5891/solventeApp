var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api'; // AQUI DEBEN DE COLOCAR LA RUTA DEL SERVIDOR DE BACKEND O DEJARLO ASI SI QUIEREN TRABAJAR LOCALMENTE
var id = 0;
var id_department = 0;
var cant = 0;

describe('Municipio: ', () => {
    it('Paso 1 Creacion de un registro para el departamento', (done) => {
        chai.request(url)
            .post('/departmentcatalog')
            .send({ department: "PRUEBA" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 2 OBTENER EL VALOR INGRESADO EN EL PASO 1', (done) => {
        chai.request(url)
            .get('/departmentcatalog')
            .end(function (err, res) {
                id_department = res.body[Object.keys(res.body).length - 1].id_department;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('department').to.be.equal('PRUEBA');
                done();
            });
    })
    it('Paso 3 Creacion de un registro para la municipalidad', (done) => {
        chai.request(url)
            .post('/municipalitycatalog')
            .send({id_department:id_department ,municipality: "PRUEBA" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 4 OBTENER EL VALOR INGRESADO EN EL PASO 3', (done) => {
        chai.request(url)
            .get('/municipalitycatalog/'+id_department)
            .end(function (err, res) {
                id = res.body[Object.keys(res.body).length - 1].id_municipality;
                cant = Object.keys(res.body).length;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('municipality').to.be.equal('PRUEBA');
                done();
            });
    })
    it('Paso 5 actualizamos el registro obtenido del paso 4', (done) => {
        chai.request(url)
            .put('/municipalitycatalog')
            .send({ id_municipality: id,id_department:id_department, municipality: "PRUEBA 2" })
            .end(function (err, res) {
                chai.request(url)
                    .get('/municipalitycatalog/'+id_department)
                    .end(function (err, res) {
                        expect(res.body[Object.keys(res.body).length - 1]).to.have.property('municipality').to.be.equal('PRUEBA 2');
                        done();
                    });
            });
    })
    it('Paso 6 eliminar un registro de la tabla de municipalidad', (done) => {
        chai.request(url)
            .delete('/municipalitycatalog/' + id)
            .end(function (err, res) {
                chai.request(url)
                    .get('/municipalitycatalog/'+id_department)
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