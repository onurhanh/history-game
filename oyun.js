alert("Ormanda yürürken bir yol ayrimina geldiniz.");


let birinciSecim = prompt("Hangi yolu seçeceksiniz? Sağ (yaz: 'sag') veya Sol (yaz: 'sol')").toLocaleLowerCase();

if (birinciSecim === "sag") {
    alert("Bir nehirle karşilaştiniz")
    let ikinciSecim = prompt("Nehri yüzerek geçmek mi ('yuz') yoksa geri dönmek mi ('geri') istiyorsunuz?").toLocaleLowerCase();

    if (ikinciSecim === "yuz") {
        alert("Nehri yüzerek geçtiniz, ancak timsahlar sizi yakaladi! Oyunu kaybettiniz.");
    } else if (ikinciSecim === "geri") {
        alert("Geri döndünüz ve ormanda güvenli bir şekilde yürüyüşe devam ettiniz. Oyunu kazandiniz")
    } else {
        alert("Geçersiz bir seçim yaptiniz, hikaye burada sona erdi.");
    }
} else if (birinciSecim === "sol") {
    alert("Bir mağaraya girdiniz!");
    ikinciSecim = prompt("Mağaraya girmek mi ('gir') yoksa kaçmak mi ('kac') istiyorsunuz?").toLocaleLowerCase();
    if (ikinciSecim === "gir") {
        alert("Mağarada altinlar buldunuz! Oyunu kazandiniz!");
    } else if (ikinciSecim === "kac") {
        alert("Kaçarken bir kurt sürüsüyle karşilaştiniz. Oyunu kaybettiniz."); İ
    } else {
        alert("Geçersiz bir seçim yaptiniz, hikaye burada sona erdi.");
    }
}

















