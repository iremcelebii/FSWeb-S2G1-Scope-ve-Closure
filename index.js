//README DOSYASINDAKİ ADIMLARI TAKİP ETTİKTEN SONRA AŞAĞIDAKİLERİ YAPINIZ

// Başlangıç Challenge'ı

/**Örnek Görev: İlkini Dön
 * 
 * Bu örnek sonradan gelecek olan görevleri nasıl çözeceğinizi size gösterecek.
 * 
 * Aşağdıaki Yüksek dereceden fonskiyonu(higher-order function) kullanarak aşağıdakileri yapınız
 *  1. Stringlerden oluşan bir array'i parametre olarak alın
 *  2. Bir string'i değişken olarak alan bir callback fonksiyonunu parametre olarak alın 
 *  3. Array'in İLK elemanını değişken olarak alarak çalışacak olan callback fonksiyonunun sonucunu dönün
 * 
 * Aşağıdaki kodlar bu görevin nasıl yapılacağına örnek olacaktır
 * Bu fonskiyon 'asas' dönmeli(return)
*/

/*
foksiyon tanımlama yöntemleri: 3 tane var

1)function ikiyleCarp1 (sayi){
  return sayi*2;
}
2)const ikiyleCarp2 = function(sayi){
   return sayi*2;
  }

3)const ikiyleCarp3 = (sayi) =>{
  return sayi*2;
}

4)const ikiyleCarp4 = (sayi) => sayi*2;

map, filter, reduce, foreach -->parametre olarak fonksiyon alıyorlar.


Nasıl random sayı üretiriz? --> Math.floor.(Math.random()*100); -->0-100 aarası rassal sayı. 
Normalde Math.random() 0-1 arası üretir.
Küsüratlı değer almamak için Math.Floor içinde yazıyoruz

Scope çeşitleri: 
1)block scope (loop, condition, f)
2)function scope
3)global scope  --> en dışarda kalan scope
anne-çocuk örneği: en içteki scope dıştakilere erişebilir. ancak dıştaki scope içtekine erişemez.
eğer scope içindeki bir şeyi scope dışında kullanmak istiyorsak return etmeliyiz*/

//callback diye isimlendirmemizin nedeni onu daha önce tanımladığımız ve şimdi kullanacağımız bir fonksiyon olduğunu anlamak


console.clear();

function metinFonksiyonu (metin){
  return metin+metin};

function ilkiniDon(stringArray, callback) {
  return callback(stringArray[0])
}

console.log('örnek görev:', ilkiniDon(['as','sa'], metinFonksiyonu));

// Başlangıç Challenge'ı Sonu


///// M V P ///////

/*Görev 1: macSkoru()
  
  Aşağıdaki skor1 ve skor2 kodlarını inceleyiniz ve aşağıdaki soruları altına not alarak cevaplayın
  
  1. skor1 ve skor2 arasındaki fark nedir?
  //skor1 de skor değişkeni fonksiyonun scope u içerisinde tanımlanmış. skor2 de ise global scope da tanımlanmış. 
  //ilkinde foksiyon bir fonksiyon dönerken ikincisi değer dönüyor
  2. Hangisi bir closure kullanmaktadır? Nasıl tarif edebilirsin? (yarınki derste öğreneceksin :) )
  //skor 1 kodunda closure var. normalde bir fonksiyonun içinde tanımlanmış değerler programda yer kaplamaz. 
  //fonksiyonun içinde kullanılır ve silinir. 
  //ama skor1 de içteki fonsiyon dıştaki fonksiyonda olan bir değeri kullandığı için bu değer korunacak. buna closure denir.
  3. Hangi durumda skor1 tercih edilebilir? Hangi durumda skor2 daha mantıklıdır?
//mümkün olduğunca global scope da değişken tanımlamasak daha iyi. bu yüzden skor 1 i tercih etmek daha mantıklı olabilir.
//skor değerine dışardan, globalden ulaşılsın istiyorsak, o değeri kullanmamız gerekiyorsa skor 2 tercih edilebilir.

*/

// skor1 kodları
function skorArtirici() {
  let skor = 0; // bir alt fonksiyonun içinde tanımlayınca değer sürekli sıfırlanıyor
  return function skorGuncelle() {

   return skor++;
  }
}
const skor1 = skorArtirici();
console.log("skor1 değeri:" + skor1());
console.log("skor1 değeri:" + skor1());

// console.log("skor1 değeri:" + skorArtirici()); //neden bu şekilde hata veriyor?

// skor2 kodları
let skor = 0;

function skor2() {
  return skor++;
}

console.log("skor2 değeri:" + skor2());
console.log("skor2 değeri:" + skor2());
console.log("skor2 değeri:" + skor2());

/* Görev 2: takimSkoru() 
Aşağıdaki takimSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Bir çeyrekte bir takımın ürettiği skoru rastgele(random) elde eden bir sonuc dönünüz(return)
  
  Ön Bilgi: Bir çeyrekte takımlar ortalama 10 ile 25 sayı üretebiliyor
  Örnek: takimSkoru çağrıldığında 10-25 arasında bir skor dönmeli
  
Not: Bu fonskiyon, aşağıdaki diğer görevler için de bir callback fonksiyonu olarak da kullanılacak
*/
//!--------------------------------------------------------------------------------------------------------------------------------------
function takimSkoru(){
 return  Math.floor((Math.random()*16)+10); //!!! 15 değil 16 çünkü 10-25(dahil) arasında 16 sayı var.
}
console.log(takimSkoru());

//!--------------------------------------------------------------------------------------------------------------------------------------

/* Görev 3: macSonucu() 
Aşağıdaki macSonucu() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. Bir basketbol maçında oynanan çeyrek sayısını ikinci parametre olarak alın
  3. Her çeyrekte EvSahibi ve KonukTakim için bir skor oluşturun
  4. Her oynanan çeyrekten sonra EvSahibi ve KonukTakim için skoru güncelleyin
  5. Son çeyrekten sonra, maçın bitiş skorunu bir object olarak dönün(return)

  Örneğin: macSonucu(takimSkoru, 4) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 92,
  "KonukTakim": 80
}
*/ 
//!---------------------------------------------------------------------------------------------
function macSonucu(cbSkor, ceyrekSayisi){
  let evSahibi=0;
  let konuk=0;
  for(let i=1; i<ceyrekSayisi+1; i++){ //!salak olduğum için <= yazmak gelmemiş aklıma

    evSahibi += cbSkor();
    konuk += cbSkor(); //! burada () koyarak fonksiyonu çalıştırıyoruz.
    console.log(`evsahibinin ${i}. çeyrek sonunda skoru: ${evSahibi}`);
    console.log(`konuğun ${i}.  çeyrek sonunda skoru: ${konuk}`);
  }
 let obje ={
    "EvSahibi": evSahibi,
    "KonukTakim":konuk
 }
 // return `"EvSahibi":${evSahibi}, "KonukTakim":${konuk}`; //!salak olduğum için obje yazdığını görmemişim
//  return ("EvSahibi:"+ evSahibi+ ","+ " KonukTakim:" + konuk);
return obje;
}

console.log (macSonucu(takimSkoru, 2)); //!takimSkoru() şeklinde yazmıyorum, böyle yazarsam fonksiyon çalışır ve fonksiyon sonucunda oluşan değer gönderilir fonksiyona.
//!---------------------------------------------------------------------------------------------------------------------------------------



/* Zorlayıcı Görev 4: periyotSkoru()
Aşağıdaki periyotSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. takimSkoru callback fonksiyonunu kullanarak, EvSahibi ve KonukTakim için bir skor üretin
  3. Bir object olarak EvSahibi ve KonukTakim skorunu dönün
  
Örneğin: periyotSkoru(takimSkoru) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 18,
  "KonukTakim": 12
}
  */

//!-------------------------------------------------------------------------------------------------------------------------------------
function periyotSkoru(cbSkor) {

let evSahibi= cbSkor();
let konuk = cbSkor();
let obje ={
  "EvSahibi": evSahibi,
  "KonukTakim": konuk
}
return obje;

}
console.log(periyotSkoru(takimSkoru));

//!-------------------------------------------------------------------------------------------------------------------------------------

/* Zorlayıcı Görev 5: skorTabelasi() 
Aşağıdaki skorTabelasi() fonksiyonunu kullanarak aşağıdakileri yapınız:
  1. İlk parametre olarak Görev 4'te oluşturduğumuz 'periyotSkoru'nu bir değişken olarak almalı
  2. İkinci parametre olarak Gröev 2'de oluşturduğumuz 'takimSkoru'nu bir değişken olarak almalı
  3. Üçüncü parametre olarak da oynanacak olan çeyrek sayısını alın
  4. Her bir çeyreğin sonucunu bir string olarak bir array içinde dönün. Aşadaki örnek gibi olmalı. Her çeyrekteki atılan sayıları ayrı ayrı yazmalı(toplam skoru değil!).
  5. Eğer maç berabere biterse uzatmalar oynanmalı ve "Uzatma 1: Ev Sahibi 13 - Konuk Takım 11" eklemeli. (Her uzatma için ayrı ayrı eklemeli)
  6. Maç bitince de final skoru yazmalı: "Maç Sonucu: Ev Sahibi 101 - Konuk Takım 98"

MAÇ UZAMAZ ise skorTabelasi(periyotSkoru,takimSkoru,4)
  
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 11", 
  "Maç Sonucu: Ev Sahibi 61 - Konuk Takım 54"  
]

MAÇ UZAR ise skorTabelasi(periyotSkoru,takimSkoru,4)
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 18",
  "1. Uzatma: Ev Sahibi 10 - Konuk Takım 6" 
  "Maç Sonucu: Ev Sahibi 71 - Konuk Takım 67"  
]
] */
// NOTE: Bununla ilgili bir test yoktur. Eğer logladığınız sonuçlar yukarıdakine benziyor ise tmamlandı sayabilirsiniz.

function skorTabelasi(cbperiyotSkoru, cbtakimSkoru, ceyrekSayisi) {
  let array =[];
  let evSahibi=0;
  let konuk=0;
  for(let i=1; i<=ceyrekSayisi; i++){
    let obje = cbperiyotSkoru(cbtakimSkoru); //!istediği argüman varsa onları yazmayı unutma
    evSahibi +=obje["EvSahibi"];
    konuk +=obje["KonukTakim"];
    array.push(i + ". Periyot: Ev Sahibi " + obje["EvSahibi"]+ " - Konuk Takım " + obje["KonukTakim"]) ;
  }
  let ii=1;
  while (evSahibi==konuk){
    let obje2 = cbperiyotSkoru(takimSkoru); //!istediği argüman varsa onları yazmayı unutma
    evSahibi +=obje2["EvSahibi"];
    konuk +=obje2["KonukTakim"];
    array.push(i + ". Uzatma: Ev Sahibi " + obje2["EvSahibi"]+ " - Konuk Takım " + obje2["KonukTakim"]) ;
    ii++;
  }
  array.push("Maç Sonucu: Ev Sahibi" + evSahibi+ " - Konuk Takım " + konuk) ;
  return array;
}
console.log(skorTabelasi(periyotSkoru, takimSkoru, 4));



/* Aşağıdaki satırları lütfen değiştirmeyiniz*/
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  ilkiniDon,
  skor1,
  skor2,
  takimSkoru,
  macSonucu,
  periyotSkoru,
  skorTabelasi,
}
