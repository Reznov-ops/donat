var character =
document.getElementById("character");
var block =
document.getElementById("block");
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function() {
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left")); 

        if (blockLeft<46 && characterTop>-70) {
    block.style.animation = "none";
    // block.style.display = "none"; pe heki se ma mir me nejt aty blloku
    alert("Get Pooped!");
    }
}, 10);