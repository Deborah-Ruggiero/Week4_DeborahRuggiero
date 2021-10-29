////Un utente può iscriversi alla Newsletter inserendo il proprio nome nella pagina News e
////cliccando Subscribe.
////- Se l’utente non ha inserito alcun testo, il pulsante Subscribe deve essere disabilitato.
////- Se l’utente ha effettuato la sottoscrizione alla newsletter, allora nella pagina News sarà
////visibile solo un pulsante “Unsubscribe”.

////- Se l’utente ha effettuato la sottoscrizione alla newsletter, allora ogni qual volta che l’utente
////entra nella pagina Home sarà inviato un alert con scritto “Benvenuto” con il nome
////dell’utente.

////- Se l’utente clicca Unsubscribe, la sua iscrizione viene cancellata.


//verifico che utente inserisca suo nome
//se l'input  è compilato abilito button login 

function subscription() {
    //recupero gli elementi il cui class name è input
    let input = document.getElementById("controlloinsnome");

    //recuper il tasto login
    let loginButton = document.getElementById("button-addon2")


    if (input == "") //se l' input è stringa vuota
    {
        //tasto login resta disabilitato
        loginButton.disabled = true; //oppure disabled = "disabled"
    }
    else {
        loginButton.disabled = false; //tasto login abilitato
    }
}


//Funzione per salvare i dati nel local storage

function save() {

    let userName = document.getElementById("controlloinsnome").value;
    localStorage.setItem('username', userName);

}
//al click del button submit nascondo form e compare button unsubscribe
    function hideForm() {
    ////recupero la form
        let form = document.getElementById("myform");

    ////nascondo la form
    form.style.display = "none"; //cambio stile della form con display:none;

    //recupero tasto di logout
    let logoutButton = document.getElementById("logoutButton");

    //lo rendo visibile
        logoutButton.style.display = "inline";

        alert("Iscrizione completata !");
//    }
}


////- Se l’utente ha effettuato la sottoscrizione alla newsletter, allora ogni qual volta che l’utente
////entra nella pagina Home sarà inviato un alert con scritto “Benvenuto” con il nome
////dell’utente.


//// TODO: l ho commentata perche entra in conflitto con la funzionalita del SUBSCRIBE
//function checkLoggedUser() {
//    //recupero eventuali dati dal local storage
//    let storedUsername = localStorage.getItem('username');

//    //se c'è nome (ovvero l'utente è SUBSCRIBED) 
//    if (storedUsername != null) {
//        alert("Benvenuto " + storedUsername + '!');
//    }

//    else {
//        alert("Benvenuto!");
//    }



function unsubscribe() {
    localStorage.clear() //svuoto il local storage

    //recupero la form
    let form = document.getElementById("myform");

    //mostro la form
    form.style.display = ""; //"inline", "block", "inline-block" ...

    //recupero e nascondo il tasto di logout 
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "none";
}
