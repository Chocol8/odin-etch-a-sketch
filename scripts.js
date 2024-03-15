for (let i=1; i<=4; i++){
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    for (let j=1; j<=4; j++){
        const draw = document.createElement("div");
        draw.className = "draw";
        container.appendChild(draw);
    }
}