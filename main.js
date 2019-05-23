// Create the contents of your room here.
class Food extends Item {
  constructor(name, descriptor, text) {
    super(name, descriptor, text);
  }

  eat() {
    addLine("You ate the " + this.name + ", " + this.text)
  }
}


alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("hallway");
let kitchen = new Room("kitchen", "The kitchen is wet with fresh blood.");
let bedroom = new Room("master bedroom", "The bedroom floor creaks every time you step with a sound coming from the closet.")
let basement = new Room("basement", "The basement is pitch black with sound of water drops and footsteps.");
let chaosCorner = new Room("guest bedroom", "You find yourself in the middle of chaos, dolls moving and tweezers slicing.")
let butcherHollow = new Room("butchers basement", "You see a man slicing dead animals and he's coming for you.")
let hospital = new Room("hospital", "")
let emergencyRoom = new Room("Emergency Room","")
let frontDesk = new Room("Front Desk","")
let dayRoom = new Room("Day Room","")
let houseKeeper = new Room("House Keeper's Office","")
let operatingRoom = new Room("Operation Room","")
let nursery = new Room("Nursery","")
let paddedCell = new Room("Padded Cell","")
let surgeryRoom = new Room("Surgery Room","")
let dischargeLounge= new Room("Discharge Room","")
let cautionSign= new Item ("Caution Sign","")
let chair = new Item("chair","")
let televison = new Item("television","")
let bandage = new Item("bandage","")
let money = new Item("coin","")
let pill = new Food("pill","")
let painting = new Item("painting","")
let bedSheet = new Item("bed sheet","")
let stretcher = new Item("stretcher","")
let surgicalTable = new Item("surgical table","")
let syringe = new Item("syringe","")
let wheelchair = new Item("wheel chair","")
let thermometer = new Item("thermometer","")
let blanket = new Item("blanket","")
let couch = new Item("couch","")
let towel = new Item("towel", "soaking in blood.", "your hand is now covered in blood.")
let bread = new Food("bread", "white with sesame seeds.", "and you become sick.")
let butter = new Food("butter")
let doll = new Item("doll", "slowly walking towards you and whispering things to you.", " and the doll bit you, find bandages or leave room to heal yourself.")
let tweezers = new Item("tweezer", "sharp with blood on the tip and fingerprints in blood.")
let sword = new Item("sword", "silver with a diamond handle.")
let skeletonBone = new Food("skeletonBone", "dry with remains of humans.")
let vase = new Item("vase", "golden with symbols of war.")
let suitcase = new Item("suitcase", "ripped with bodies inside.")
let roosterFeet = new Food("roosterFeet", "rotten with a mold scent coming off of it.")
let pigBrain = new Food("pigBrain", "squishy and shredded by the butcher.")

// Put them in their spots
kitchen.addItem(towel);
kitchen.addItem(bread);
kitchen.addItem(butcherHollow);
kitchen.addItem(basement);
bedroom.addItem(suitcase);
bedroom.addItem(vase);
bedroom.addItem(chaosCorner);
basement.addItem(sword);
basement.addItem(skeletonBone);
chaosCorner.addItem(doll);
chaosCorner.addItem(tweezers);
butcherHollow.addItem(roosterFeet);
butcherHollow.addItem(pigBrain);
let locations = [];
locations.push(kitchen, bedroom, );

hallway.addItems(locations);

player.move(hallway);

let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}
addAction(eatAction, eat);


let lickAction = /lick/;
let lick = function(action, player, object) {
  if (action == 'lick') {
    object.lick();
  }
  return player;
}
addAction(lickAction, lick);


let touchAction = /touch/;
let touch = function(action, player, object) {
  if (action == 'touch') {
    object.touch();
  }
  return player;
}
addAction(touchAction, touch);
