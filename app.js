// 1;
// if (confirm("Bugun qanday kun ekanligini bilmoqchimisiz?")) {
//   let raqam = prompt("1 dan 7 gacha sonni kiriting");
//   if (raqam <= 4) {
//     alert("Bugun ish kuningiz");
//   } else if (raqam == 5) {
//     alert(`bugun haftaning ${raqam} -kun Juma kichik dam olish kuningiz`);
//   } else if (raqam || raqam == 7) {
//     alert(`Bugun haftaning ${raqam} -kuningiz dam olish kuni . Maroqli hordiq`);
//   } else {
//     alert("Bunday hafta yo'q !");
//   }
// } else {
//   alert("Bekor qilish tugmasini bosdingiz !");
// }

// 2;
// let ball = prompt("To'plagan balingizni kiriting (0 dan 100 gacha):");

// if (ball >= 90 && ball <= 100) {
//   console.log("Siz - Al-Xorazmiy vorissiz! (A baho)");
// } else if (ball >= 70 && ball <= 89) {
//   console.log("Bilimingiz mustahkam, davom eting! (B baho)");
// } else if (ball >= 50 && ball <= 69) {
//   console.log("Yana bir oz harakat harakat, marra sizniki! (C baho)");
// } else if (ball < 50 && ball >= 0) {
//   console.log("Xafa bo'lish yo'q, qaytadan urinib ko'ring. (F baho)");
// } else {
//   console.log(
//     "Noto'g'ri qiymat kiritildi. Iltimos, 0 dan 100 gacha son kiriting.",
//   );
// }
// let harorat = prompt("Hozirgi haroratni kiriting:");

// if (harorat < 0) {
//     console.log("Muzlab qolmang, qalin palto va sharf taqing!");
// } else if (harorat >= 0 && harorat <= 15) {
//     console.log("Havo salqin, yengil kurtka kiyishingizni maslahat beramiz.");
// } else if (harorat > 15 && harorat <= 25) {
//     console.log("Ajoyib havo! Sviter yoki huddi (hoodie) yetarli.");
// } else if (harorat > 25) {
//     console.log("Issiq! Futbolka va shortik vaqti keldi.");
// } else {
//     console.log("Iltimos, haroratni son ko'rinishida kiriting.");
// }
// let joriyParol = "ustoz2026"; // Oldindan belgilangan parol
// let kiritilganParol = prompt("Hozirgi parolingizni kiriting:"); // 1-vazifa

// if (kiritilganParol === joriyParol) { // 2-vazifa: Parol to'g'riligini tekshirish
//     let yangiParol = prompt("Yangi parolni kiriting:");

//     if (yangiParol.length < 8) { // 3-vazifa: Uzunlikni tekshirish
//         console.log("Yangi parol kamida 8 ta belgidan iborat bo'lishi shart!");
//     } else if (yangiParol === joriyParol) { // 4-vazifa: Eski parol bilan bir xilligini tekshirish
//         console.log("Eski parolni qayta ishlata olmaysiz!");
//     } else { // 5-vazifa: Hamma shartlar bajarilganda
//         console.log("Parolingiz yangilandi!");
//     }
// } else {
//     console.log("Hozirgi parol noto'g'ri!");
// }
// let mashinaNarxi = 30000;
// let boshlangichTolov = 9000; // Mashina narxining 30% qismi
// let hamyon = prompt("Hamyoningizdagi pul miqdorini kiriting ($):");

// if (hamyon >= mashinaNarxi) {
//     // 1-shart: Pul mashina narxidan ko'p yoki teng bo'lsa
//     console.log("Tabriklaymiz! Mashina kalitini oling.");
// } else if (hamyon >= boshlangichTolov) {
//     // 2-shart: Pul yetmasa, lekin kamida 30% bo'lsa
//     confirm("Sizga kredit bera olamiz. Rozimisiz?");
// } else {
//     // 3-shart: Pul 30% dan ham kam bo'lsa
//     let kerakliMablag = boshlangichTolov - hamyon;
//     console.log("Afsuski, sizga kredit bermaymiz. Sizga yana " + kerakliMablag + " dollar pul kerak.");
// }
