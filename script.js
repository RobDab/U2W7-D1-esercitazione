// IMPORTANT: LETS IGNORE THE TOTAL ABSENCE OF STYLING ^.^"

let btn = document.getElementById('submitBtn')
console.log(btn)

class person {
    constructor(name , surname , birthDate){
        this.fname = name
        this.sname = surname
        this.bDate = birthDate
    }

    toTableRow (){
        // AGGIUNGO METODO PER CREAZIONE RIGA IN TABELLA
        
        let list = document.getElementById('data_table')
        list.innerHTML += `<tr><td>${this.fname}</td><td>${this.sname}</td><td>${this.bDate}</td></tr>`
    
}
}

btn.onclick = function submit(){
    // GRASPS FORM VALUES AND ASSIGN THEM TO VARIABLES
    let fname = document.getElementById('fname').value
    let sname = document.getElementById('sname').value
    let bdate = document.getElementById('bdate').value

    // CREATES AN INSTANCE FOR PERSON OBJ
    let individual = new person(fname , sname , bdate)
    console.log(individual)

    // RECALL THE BUILT IN METHOD OF THE PROTOTYPE PERSON
    individual.toTableRow()

    


    document.getElementById('fname').value = ""
    document.getElementById('sname').value = ""
    document.getElementById('bdate').value = ""
}

// btn.onclick = person.toTableRow()