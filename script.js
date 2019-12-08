
var validc1 = false;
var good = false;
var password = [];
var type;
var entry;
var passGen;
var input;
var combo1 = ['sc', 'nc', 'lc', 'uc',];
var combo2 = ['nc', 'lc', 'uc',];
var combo3 = ['sc', 'lc', 'uc',];
var combo4 = ['sc', 'nc', 'uc',];
var combo5 = ['sc', 'nc', 'lc',];
var combo6 = ['sc', 'nc',];
var combo7 = ['sc', 'lc',];
var combo8 = ['sc', 'uc',];
var combo9 = ['nc', 'lc',];
var combo10 = ['nc', 'uc',];
var combo11 = ['lc', 'uc',];
var sc = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var nc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generate() {
    var c1 = prompt("Enter how long you would like your password to be. (8 - 128)");
    password.length = c1;

    while (!validc1) {
        if (c1 < 8 || c1 > 128) {
            c1 = prompt("Invalid entry! Must be between 8 and 128!");
        }
        else {
            validc1 = true;
            password.length = c1;
        }
    }

    var c2 = confirm("Do you want Special Characters? (!@#$%)");
    var c3 = confirm("Do you want Numeric Characters? (12345)");
    var c4 = confirm("Do you want Lowercase Characters? (abcde)");
    var c5 = confirm("Do you want Uppercase Characters? (FGHIJ)");

    if (c2 === true || c3 === true || c4 === true || c5 === true) {
        good = true;
    }
    else {
        good = false;
    }

    while (!good) {
        alert("Must confirm at least 1 criteria!")
        var c2 = confirm("Do you want Special Characters? (!@#$%)");
        var c3 = confirm("Do you want Numeric Characters? (12345)");
        var c4 = confirm("Do you want Lowercase Characters? (abcde)");
        var c5 = confirm("Do you want Uppercase Characters? (FGHIJ)");

        if (c2 === true || c3 === true || c4 === true || c5 === true) {
            good = true;
        }
        else {
            good = false;
        }
    }

    if (c2 === true && c3 === true && c4 === true && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo1[Math.floor(Math.random() * 4)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else if (type === 'nc') {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
            else if (type === 'lc') {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === false && c3 === true && c4 === true && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo2[Math.floor(Math.random() * 3)];
            if (type === 'nc') {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
            else if (type === 'lc') {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === false && c4 === true && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo3[Math.floor(Math.random() * 3)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else if (type === 'lc') {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === true && c4 === false && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo4[Math.floor(Math.random() * 3)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else if (type === 'nc') {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === true && c4 === true && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            type = combo5[Math.floor(Math.random() * 3)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else if (type === 'nc') {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
            else {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === true && c4 === false && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            type = combo6[Math.floor(Math.random() * 2)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === false && c4 === true && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            type = combo7[Math.floor(Math.random() * 2)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === false && c4 === false && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo8[Math.floor(Math.random() * 2)];
            if (type === 'sc') {
                entry = sc[Math.floor(Math.random() * 32)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === false && c3 === true && c4 === true && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            type = combo9[Math.floor(Math.random() * 2)];
            if (type === 'nc') {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
            else {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === false && c3 === true && c4 === false && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo10[Math.floor(Math.random() * 2)];
            if (type === 'nc') {
                entry = nc[Math.floor(Math.random() * 10)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === false && c3 === false && c4 === true && c5 === true) {
        for (var x = 0; x < password.length; x++) {
            type = combo11[Math.floor(Math.random() * 2)];
            if (type === 'lc') {
                entry = lc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
            else {
                entry = uc[Math.floor(Math.random() * 26)];
                password[x] = entry;
            }
        }
    }
    else if (c2 === true && c3 === false && c4 === false && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            entry = sc[Math.floor(Math.random() * 32)];
            password[x] = entry;
        }
    }
    else if (c2 === false && c3 === true && c4 === false && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            entry = nc[Math.floor(Math.random() * 10)];
            password[x] = entry;
        }
    }
    else if (c2 === false && c3 === false && c4 === true && c5 === false) {
        for (var x = 0; x < password.length; x++) {
            entry = lc[Math.floor(Math.random() * 26)];
            password[x] = entry;
        }
    }
    else {
        for (var x = 0; x < password.length; x++) {
            entry = uc[Math.floor(Math.random() * 26)];
            password[x] = entry;
        }
    }

    console.log(password.join(''));
    input = document.getElementById("exampleFormControlTextarea1");
    input.value = password.join('');
    console.log(input.value);
}

function copy() {
    var copyPassword = document.getElementById("exampleFormControlTextarea1");
    copyToClipboard(copyPassword.value);
    alert("Copied new password: " + copyPassword.value);
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
