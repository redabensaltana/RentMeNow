document.querySelector("#submit").addEventListener('click', function(display){
    {
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    alert("Prénom : "+ fname + "\n" + "Nom : "+ lname + "\n" + "E-mail : "+ email + "\n" + "Objet : "+ subject + "\n" + "Message : "+ message)
    }

});



