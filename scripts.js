const content = document.querySelector(".content");

const gridButton = document.createElement("button");
gridButton.textContent = "Set Grid Size";
content.appendChild(gridButton);

function gridSize(){
    let row = prompt("Please enter row size. Maximum 100", 1);
    let column = prompt("please enter column  size. Maximum 100", 1);

    if (row > 0 && column > 0){
        if (row <= 100 && column <= 100){
            let container = document.querySelectorAll("div.container");
            container.forEach((div)=>{
                div.remove();
            });
            for(let i = 1; i<= row; i++){
                const container = document.createElement("div");
                container.className = "container";
                gridContainer.appendChild(container);
                for(let j = 1; j <= column; j++){
                    const draw = document.createElement("div");
                    draw.className = "draw";
                    container.appendChild(draw);
                }
            }

            const drawDiv = document.querySelectorAll("div.draw");

            drawDiv.forEach((div) => {
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = "pink";
                });
            });
        }
    }
}

const gridContainer = document.createElement("div");
gridContainer.className = "gridContainer";
content.appendChild(gridContainer);

for (let i=1; i<=5; i++){
    const container = document.createElement("div");
    container.className = "container";
    gridContainer.appendChild(container);
    for (let j=1; j<=5; j++){
        const draw = document.createElement("div");
        draw.className = "draw";
        container.appendChild(draw);
    }
}

const drawDiv = document.querySelectorAll("div.draw");

drawDiv.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "pink";
    });
});

gridButton.onclick = gridSize;

