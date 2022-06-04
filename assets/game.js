window.alert("Welcome to Buck's fantasy game");




// var getplayerName = function () {

//   }

var player = {
    name: "",
    style: "",
    health: "",
    attack: "",
    init: function () {
        this.getplayerName();
        this.getplayerClass();
    },
    getplayerName: function () {
        var name = "";
        while (name === "" || name === null) {
            name = prompt("What is your character's name?");
        }
        console.log("Your character's name is " + name);
        this.name = name;
    },
    getplayerClass: function () {
        var style = "";
        window.alert("You can choose to be a Barbarian or a Fighter.");
        window.alert("A Barbarian has higher attack but lower health. A Fighter has lower attack but higher health.");

        style = window.prompt("Choose 'Fighter' or 'Barbarian'");
        debugger;
        style = style.toLowerCase();
        if (style === "" || style === null) {
            window.alert("You need to provide a valid answer! Try again!")
            return this.getplayerClass();
        }
        
        
        if (style === 'barbarian') {
            var confirmBarbarian = window.confirm("Are you sure you want to be a Barbarian?");
            if (confirmBarbarian) {
                // window.alert(player.name + " is a strong Barbarian!");
                this.health = 50;
                this.style = 'barbarian';
                this.attack = 15;
                console.log(this);
            }
            else {
                window.alert("Returning to class selection.")
                return this.getplayerClass();
            }
        }
        // style = style.toLowerCase();
        if (style === 'fighter') {
            var confirmFighter = window.confirm("Are you sure you want to be a fighter?");
            if (confirmFighter) {
                // window.alert(player.name + " is a hefty fighter!");

                this.health = 75;
                this.style = 'fighter';
                this.attack = 10;
                console.log(this);
            }
            else {
                window.alert("Returning to class selection.")
                return this.getplayerClass();
            }
        }
        // if (style !== 'fighter' || style !== 'barbarian') {
        //     window.alert('Please choose either barbarian or fighter.');              Figure out how to make user enter either barbarian or fighter
        //     return this.getplayerClass();
        // }
    },

}
player.init();

// var enemy = {
//     rat
// }