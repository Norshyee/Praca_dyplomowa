function andGateOutput() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = a & b;

    document.getElementById("c").value = c;

    var svg = document.getElementById("and-gate").contentDocument;

    svg.getElementById("gA").style.stroke = (a == 1 ? "red" : "black");
    svg.getElementById("gB").style.stroke = (b == 1 ? "red" : "black");
    svg.getElementById("gC").style.stroke = (c == 1 ? "red" : "black");

    
};

function randomInputs() {
    document.getElementById("a").value = (Math.random()>=0.5)? 1 : 0;
    document.getElementById("b").value = (Math.random()>=0.5)? 1 : 0;
}