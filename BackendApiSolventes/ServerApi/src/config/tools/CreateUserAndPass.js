'use strict'
const Cryptr = require('cryptr');
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}
//FUNCION PARA GENERAR UN USUARIO CON CARACTERES ALEATORIOS
export const makeusername = (fn, sn, fs, ss) => {
    var username = '';
    username = (fn.substring(1, 4).trim() + sn.substring(1, 4).trim() + fs.substring(1, 4).trim() + ss.substring(1, 4).trim()).trim()
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 4; i++) {
        username += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return username;
}
//FUNCION PARA GENERAR Y ENCRIPTAR LA PASSWORD
export const makepassword = (length) => {
    const cryptr = new Cryptr('Wa@bB7NYK^Zqt)^ZwSJz0uUyOE#P#qVX*#z9A7POjjGizXlPEMSqprypJmNKVtIh89PSd8O@uFA7hOtEq4J^^M9Mungtaj$10p(R%*H5d8LR2mNlV06Y72aSBGX*OOOW');
    var password = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const hash = cryptr.encrypt(password);
    return hash;
}

//FUNCION PARA OBTENER EL PASSWORD
export const decryptpassword = (password) => {
    const cryptr = new Cryptr('Wa@bB7NYK^Zqt)^ZwSJz0uUyOE#P#qVX*#z9A7POjjGizXlPEMSqprypJmNKVtIh89PSd8O@uFA7hOtEq4J^^M9Mungtaj$10p(R%*H5d8LR2mNlV06Y72aSBGX*OOOW');
    const hash = cryptr.decrypt(password);
    return hash;
}