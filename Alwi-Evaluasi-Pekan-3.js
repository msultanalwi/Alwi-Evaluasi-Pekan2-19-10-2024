// RULE : 
// 1. Tidak diperbolehkan menggunakan AI untuk mencari solusi / jawaban
// 2. Diperbolehkan membaca dokumentasi ( W3School )
// 3. Kerjakan masing - masing
// 4. upload ke-github, kirim link max sampai jam 11:30

// 1. Buatlah perulangan untuk menampilkan output diconsole seperti dibawah ini :

// OUTPUT :
// 1 - Santai
// 2 - Berkualitas
// 3 - I Love Coding 
// 4 - Berkualitas

// 5 - Santai
// 6 - Berkualitas
// 7 - Santai
// 8 - Berkualitas


// 9 - I Love Coding
// 10 - Berkualitas
// 11 - Santai

// 12 - Berkualitas
// 13 - Santai
// 14 - Berkualitas
// 15 - I Love Coding
// 16 - Berkualitas
// 17 - Santai
// 18 - Berkualitas
// 19 - Santai
// 20 - Berkualitas

// code here
for  (x = 1 ; x < 20; x++ ) {
    if (x % 2 === 0 ) { 
        console.log(x + " Berkualitas");
    } else if  (x % 3 === 0) {
        console.log(x + " I Love Coding");
        } else {
            console.log(x + " Santai");}
    }


// 2. Diketahui nilaiSantri = [ 50, 90, 65, 67, 89, 80, 50, 97, 84 ], maka cari nilai rata- rata dari daftar nilai tersebut.

// code here
const myArray = [50, 90, 65, 67, 89, 80, 50, 97, 84]


let reduceArray = myArray.reduce((acc, curr) => acc + curr,0) {
    let rataRata = reduceArray /  myArray.length

}
console.log(reduceArray);


// 3.Buatlah sebuah fungsi yang menerima dua string sebagai parameter dan menentukan apakah kedua string tersebut adalah anagram.
// Kembalikan True jika kedua string adalah anagram, dan False jika tidak.

// note : Anagram adalah sebuah kata atau frasa yang terbentuk dengan mengubah urutan huruf dari kata atau frasa lain. Dalam anagram, semua huruf dari kata atau frasa asli harus digunakan dan harus membentuk kata atau frasa yang baru.
// Contohnya:
// "listen" dan "silent"
// "evil" dan "vile"
// "triangle" dan "integral"
// Anagram sering digunakan dalam permainan kata dan teka-teki. Jika kamu ingin membuat anagram, cukup ambil huruf dari satu kata dan coba susun ulang menjadi kata baru!

// code here
const checkanaragam = (a,b) => {
    return a.split ("").sort().join()=== b.split ("").sort().join();
}

console.log(checkanaragam("listen", "silent"));
console.log(checkanaragam("evil", "vile"));
console.log(checkanaragam("triangle", "integral"));






// 4. Selesaikan logic 1 soal 7

// code here
for (let y = 1; y < 10;y++) {
    for (let x = 1; x < 10; x++) {
        if (  x >= y && x + y <= 10 || x <= y && x + y >= 10 ) {
            document.write('+')
        }else {
        document.write("=")
    }
}
    document.write('<br/>')
} 

// 5. Selesaikan logic 1 soal 8

// code here
for (let y = 1; y < 10; y++) {
    for (let x = 1; x < 10; x++) {
        if ( x <= y && x + y <= 10 || x >= y && x + y >= 10) {
             document.write('*') 
        }else {
            document.write('=')}
        }
    document.write('<br>')
    }