var demo = DemoAccessControl;

let demo = new DemoAccessControl();
console.log(Demo.nummer);
console.log(Demo.tekst);
console.log(Demo.aNumber);
console.log(Demo.getAnOtherNumber);
console.log(Demo.setAnOtherNumber);

function DemoAccessControl() {


    // public or private variable
    let accessObject = this;

    // public or private variable
    accessObject.nummer = 1;

    // public or private variable
    accessObject.tekst = 'Hello';

    // public or private variable
    this.aNumber = 10;

    // public or private variable
    let anOtherNumber = 20;

    // priviliged or private method
    this.getAnOtherNumber = function () {
        return anOtherNumber;
    }

    // priviliged or private method
    this.setAnOtherNumber = function (number) {
        anOtherNumber = number;
    }

    // priviliged or private method
    let objectValues = function () {
        console.log(anOtherNumber,
                    accessObject.nummer,
                    accessObject.tekst );
    }

}

/*
Een variabele is private of public
Voor een method of functie bestaat een iets andere benaming
deze kunnen priviliged of private zijn.

Priviliged:
    kan de private variabelen ophalen of wijzigen
Private:
    zijn niet zichtbaar buiten class of object

 1.
 Maak een nieuwe variabele met de naam demo
 waarin je een nieuw object DemoAccessControl stopt

 2.
 Probeer nu alle variabelen en methods aan te roepen

 3.
 Welke variabelen zijn public of private
 Welke methods zijn zichtbaar in je variabele

 4.
 Probeer de interface te maken

*/
