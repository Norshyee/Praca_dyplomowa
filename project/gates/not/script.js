function notGateOutput() {
    var a = document.getElementById("a").value;
    var c = (a == 0) ? '1' : '0';

    document.getElementById("c").value = c;

    var tableRows = document.getElementById("boardOfTruth").rows;
    for (const row of tableRows) {
        row.style.color = "black";
    }

    switch (a) {
        case '0':
            tableRows.item(1).style.color = "red";
            break;

        case '1':
            tableRows.item(2).style.color = "red";
            break;
    }

    var svg = document.getElementById("not-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (c == 1 ? "red" : "black");
};

function randomInputs() {
    var a = document.getElementById("a").value;
    document.getElementById("a").value = (a == 0) ? '1' : '0';
}