
var getplayerClass = function () {
    var style = "";
    window.alert("You can choose to be a Barbarian or a Fighter.");
    window.alert("A Barbarian has higher attack but lower health. A Fighter has lower attack but higher health.");
    
    style = window.prompt("Choose 'Fighter' or 'Barbarian'");
    if (style === "" || style === null) {
        window.alert("You need to provide a valid answer! Try again!")
        return getplayerClass();
    }
    style = style.toLowerCase();
    if (style === 'barbarian') {
        var confirmBarbarian = window.confirm("Are you sure you want to be a Barbarian?");
        if (confirmBarbarian) {
            // window.alert(player.name + " is a strong Barbarian!");
            return style;
        }
        else {
            window.alert("Returning to class selection.")
            return getplayerClass();
        }
    }
    style = style.toLowerCase();
    if (style === 'fighter') {
        var confirmBarbarian = window.confirm("Are you sure you want to be a fighter?");
        if (confirmBarbarian) {
            // window.alert(player.name + " is a hefty fighter!");
            return style;
        }
        else {
            window.alert("Returning to class selection.")
            return getplayerClass();
        }
    }


} 
var getplayerName = function () {
    var name = "";
    while (name === "" || name === null) {
      name = prompt("What is your character's name?");
    }
    console.log("Your character's name is " + name);
    return name;
  }

var player = {
    name : getplayerName(),
    style : getplayerClass(),
}