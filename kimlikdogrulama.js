let people = [
    { tc: "12345678901", isim: "Hızır", soyisim: "Çiçekdağ"},
    { tc: "98765432109", isim: "Tuğba", soyisim: "Köroğlu"},
    { tc: "11111111111", isim: "Emre", soyisim: "Haksever"}

    //bu kısım listeler olup kullanıcı tc, isim ve soyisimleri bulunmakta
];

function doğrula(){ // bu fonksiyon ile web sayfasında bulunan doğrula butonun işlevi gözükmekte
    const ad = document.getElementById('ad').value; 
    const soyad = document.getElementById('soyad').value;
    const tcno = document.getElementById('tcno').value;
    //web sayfasında girilen  input değerleri çağrılıyor.

    for (let i = 0; i < people.length; i++) {
        if (people[i].tc === tcno && people[i].isim === ad && people[i].soyisim === soyad) { 
        //yukardaki liste ve alınan input değerleri karşılaştırması yapılıyor.
          
          window.location.href = "hastanetipi.html"; 
          // Doğrulama başarılıysa hastanetipi.html sayfasına yönlendiriyor
          
          return false; //form gönderilmesini engelle
        }
    }

    alert("Girilen bilgilerle eşleşen bir kullanıcı bulunamadı.");
    return false; // Formun gönderilmesini engelle
}
