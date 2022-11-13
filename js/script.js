var indexOfelementInEdit = -1;//
var contactList = [];//U niz bi se trebali smjestiti nove kontakte koje dodamo

class contact {
    constructor(fname, lname, tel, email) {
        this.fname = fname;
        this.lname = lname;
        this.tel = tel;
        this.email = email;
    }


}
//pravim novu "praznu" varijablu objekta koji se zove firstContact,  koji je kao konstruktor
var firstContact = new contact("Milica", "Dujakovic", "065/695-775", "dujakovic.milica3@gmail.com");
var contactList = [firstContact];
read();




function read() {//ova funkcija izcitava elemente niza 
    var tabel = document.getElementById("tabel");//var sam ubacila u funkiju
    tabel.innerHTML = '';//ovdje sam ispraznila tabelu
    for (var i = 0; i < contactList.length; i++) {
        tabel.innerHTML += "<tr><td>" + contactList[i].fname + "</td>"
            + "<td>" + contactList[i].lname + "</td>"//ove 4  vrijednosti koje korisnik unosi
            + "<td>" + contactList[i].tel + "</td>"
            + "<td>" + contactList[i].email + "</td>"
            + "<td><button onclick='edit(" + i + ")'>Ažuriraj</button></td>"//bila je greska u zatvaranju tr taga
            + "<td><button onclick='del(" + i + ")'>X</button></td></tr>";
    }

}

//trebam napraviti funkciju za dugme azuriraj
//Zadaca napraviti da create ne brise stari kontakt i dodaje novi nego mjenja postojeci
//to mozes urati tako sto  if(indexOfelementInEdit>-1)


function create() {//ova funkcija ubaci novi element u niz, sortira i ispise u tabeli
    if (indexOfelementInEdit > -1) {
        contactList[indexOfelementInEdit].fname = fname.value;
        contactList[indexOfelementInEdit].lname = lname.value;
        contactList[indexOfelementInEdit].telefon = telefon.value;
        contactList[indexOfelementInEdit].email = email.value;
        indexOfelementInEdit = -1;
    }
    else {
        var newName = fname.value;//fname je getelementbyid("fname")
        var newLname = lname.value;
        var newTel = telefon.value;
        var newEmail = email.value;
        var newContact = new contact(newName, newLname, newTel, newEmail)//nova varijabla koja je jednaka klasi objekta koju smo napravili na pocetku
        contactList.push(newContact);

    }
    //ocistiti tj. isprazni formu, 
    fname.value = "";
    lname.value = "";
    telefon.value = "";
    email.value = "";
    console.log(indexOfelementInEdit);
    contactList.sort();
    read();
}


function del(index) {//brisanje
    contactList.splice(index, 1)
    read()
}

//trebam naptaviti funkciju kada kliknemo azuriraj, to ne znam 
//mislila sam da se contakt ispise u formi pa da ga mogu mjenjati

function edit(index) {

    console.log(index, contactList[index]);
    console.log(index);
    console.log(contactList[index].fname);
    fname.value = contactList[index].fname;//popunjavam formu sa imenom u kontaktom kojim mjenjam
    lname.value = contactList[index].lname;//popunjavam formu sa prezimenom u kontaktom kojim mjenjam
    telefon.value = contactList[index].tel;//popunjavam formu sa telefonom u kontaktom kojim mjenjam
    email.value = contactList[index].email;//popunjavam formu sa emailom u kontaktom kojim mjenjam
    
    //console.log(telefon, "\ntelefon", "", lname, email);//\n eskejp karakter koji se koristi za unos novog reda u izlaz
    indexOfelementInEdit = index;
}












