// Preventing screenshots
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 44) {
        stopPrntScr();
    }
});

function stopPrntScr() {
    var inpFld = document.createElement("input");
    inpFld.setAttribute("value", ".");
    inpFld.setAttribute("width", "0");
    inpFld.style.height = "0px";
    inpFld.style.width = "0px";
    inpFld.style.border = "0px";
    document.body.appendChild(inpFld);
    inpFld.select();
    document.execCommand("copy");
    inpFld.remove(inpFld);
}

// Preventing context menu for right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Preventing copying using keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.metaKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
        e.preventDefault();
    }
});

// Blur the content when the window loses focus
window.addEventListener('blur', function() {
    document.body.style.filter = 'blur(5px)';
});

window.addEventListener('focus', function() {
    document.body.style.filter = 'none';
});

// Warning message for screenshot attempt
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 44) { // Print Screen key
        alert("Screenshots are disabled on this webpage.");
    }
});
