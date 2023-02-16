function andGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = a & b;

    document.getElementById("c").value = c;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
        case '0':
            if (b == '0')
                tableRows.item(1).style.color = "red";
            else
                tableRows.item(3).style.color = "red";
            break;

        case '1':
            if (b == '0')
                tableRows.item(2).style.color = "red";
            else
                tableRows.item(4).style.color = "red";
            break;
    }

    var svg = document.getElementById("and-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (c == 1 ? "red" : "black");


};

function randomInputs() {
    document.getElementById("a").value = (Math.random() >= 0.5) ? 1 : 0;
    document.getElementById("b").value = (Math.random() >= 0.5) ? 1 : 0;
}