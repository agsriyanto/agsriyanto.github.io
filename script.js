let count = 0;
let countHTML = document.getElementById("score")
function tukarTempat(cell1, cell2) {
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function checkSlesai(params) {
    let index2 = 1;
    let slesai = true;
    for (let i = 1; i < 10; i++) {
        let index1 = Math.ceil(i/3)
        if (document.getElementById(`cell${index1}${index2}`).className !== `kotak${i}`) {
            slesai = false
        }
        index2++
        if (i % 3 === 0) {
            index2 = 1
        }
    }
    // console.log(slesai);
    if (slesai) {
        setTimeout(() => {
            let result = count
            alert(`Selamat!!!  Anda berhasil menyelesaikan game dengan Move ${result} kali.`)
            count = 0;
            countHTML.innerHTML = 0
        }, 500)
    }
}

function pilihKotak(row, column) {
    let cell = document.getElementById("cell" + row + column);
    let tile = cell.className;
    console.log(count);
    if (tile != "kotak9") { 
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "kotak9") {
                tukarTempat("cell" + row + column, "cell" + row + (column + 1));
                count++
                countHTML.innerHTML = count
                checkSlesai()
                return;
            }
        }
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "kotak9") {
             tukarTempat("cell" + row + column, "cell" + row + (column - 1));
             count++
             countHTML.innerHTML = count
             checkSlesai()
             return;
            }
        }
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "kotak9") {
                tukarTempat("cell" + row + column, "cell" + (row-1) + column);
                count++
                countHTML.innerHTML = count
                checkSlesai()
                return;
            }
        }
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "kotak9") {
                tukarTempat("cell" + row + column, "cell" + (row + 1) + column);
                count++
                countHTML.innerHTML = count
                checkSlesai()
                return;
            }
        }
    }
}

function acakKotak() {
    for (let row = 1; row <= 3; row++) {
        for (let column = 1; column <= 3; column++) {
            let row2 = Math.floor(Math.random()*3 + 1);
            let column2 = Math.floor(Math.random()*3 + 1);
            tukarTempat("cell" + row + column, "cell" + row2 + column2);
        } 
    } 
}
