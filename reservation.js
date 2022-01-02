var prix = 0;

function populate() {
        
    var type = document.querySelector("#type").value;
    
    switch (type) {

        case "Moto":
            prix = 10
            document.getElementById("BV").innerHTML = "<option> ------ </option>";
            document.getElementById("carburant").innerHTML = "<option> Essence </option> <option> Electrique </option>";
            break;

        case "Citadine": 
            prix = 12
            document.getElementById("BV").innerHTML = "<option> Manuelle </option>";
            document.getElementById("carburant").innerHTML = "<option> Essence </option> <option> Diesel </option> <option> Electrique </option> <option> Hybride </option>";
            break;

        case "Compact": 
            prix = 14
            document.getElementById("BV").innerHTML = "<option> Manuelle </option>";
            document.getElementById("carburant").innerHTML = "<option> Essence </option> <option> Hybride </option> <option> Diesel </option>";
            break;

        case "Berline": 
            prix = 20  
            document.getElementById("BV").innerHTML = "<option> Automatique </option>";
            document.getElementById("carburant").innerHTML = "<option> Essence </option> <option> Hybride </option> <option> Diesel </option>";
            break;

        case "Utilitaire": 
            prix = 16
            document.getElementById("BV").innerHTML = "<option> Manuelle </option>";
            document.getElementById("carburant").innerHTML = "<option> Diesel </option>";
            break;

        case "Engin de Chantier": 
            prix = 900
            document.getElementById("BV").innerHTML = "<option> Manuelle </option>";
            document.getElementById("carburant").innerHTML = "<option> Essence </option> <option> Diesel </option>";
            break;

        case "Camion": 
            prix = 250;
            document.getElementById("BV").innerHTML = "<option> Automatique </option>";
            document.getElementById("carburant").innerHTML = "<option> Diesel </option>";
            break;

        default: 
            document.getElementById("BV").innerHTML = "<option> </option>";
            document.getElementById("carburant").innerHTML = "<option> </option>";
    }


}

var taux_bv = 0
var bv = document.getElementById("BV")

function boitev(){
    switch (bv.value.toLowerCase()) {

        case "manuelle": 
        taux_bv = 0;
        break;

        case "automatique": 
        taux_bv = 0.19;
        break;

        default : ;
    }

}


var taux_carb = 0;
var carburant = document.getElementById("carburant");


function carb() {

    switch (carburant.value.toLowerCase()) {

        case "electrique": 
            taux_carb = 0.05;
            break;
            
        case "hybride": 
            taux_carb = 0.09;
            break;

        case "essence": 
            taux_carb = 0.14;
            break;
        
        case "diesel": 
            taux_carb = 0.21;
            break;
        
        default : ;


    }

}

var calcul = 0;

function calcul_prix() {

    var jours = document.getElementById("jours").value;
    calcul = jours * (prix + (prix * taux_carb) + (prix * taux_bv)) + " €";
    document.getElementById("afficher").innerText = calcul;
}