window.alert("holla mundo")
console.log("funciona")

 const arrCrystals = [];
const arrImages = ["d-azul", "d-cinza", "d-dourado", "d-roxo", "d-verde"];

const selectedCrystal = { x: 0, y: 0 };
let score = 0;

//preenche array com imagens aleatórias e coordenadas
function fullfillArr() {
  let count = 0;
  while (true) {
    if (arrCrystals.length === 56) {
      break;
    }
    const aleatoryNumber = Math.floor(Math.random() * 5);
    arrCrystals.push({
      img: arrImages[aleatoryNumber],
      column: setColumnClass(count),
      row: setRowClass(count),
    });
    count++;
  }
}

//gera o "tabuleiro"
function generateBoard() {
  removeElements();
  verifySequences();
  for (let i = 0; i < arrCrystals.length; i++) {
    document.getElementById("gameBoard").insertAdjacentHTML(
      "beforeend",
      `
            <img class="crystalElements ${arrCrystals[i].img} column${arrCrystals[i].column} row${arrCrystals[i].row}" draggable="true" src="../images/${arrCrystals[i].img}.png" alt="" />
        `
    );
  }
}

//guarda as coordenadas iniciais da imagem
document.addEventListener("dragstart", (e) => {
  
  selectedCrystal.x = e.clientX;
  selectedCrystal.y = e.clientY;
  // console.log(selectedCrystal)
});

//coordenadas finais da imagem
document.addEventListener("dragend", (e) => {
  const startX = selectedCrystal.x;
  const startY = selectedCrystal.y;
  const currentX = e.clientX;
  const currentY = e.clientY;

  const differenceX = currentX > startX ? currentX - startX : startX - currentX;
  const differenceY = currentY > startY ? currentY - startY : startY - currentY;

  const column = e.target.classList[2][6];
  const row = e.target.classList[3][3];

  const elementPositionInArr = findElementByPosition(
    Number(column),
    Number(row)
  );

  if (differenceX >= 3 * differenceY) {
    if (currentX > startX) {
      const element1 = arrCrystals[elementPositionInArr].img;
      const element2 = arrCrystals[elementPositionInArr + 1].img;
      arrCrystals[elementPositionInArr].img = element2;
      arrCrystals[elementPositionInArr + 1].img = element1;

      const verification = verifySequences();
      if (verification === false) {
        arrCrystals[elementPositionInArr].img = element1;
        arrCrystals[elementPositionInArr + 1].img = element2;
      }

      generateBoard();
    } else {
      const element1 = arrCrystals[elementPositionInArr].img;
      const element2 = arrCrystals[elementPositionInArr - 1].img;
      arrCrystals[elementPositionInArr].img = element2;
      arrCrystals[elementPositionInArr - 1].img = element1;

      const verification = verifySequences();
      if (verification === false) {
        arrCrystals[elementPositionInArr].img = element1;
        arrCrystals[elementPositionInArr - 1].img = element2;
      }

      generateBoard();
    }
  } else if (differenceY >= 3 * differenceX) {
    if (currentY < startY) {
      const element1 = arrCrystals[elementPositionInArr].img;
      const element2 = arrCrystals[elementPositionInArr - 8].img;
      arrCrystals[elementPositionInArr].img = element2;
      arrCrystals[elementPositionInArr - 8].img = element1;

      const verification = verifySequences();
      if (verification === false) {
        arrCrystals[elementPositionInArr].img = element1;
        arrCrystals[elementPositionInArr - 8].img = element2;
      }

      generateBoard();
    } else {
      const element1 = arrCrystals[elementPositionInArr].img;
      const element2 = arrCrystals[elementPositionInArr + 8].img;
      arrCrystals[elementPositionInArr].img = element2;
      arrCrystals[elementPositionInArr + 8].img = element1;

      const verification = verifySequences();
      if (verification === false) {
        arrCrystals[elementPositionInArr].img = element1;
        arrCrystals[elementPositionInArr + 8].img = element2;
      }

      generateBoard();
    }
  }
});

//verifica por sequências e remove elementos
function verifySequences() {
  const arrLocations = [];

  for (let i = 0; i < arrCrystals.length; i++) {
    if (i >= 2) {
      if (
        arrCrystals[i].img === arrCrystals[i - 1].img &&
        arrCrystals[i].img === arrCrystals[i - 2].img
      ) {
        arrLocations.unshift(i);
        arrLocations.unshift(i - 1);
        arrLocations.unshift(i - 2);
      }
    }

    if (i > 15) {
      if (
        arrCrystals[i].img === arrCrystals[i - 8].img &&
        arrCrystals[i].img === arrCrystals[i - 16].img
      ) {
        arrLocations.unshift(i);
        arrLocations.unshift(i - 8);
        arrLocations.unshift(i - 16);
      }
    }
  }
  for (let n of arrLocations) {
    arrCrystals[n].img = "";
    dropBoxes();
  }
  if (arrLocations.length > 0) {
    return true;
  } else {
    return false;
  }
}

//encontra um item pelas coordenadas coluna e linha
function findElementByPosition(column, row) {
  for (let n = 0; n < arrCrystals.length; n++) {
    const item = arrCrystals[n];
    if (item.column === column && item.row === row) {
      return n;
    }
  }
}

//remove todos os elementos
function removeElements() {
  const elements = document.querySelectorAll(".crystalElements");
  for (let n of elements) {
    n.remove();
  }
}

//faz os itens "caírem"
function dropBoxes() {
  for (let i = 1; i <= 7; i++) {
    for (let i = arrCrystals.length - 1; i >= 0; i--) {
      if (i > 7) {
        if (arrCrystals[i].img === "") {
          const img1 = arrCrystals[i].img;
          const img2 = arrCrystals[i - 8].img;

          arrCrystals[i].img = img2;
          arrCrystals[i - 8].img = img1;
        }
      }
    }
  }

  generateNewItens();
}

//insere novas imagens aleatórias em espaços vazios
function generateNewItens() {
  for (let i = arrCrystals.length - 1; i >= 0; i--) {
    if (arrCrystals[i].img === "") {
      score++;
      setScore();
      const aleatoryNumber = Math.floor(Math.random() * 5);
      arrCrystals[i].img = arrImages[aleatoryNumber];
    }
  }
  verifySequences();
}

//altera a pontuação
function setScore() {
  document.getElementById("title").innerText = `Your score: ` + score;
}

//define a linha para um index
function setRowClass(i) {
  let rowClass = 0;
  if (i >= 0 && i <= 7) {
    rowClass = 1;
  } else if (i >= 8 && i <= 15) {
    rowClass = 2;
  } else if (i >= 16 && i <= 23) {
    rowClass = 3;
  } else if (i >= 24 && i <= 31) {
    rowClass = 4;
  } else if (i >= 32 && i <= 39) {
    rowClass = 5;
  } else if (i >= 40 && i <= 47) {
    rowClass = 6;
  } else if (i >= 48 && i <= 55) {
    rowClass = 7;
  }
  return rowClass;
}

//define a coluna para um index
function setColumnClass(i) {
  let columnClass = 0;
  if (
    i === 0 ||
    i === 8 ||
    i === 16 ||
    i === 24 ||
    i === 32 ||
    i === 40 ||
    i === 48
  ) {
    columnClass = 1;
  } else if (
    i === 1 ||
    i === 9 ||
    i === 17 ||
    i === 25 ||
    i === 33 ||
    i === 41 ||
    i === 49
  ) {
    columnClass = 2;
  } else if (
    i === 2 ||
    i === 10 ||
    i === 18 ||
    i === 26 ||
    i === 34 ||
    i === 42 ||
    i === 50
  ) {
    columnClass = 3;
  } else if (
    i === 3 ||
    i === 11 ||
    i === 19 ||
    i === 27 ||
    i === 35 ||
    i === 43 ||
    i === 51
  ) {
    columnClass = 4;
  } else if (
    i === 4 ||
    i === 12 ||
    i === 20 ||
    i === 28 ||
    i === 36 ||
    i === 44 ||
    i === 52
  ) {
    columnClass = 5;
  } else if (
    i === 5 ||
    i === 13 ||
    i === 21 ||
    i === 29 ||
    i === 37 ||
    i === 45 ||
    i === 53
  ) {
    columnClass = 6;
  } else if (
    i === 6 ||
    i === 14 ||
    i === 22 ||
    i === 30 ||
    i === 38 ||
    i === 46 ||
    i === 54
  ) {
    columnClass = 7;
  } else if (
    i === 7 ||
    i === 15 ||
    i === 23 ||
    i === 31 ||
    i === 39 ||
    i === 47 ||
    i === 55
  ) {
    columnClass = 8;
  }
  return columnClass;
}

fullfillArr();
generateBoard();