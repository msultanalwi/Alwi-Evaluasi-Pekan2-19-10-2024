// Diketahui sebuah data user seperti berikut ini : 
const user = [
    {
        id: 1,
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        hoby: 'coding'
    },
    {
        id: 2,
        username: 'ExKoi',
        email: 'exkoi01@gmail.com',
        hoby: 'gaming'
    }
]

// 1. Buatlah function expression yang bertugas untuk menambahkan data diatas

// code here

let addUser = function (id, username, email, hoby) {
    user.push({id, username, email, hoby }) // wajib pake {} agar muncul di dalam scope
    // Untuk JS terbaru tidak perlu jika properti tapi langsung ke parameter i.e = id : id kecuali jika param nya idUser.
    return 'Add User Successfully'
}

console(addUser(3, 'testing', 'testing@gmail.com','test'))
console.log(user);


// example result : 
// [
//     {
//         id: 1,
//         username: 'JohnDoe',
//         email: 'johndoe@gmail.com',
//         hoby: 'coding'
//     },
//     {
//         id: 2,
//         username: 'ExKoi',
//         email: 'exkoi01@gmail.com',
//         hoby: 'gaming'
//     },
//     {
//         id: 3,
//         username: 'test',
//         email: 'test@gmail.com',
//         hoby: 'reading'
//     }
// ]

// 2. Tambahkan properti role dengan value 'user' pada objek dari data array diatas
// clue: Gunakanlah method map()

// code here
//console.log(user.map(value dari properti, index dari array));
console.log(user.map((v) => ({...v, role: 'user'})); //(destructuring) ... utk copy semua properti dan valuenya
// atau cara manual
console.log(user.map(v => ({id: v.id, username: v.username, email: v.email, hoby: v.hoby,role: 'user' })));



// example result : 
// [
//     {
//       id: 1,
//       username: 'JohnDoe',
//       email: 'johndoe@gmail.com',
//       hoby: 'coding',
//       role: 'user'
//     },
//     {
//       id: 2,
//       username: 'ExKoi',
//       email: 'exkoi01@gmail.com',
//       hoby: 'gaming',
//       role: 'user'
//     }
//   ]

// 3, Diketahui sebuah segitiga memiliku alas 4 dan tinggi 3, buatlah function yang bertugas untuk menghitung luas segitiga
// note Rumus Luas Segetiga = 1/2 X alas X tinggi atau (alas X tinggi) / 2

// code here
// Jawab bebas make function apa aja, disini kita pakai arrow function

const calculateLuasSegitiga = (a, t) => {
    return 0.5  * a * t;

}
console.log(calculateLuasSegitiga(4,3))



// 4. Tukar nilai data dari variabel yang tersedia
function test() {
    let a = 1
    let b = 2

    console.log('a awal = ', a);
    console.log('b awal = ', b);

    // code here
    //  cara 1 :
    [a,b] = [b,a]
    
    //  cara 2 :
    a -= b 
    b += a
    a = b - a 
    console.log('a final = ', a);
    console.log('b final = ', b);
}

test()

// expetation result : 
// 'a awal = ', 1
// 'b awal = ', 2

// 'a final = ', 2
// 'b final = ', 1

// 5. Buatlah fungsi untuk melakukan pengecekan terhadap sebuah string bernilai palindrome atau tidak.
// note: Palindrome adalah kata, frasa, angka, atau urutan karakter yang dapat dibaca sama dari depan maupun belakang. Contoh yang paling sederhana adalah kata "malam" atau "level"

// code here
// Jawab pake Arrow Function
const checkPalindrome = word => {
    return word === word.split ("").reverse("").join("") // reverse => membalikan urutan element dalam array
}

// join() untuk nentuin pemisahnya kalo toSring() pake koma koma
console.log((checkPalindrome("malam")));
console.log(checkPalindrome("hari"));






















// function Palindrome (malam, level) {
//     let = malam = true
//         level = true
//     return Palindrome
// }
// console.log(Palindrome(malam, level));




// example result : true jika palindrome | false jika tidak palindrome