console.log("rdy");
let chess = document.querySelector("#chess");

for (let i = 1; i < 9; i++) {

    let box1 = document.createElement("div");

    if (i % 2 == 0) {

        box1.style.background = "#70433c";


    } else {

        box1.style.background = "#efe0d1";
    }


    if (i == 1) {

        // box1.textContent = "A8";
        box1.innerHTML = `<div><p  style ="text-align: center;  font-weight: bold; position: relative; top: 27px;">A8</p></div>`
    } else if (i == 2) {
        // box1.textContent = "B8";
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B8</p></div>`

    } else if (i == 3) {
        // box1.textContent = "C8";
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C8</p></div>`
    } else if (i == 4) {
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D8</p></div>`
            // box1.textContent = "D8";
    } else if (i == 5) {
        // box1.textContent = "E8";
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E8</p></div>`
    } else if (i == 6) {
        // box1.textContent = "F8";
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F8</p></div>`
    } else if (i == 7) {
        // box1.textContent = "G8";
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G8</p></div>`
    } else {
        // box1.textContent = "H8";
        box1.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H8</p></div>`
    }

    box1.addEventListener("click", () => {

        if (box1.classList.contains("red_border")) {

            box1.classList.remove("red_border");
        } else {
            box1.classList.add("red_border");
        }
        // box1.style.border = "2px solid red"
        // box1.className = "red_border";

    })

    chess.appendChild(box1);
}


for (let i = 1; i < 9; i++) {

    let box2 = document.createElement("div");
    if (i % 2 == 0) {
        box2.style.background = "#efe0d1";

    } else {
        box2.style.background = "#70433c";
    }


    if (i == 1) {
        // box2.textContent = "A8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">A7</p></div>`
    } else if (i == 2) {
        // box2.textContent = "B8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B7</p></div>`

    } else if (i == 3) {
        // box2.textContent = "C8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C7</p></div>`
    } else if (i == 4) {
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D7</p></div>`
            // box2.textContent = "D8";
    } else if (i == 5) {
        // box2.textContent = "E8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E7</p></div>`
    } else if (i == 6) {
        // box2.textContent = "F8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F7</p></div>`
    } else if (i == 7) {
        // box2.textContent = "G8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G7</p></div>`
    } else {
        // box3.textContent = "H8";
        box2.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H7</p></div>`
    }

    box2.addEventListener("click", () => {

        if (box2.classList.contains("red_border")) {

            box2.classList.remove("red_border");
        } else {
            box2.classList.add("red_border");
        }

    })


    chess.appendChild(box2);
}

for (let i = 1; i < 9; i++) {

    let box3 = document.createElement("div");
    if (i % 2 == 0) {
        box3.style.background = "#70433c";

    } else {
        box3.style.background = "#efe0d1";
    }
    if (i == 1) {
        // box3.textContent = "A8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">A6</p></div>`
    } else if (i == 2) {
        // box3.textContent = "B8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B6</p></div>`

    } else if (i == 3) {
        // box3.textContent = "C8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C6</p></div>`
    } else if (i == 4) {
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D6</p></div>`
            // box2.textContent = "D8";
    } else if (i == 5) {
        // box3.textContent = "E8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E6</p></div>`
    } else if (i == 6) {
        // box3.textContent = "F8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F6</p></div>`
    } else if (i == 7) {
        // box3.textContent = "G8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G6</p></div>`
    } else {
        // box3.textContent = "H8";
        box3.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H6</p></div>`
    }

    box3.addEventListener("click", () => {

        if (box3.classList.contains("red_border")) {

            box3.classList.remove("red_border");
        } else {
            box3.classList.add("red_border");
        }

    })

    chess.appendChild(box3);
}


for (let i = 1; i < 9; i++) {

    let box4 = document.createElement("div");
    if (i % 2 == 0) {
        box4.style.background = "#efe0d1";

    } else {
        box4.style.background = "#70433c";
    }
    if (i == 1) {
        // box4.textContent = "A8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">A5</p></div>`
    } else if (i == 2) {
        // box4.textContent = "B8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B5</p></div>`

    } else if (i == 3) {
        // box4.textContent = "C8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">C5</p></div>`
    } else if (i == 4) {
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">D5</p></div>`
            // box4.textContent = "D8";
    } else if (i == 5) {
        // box4.textContent = "E8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E5</p></div>`
    } else if (i == 6) {
        // box4.textContent = "F8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">F5</p></div>`
    } else if (i == 7) {
        // box4.textContent = "G8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G5</p></div>`
    } else {
        // box4.textContent = "H8";
        box4.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H5</p></div>`
    }

    box4.addEventListener("click", () => {
        if (box4.classList.contains("red_border")) {

            box4.classList.remove("red_border");
        } else {
            box4.classList.add("red_border");
        }
    })


    chess.appendChild(box4);
}

for (let i = 1; i < 9; i++) {

    let box5 = document.createElement("div");
    if (i % 2 == 0) {
        box5.style.background = "#70433c";

    } else {
        box5.style.background = "#efe0d1";
    }
    if (i == 1) {
        // box5.textContent = "A8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">A4</p></div>`
    } else if (i == 2) {
        // box5.textContent = "B8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B4</p></div>`

    } else if (i == 3) {
        // box5.textContent = "C8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C4</p></div>`
    } else if (i == 4) {
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D4</p></div>`
            // box5.textContent = "D8";
    } else if (i == 5) {
        // box5.textContent = "E8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E4</p></div>`
    } else if (i == 6) {
        // box5.textContent = "F8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F4</p></div>`
    } else if (i == 7) {
        // box5.textContent = "G8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">G4</p></div>`
    } else {
        // box5.textContent = "H8";
        box5.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H4</p></div>`
    }

    box5.addEventListener("click", () => {

        if (box5.classList.contains("red_border")) {

            box5.classList.remove("red_border");
        } else {
            box5.classList.add("red_border");
        }
    })

    chess.appendChild(box5);
}

for (let i = 1; i < 9; i++) {

    let box6 = document.createElement("div");
    if (i % 2 == 0) {
        box6.style.background = "#efe0d1";

    } else {
        box6.style.background = "#70433c";
    }

    if (i == 1) {
        // box6.textContent = "A8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">A3</p></div>`
    } else if (i == 2) {
        // box6.textContent = "B8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B3</p></div>`

    } else if (i == 3) {
        // box6.textContent = "C8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C3</p></div>`
    } else if (i == 4) {
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D3</p></div>`
            // box6.textContent = "D8";
    } else if (i == 5) {
        // box6.textContent = "E8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top:27px;">E3</p></div>`
    } else if (i == 6) {
        // box6.textContent = "F8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F3</p></div>`
    } else if (i == 7) {
        // box6.textContent = "G8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G3</p></div>`
    } else {
        // box6.textContent = "H8";
        box6.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H3</p></div>`
    }

    box6.addEventListener("click", () => {
        if (box6.classList.contains("red_border")) {

            box6.classList.remove("red_border");
        } else {
            box6.classList.add("red_border");
        }
    })

    chess.appendChild(box6);
}

for (let i = 1; i < 9; i++) {

    let box7 = document.createElement("div");
    if (i % 2 == 0) {
        box7.style.background = "#70433c";

    } else {
        box7.style.background = "#efe0d1";
    }

    if (i == 1) {
        // box7.textContent = "A8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">A2</p></div>`
    } else if (i == 2) {
        // box7.textContent = "B8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B2</p></div>`

    } else if (i == 3) {
        // box7.textContent = "C8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C2</p></div>`
    } else if (i == 4) {
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D2</p></div>`
            // box4.textContent = "D8";
    } else if (i == 5) {
        // box7.textContent = "E8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E2</p></div>`
    } else if (i == 6) {
        // box7.textContent = "F8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F2</p></div>`
    } else if (i == 7) {
        // box7.textContent = "G8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G2</p></div>`
    } else {
        // box7.textContent = "H8";
        box7.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H2</p></div>`
    }

    box7.addEventListener("click", () => {

        if (box7.classList.contains("red_border")) {

            box7.classList.remove("red_border");
        } else {
            box7.classList.add("red_border");
        }
    })

    chess.appendChild(box7);
}


for (let i = 1; i < 9; i++) {

    let box8 = document.createElement("div");
    if (i % 2 == 0) {
        box8.style.background = "#efe0d1";

    } else {
        box8.style.background = "#70433c";
    }

    if (i == 1) {
        // box8.textContent = "A8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">A1</p></div>`
    } else if (i == 2) {
        // box8.textContent = "B8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">B1</p></div>`

    } else if (i == 3) {
        // box8.textContent = "C8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">C1</p></div>`
    } else if (i == 4) {
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">D1</p></div>`
            // box8.textContent = "D8";
    } else if (i == 5) {
        // box8.textContent = "E8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">E1</p></div>`
    } else if (i == 6) {
        // box8.textContent = "F8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">F1</p></div>`
    } else if (i == 7) {
        // box8.textContent = "G8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">G1</p></div>`
    } else {
        // box8.textContent = "H8";
        box8.innerHTML = `<div><p style ="text-align: center; font-weight: bold; position: relative; top: 27px;">H1</p></div>`
    }

    box8.addEventListener("click", () => {
        if (box8.classList.contains("red_border")) {

            box8.classList.remove("red_border");
        } else {
            box8.classList.add("red_border");
        }
    })

    chess.appendChild(box8);
}