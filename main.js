
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room
let kitchen = new Room("kitchen", "The kitchen is wet with fresh blood.");
let bedroom = new Room("bedroom", "The bedroom floor creaks every time you step with a sound coming from the closet.")
let basement = new Room("basement", "The basement is pitch black with sound of water drops and footsteps.");
let chaosCorner = new Room("chaos corner", "You find yourself in the middle of chaos, dolls moving and tweezers slicing.")
let butcherHollow = new Room("butchers hollow", "You see a man slicing dead animals and he's coming for you.")
let towel  = new Item("towel",)
let bread =  new Item("bread",)
let doll =  new Item("doll",)
let tweezers =  new Item("tweezers",)
let sword =  new Item("sword",)
let skeletonBones =  new Item("skeletonBones",)
let vase =  new Item("vase",)
let suitcase =  new Item("suitcase",)
let roosterFeet =  new Item("roosterFeet",)
let pigBrain =  new Item("pigBrain",)
// Put them in their spots
kitchen.addItem(towel);
kitchen.addItem(bread);
kitchen.addItem(butcherHollow);
kitchen.addItem(basement);
bedroom.addItem(suitcase);
bedroom.addItem(vase);
bedroom.addItem(chaosCorner);
basement.addItem(sword);
basement.addItem(skeletonBones);
chaosCorner.addItem(doll);
chaosCorner.addItem(tweezers);
butcherHollow.addItem(roosterFeet);
butcherHollow.addItem(pigBrain);
let locations = [];
locations.push(kitchen, bedroom);
player.location = new Room("hallway");
player.location.addItems(locations);

player.location.enter();
