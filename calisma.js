var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";  // Changed "Close" to "close" for consistency
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");  // Changed "Close" to "close"
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener('click', function(check) {
    if (check.target.tagName === 'LI') {  // Changed "li" to "LI" for consistency
        check.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === '') {
        alert("Listeye Yeni Öge Eklemediniz!");  // Corrected the alert message
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById('myInput').value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    close = document.getElementsByClassName("close");  // Reassigned close variable
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}