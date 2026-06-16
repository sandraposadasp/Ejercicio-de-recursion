const gifts = ["Cartera", "Reloj", "Mochila", "Bolsa de dama", "Coche de control remoto", "Televisión", "Celular", "Collar"];

function findGift(gifts, giftName, index = 0) {

     if (index >= gifts.length) {
        return "El regalo no está en la lista";
    }

     if (gifts[index] === giftName) {
        return "El regalo está en la posición: " + index;
    }

    return findGift(gifts, giftName, index + 1);
}