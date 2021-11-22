// Jeg er skod og kunne ikke få lortet til at virke ved at lave klasser i sepereret filer..

class Instrument
{
    set Name(name)
    {
        this.fName = name;
    }

    get Name()
    {
        return this.fName;
    }

    Play(sound)
    {
        var audio = new Audio(sound);
        audio.play();
    }
}

class Stringed extends Instrument
{
    set NumberofStrings(amount)
    {
        this.NumberofStrings = amount;
    }

    get NumberofStrings()
    {
        return this.NumberofStrings;
    }
    constructor(numberOfStrings)
    {
        super();
        this.numberOfStrings = numberOfStrings;
    }
}

class Guitar extends Stringed
{
    constructor(material)
    {
        super(5);
        super.Name = material;
    }
}

class Harp extends Stringed
{
    constructor(height)
    {
        super(5);
        this.height = height;
        super.Name = "Harp";
    }
}

class Saxophone extends Instrument
{
    constructor(material)
    {
        super();
        super.Name = material;
    }
}

class Flute extends Instrument
{
    constructor(holes, material)
    {
        super();
        this.holes = holes;
        super.Name = material;
        
    }
}

var guitar = new Guitar("Guitar");
var harp = new Harp(5);
var saxo = new Saxophone("Saxophone");
var flute = new Flute("Flute");


//const insutruments = [ new Guitar("Guitar"), new Harp(5), new Saxophone("Saxophone"), new Flute("Flute")];

function OnClick()
{
    var selected = document.getElementById("dropDown").value;
    switch (selected) {
        case "Guitar":
            console.log("guitar");
            guitar.Play("guitar.mp3");    
            break;
        case "Harp":
            console.log("Harp");
            harp.Play("harp.mp3")
            break;
        case "Saxophone":
            console.log("Saxophone");
            saxo.Play("saxophone.mp3");
            break;
        case "Flute":
            console.log("Flute");
            flute.Play("Flute.mp3");
            break;
        default:
            break;
    }
}
