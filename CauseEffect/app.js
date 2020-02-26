const userList = document.getElementById('user-list');
const details = document.querySelector('.info');
const Users = [
    {
        "name": "John Doe",
        "city": "Warsaw",
        "country": "Poland",
        "telephone": "111-111-111",
        "birthday": "01.01.1990"
    },

    {
        "name": "Jane Doe",
        "city": "New York",
        "country": "USA",
        "telephone": "111-111-1121",
        "birthday": "01.01.1993"
    },

    {
        "name": "Kamil Doe",
        "city": "Paris",
        "country": "France",
        "telephone": "333-111-444",
        "birthday": "01.01.1996"
    },

    {
        "name": "Michael Doe",
        "city": "Mexico City",
        "country": "Mexico",
        "telephone": "321-555-221",
        "birthday": "01.01.1991"
    },

    {
        "name": "William Doe",
        "city": "London",
        "country": "United Kingdom",
        "telephone": "777-312-111",
        "birthday": "01.01.1985"
    },

    {
        "name": "Kate Doe",
        "city": "Amsterdam",
        "country": "Netherlands",
        "telephone": "321-999-254",
        "birthday": "01.01.1985"
    }
];

window.onload = () => {
    
    Users.forEach((user, index) => {
        userList.innerHTML += `<li><a href="#"class="user-${index}">${user.name}</a></li>`
    });
    for(let i = 0; i < Users.length; i++){
        document.querySelector('.user-'+i).addEventListener('click', () => {
            details.style.display ='block'
            details.innerHTML = `
            Name: ${Users[i].name}
            <br><br>
            City: ${Users[i].city}
            <br><br>
            Country: ${Users[i].country}
            <br><br>
            Telephone: ${Users[i].telephone}
            <br><br>
            Birthday: ${Users[i].birthday}`;
        });
        // document.body.addEventListener('mouseout', () => {
        //     details.style.display ='none';
        // })
    }
}

