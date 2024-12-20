// Soal 
const murid = [
    [1, "Jacob", 3.5],
    [2, "Thomas", 3.0],
    [3, "James", 2.75]
]
// Syarat lulus IPK minimal 3.0

// Hasil (kunci jawaban cek di line 45)
/*
    1. Jacob, IPK = 3.5, Lulus
    2. Thomas, IPK = 3.0, Lulus
    3. James, IPK = 2.75, Gagal
*/

// Jawab




















// Jawaban

for(let i=0; i<murid.length; i++) {
    if(murid[i][2] >= 3.0) {
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " +
            murid[i][2] + ", Lulus");
    } else {
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " +
            murid[i][2] + ", Gagal");
    }
}