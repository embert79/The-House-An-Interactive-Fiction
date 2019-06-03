


class Food extends Item {
  constructor(name, descriptor, text) {
    super(name, descriptor, text);
  }

  eat() {
    addLine("You ate the " + this.name + ", " + this.text+ ". You feel sick. Do you want to go the hospital?");

    //Yes
    let yesaction = /yes/;
    let yes = function(action, player, object) {
      if (action == 'yes') {
        player.move(frontDesk)
        player.cameFrom = null;
      }
      return player
    }
    addAction(yesaction, yes);

    //No
    let noaction = /no/;
    let no = function(action, player, object) {
      if (action == 'no') {
        let text = "";
        addLine("You decide that you are okay for now.");
      }
      return player
    }
    addAction(noaction, no);
  }
}

class Bandage extends Item {
  constructor(name, descriptor, text) {
    super(name, descriptor, text);

  }

  acquire() {
    bandage++;
    addLine("You have " + bandage + " bandages.")

  }

  use() {
    if(bandage > 0) {
      bandage--;
    }
  
    addLine("You have " + bandage + " left and you've been healed.")

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
let emergencyRoom = new Room("emergency room","red with docters speed walking around.")
let frontDesk = new Room("front desk","white with a desk at the front of room.")
let houseKeeper = new Room("cleaning room","dark with wet cleaning supplies.")
let operatingRoom = new Room("operation room","dark with docters screaming and doing surgery.")
let nursery = new Room("nursery","large with kids wandering around waiting for their parents.")
let paddedCell = new Room("padded cell","where people go if they try hurting themselves.")
let surgeryRoom = new Room("surgery room","where patients get surgery but it usually doesn't work.")
let dischargeLounge= new Room("discharge room","where patients relax after their surgery that didn't go as planned.")
let basementDoor= new Room("basement door", "You inspect and you have a 50/50 chance of living if you go through.")
let randomDoor= new Room("random door")
let cautionSign= new Item ("caution sign","red with blood covering the words.")
let chair = new Item("chair","squishy with red marks.")
let televison = new Item("television","on the wall with most scary and mysterious videos playing.")
let Bandages = new Bandage("bandage","the will heal you.","you have been healed")
let money = new Food("coin","worth $100.","and you have been given $100.")
let pill = new Food("pill","white","and you now become nauseous.")
let painting = new Item("painting","on the wall and blinking.")
let bedSheet = new Item("bed sheet","white with blood from the patient.")
let stretcher = new Item("stretcher","in a closet that's filled with blood.")
let surgicalTable = new Item("surgical table","blue with a dead body on it.")
let syringe = new Item("syringe","on a side table with blood on the point.")
let wheelchair = new Item("wheel chair","sitting and covered blood.")
let thermometer = new Item("thermometer","inside of a patients body.")
let blanket = new Item("blanket","gigantic with blood spots.")
let couch = new Item("couch","cold and moist.")

let towel = new Item("towel", "soaking in blood.", "your hand is now covered in blood.")
let bread = new Food("bread", "white with sesame seeds.", "and you become sick.")
let butter = new Food("butter","dry with mold marks.","and you now have cancer.")
let doll = new Item("doll", "slowly walking towards you and whispering things to you.", " and the doll bit you, find bandages or leave room to heal yourself.")
let tweezers = new Item("tweezer", "sharp with blood on the tip and fingerprints in blood.")
let sword = new Item("sword", "silver with a diamond handle.")
let skeletonBone = new Food("skeleton bone", "dry with remains of humans.","and you your mouth becomes dry and you are slowly becoming sick. ")
let vase = new Item("vase", "golden with symbols of war.")
let suitcase = new Item("suitcase", "ripped with bodies inside.")
let roosterFeet = new Food("rooster feet", "rotten with a mold scent coming off of it.","and you throw up and become ill.")
let pigBrain = new Food("pig brain", "squishy and shredded by the butcher.","and you get poisened.")

// Put them in their spots
kitchen.addItem(towel);
kitchen.addItem(butter)
kitchen.addItem(bread);
kitchen.addItem(butcherHollow);
kitchen.addItem(basement);
kitchen.addItem(Bandages)
bedroom.addItem(suitcase);
bedroom.addItem(vase);
bedroom.addItem(chaosCorner);
basement.addItem(sword);
basement.addItem(skeletonBone);
chaosCorner.addItem(doll);
chaosCorner.addItem(tweezers);
chaosCorner.addItem(Bandages)
chaosCorner.addItem(Bandages)
butcherHollow.addItem(roosterFeet);
butcherHollow.addItem(pigBrain);
butcherHollow.addItem(Bandages)
butcherHollow.addItem(basementDoor)

frontDesk.addItem(couch)
frontDesk.addItem(chair)
frontDesk.addItem(emergencyRoom)
frontDesk.addItem(houseKeeper)
emergencyRoom.addItem(stretcher)
emergencyRoom.addItem(cautionSign)
emergencyRoom.addItem(dischargeLounge)
emergencyRoom.addItem(surgeryRoom)
houseKeeper.addItem(bedSheet)
houseKeeper.addItem(wheelchair)
houseKeeper.addItem(paddedCell)
dischargeLounge.addItem(painting)
surgeryRoom.addItem(surgicalTable)
surgeryRoom.addItem(syringe)
surgeryRoom.addItem(operatingRoom)
paddedCell.addItem(pill)
paddedCell.addItem(nursery)
paddedCell.addItem(Bandages)
nursery.addItem(blanket)
nursery.addItem(televison)
operatingRoom.addItem(thermometer)
operatingRoom.addItem(Bandages)
operatingRoom.addItem(Bandages)
operatingRoom.addItem(Bandages)
operatingRoom.addItem(Bandages)
operatingRoom.addItem(randomDoor)

basementDoor.enter = function () {
  addLine("You have left the building, you win.")
}

randomDoor.enter = function () {
  addLine("You have escaped from the hospital. Congratulation, you win.")
}

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


let useAction = /use/;
let use = function(action, player, object) {
  if (action == 'use') {
    object.use();
  }
  return player;
}
addAction(useAction, use);


let acquireAction = /acquire/;
let acquire = function(action, player, object) {
  if (action == 'acquire') {
    object.acquire(player.inventory, object);

  }
  return player;
}
addAction(acquireAction, acquire);

let checkAction = /check/;
let check = function(action, player, object) {
  if (action == 'acquire') {
    player.check();
  }
  return player;
}
addAction(checkAction, check);
