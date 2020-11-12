var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api'; // AQUI DEBEN DE COLOCAR LA RUTA DEL SERVIDOR DE BACKEND O DEJARLO ASI SI QUIEREN TRABAJAR LOCALMENTE
var id = 0;
var cant = 0;
var id_rol = 0;
var id_menu = 0;
var idd = 0;
var id_roll = 0;
var id_menuu = 0;

describe('Rol Menu: ', () => {
    it('Paso 1 Creacion de un registro para el rol', (done) => {
        chai.request(url)
            .post('/rolcatalog')
            .send({ rol: "PRUEBA" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 2 OBTENER EL VALOR INGRESADO EN EL PASO 1', (done) => {
        chai.request(url)
            .get('/rolcatalog')
            .end(function (err, res) {
                id_rol = res.body[Object.keys(res.body).length - 1].id_rol;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('rol').to.be.equal('PRUEBA');
                done();
            });
    })
    it('Paso 3 Creacion de un registro para el catalogo de menu', (done) => {
        chai.request(url)
            .post('/menucatalog')
            .send({ menu: "PRUEBA" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 4 OBTENER EL VALOR INGRESADO EN EL PASO 3', (done) => {
        chai.request(url)
            .get('/menucatalog')
            .end(function (err, res) {
                id_menu = res.body[Object.keys(res.body).length - 1].id_menu;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('menu').to.be.equal('PRUEBA');
                done();
            });
    })

    it('Paso 5 Creacion de un registro para la asignacion de menu a un rol', (done) => {
        chai.request(url)
            .post('/rolmenu')
            .send({ id_menu: id_menu,id_rol: id_rol })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 6 OBTENER EL VALOR INGRESADO EN EL PASO 5', (done) => {
        chai.request(url)
            .get('/rolmenu')
            .end(function (err, res) {
                id = res.body[Object.keys(res.body).length - 1].id_rol_menu;
                cant = Object.keys(res.body).length;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('menu').to.be.equal('PRUEBA');
                done();
            });
    })
    it('Paso 7 Creacion de un registro para el rol', (done) => {
        chai.request(url)
            .post('/rolcatalog')
            .send({ rol: "PRUEBA 1" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 8 OBTENER EL VALOR INGRESADO EN EL PASO 7', (done) => {
        chai.request(url)
            .get('/rolcatalog')
            .end(function (err, res) {
                id_roll = res.body[Object.keys(res.body).length - 1].id_rol;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('rol').to.be.equal('PRUEBA 1');
                done();
            });
    })
    it('Paso 9 Creacion de un registro para el catalogo de menu', (done) => {
        chai.request(url)
            .post('/menucatalog')
            .send({ menu: "PRUEBA 1" })
            .end(function (err, res) {
                expect(res.body).to.be.equal("CREATED SUCCESSFULLY");
                done();
            });
    });
    it('Paso 10 OBTENER EL VALOR INGRESADO EN EL PASO 9', (done) => {
        chai.request(url)
            .get('/menucatalog')
            .end(function (err, res) {
                id_menuu = res.body[Object.keys(res.body).length - 1].id_menu;
                expect(res.body[Object.keys(res.body).length - 1]).to.have.property('menu').to.be.equal('PRUEBA 1');
                done();
            });
    })
    it('Paso 11 actualizamos el registro obtenido del paso 6', (done) => {

        chai.request(url)
            .put('/rolmenu')
            .send({ id_menu: id_menuu,id_rol: id_roll,id:id })
            .end(function (err, res) {
                chai.request(url)
                    .get('/menucatalog')
                    .end(function (err, res) {
                        expect(res.body[Object.keys(res.body).length - 1]).to.have.property('menu').to.be.equal('PRUEBA 1');
                        done();
                    });
            });
    })
    it('Paso 12 eliminar un registro de la tabla de catalogo de menu', (done) => {
        chai.request(url)
            .delete('/rolmenu/' + id)
            .end(function (err, res) {
                chai.request(url)
                    .get('/rolmenu')
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