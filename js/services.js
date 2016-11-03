angular.module("services", [])
	.value("factor", 6)//Creates a value named factor with the value of 6
	.factory("square", ["factor", function (factor) { //create a factory that squares it's injected "factor"
			return factor * factor;
	}])
	.service("animals", [function(){
		this.animals = [{
    name: "Baby Quetzal",
    img: "http://i.imgur.com/CtnEDpM.jpg",
    baby: true,
    description: ""
}, {
    name: "Baby Otter",
    img: "http://i.imgur.com/1IShHRT.jpg",
    baby: true,
    description: ""
}, {
    name: "Baby Octopus",
    img: "http://i.imgur.com/kzarlKW.jpg",
    baby: true,
    description: ""
}, {
    name: "Platypus",
    img: "http://i.imgur.com/FrnR8Dc.jpg",
    baby: false,
    description: ""
}, {
    name: "Baby Turtle",
    img: "http://i.imgur.com/WNPJrla.jpg",
    baby: true,
    description: ""
}, {
    name: "Baby Penguin",
    img: "http://i.imgur.com/79d1OcB.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Elephant",
    img: "http://imgur.com/XzdpuYe.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Kangaroo",
    img: "http://imgur.com/w9odD6T.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Jaguar",
    img: "http://imgur.com/M4rEKNJ.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Panda",
    img: "http://imgur.com/GSDKvtF.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Pangolin",
    img: "http://imgur.com/lOhSAI7.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Tapir",
    img: "http://imgur.com/LHlrxeA.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Bongo",
    img: "http://imgur.com/NMrYj7b.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Okapi",
    img: "http://imgur.com/LqC45dY.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Pig",
    img: "http://imgur.com/sZa0ses.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Emu",
    img: "http://imgur.com/YrsQ39I.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Rhino",
    img: "http://imgur.com/CT5iHXn.jpg",
    baby: true,
    description: ""
},{
    name: "Red Panda",
    img: "http://imgur.com/ijziISi.jpg",
    baby: false,
    description: ""
},{
    name: "Fennec Fox",
    img: "http://imgur.com/F0dubja.jpg",
    baby: false,
    description: ""
},{
    name: "Golden Brushtail Possum",
    img: "http://imgur.com/OZ9xAJA.jpg",
    baby: false,
    description: ""
},{
    name: "Baby Leopard Seal",
    img: "http://imgur.com/cZNjuae.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Flying Squirrel",
    img: "http://imgur.com/kpreNsb.jpg",
    baby: false,
    description: ""
},{
    name: "Baby Two Toed Sloth",
    img: "http://imgur.com/GHJhL7Y.jpg",
    baby: false,
    description: ""
},{
    name: "Baby Raccoon",
    img: "http://i.imgur.com/JrkyhEl.jpg",
    baby: false,
    description: ""
}];
	}])