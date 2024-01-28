"use strict";

// IIFE - Immediately Invoked Functional Expression
(function(){

    function DisplayContactListPage(){
        console.log("Called DisplayHomePage()");
        if(localStorage.length> 0 ){

            let contactList = document.getElementById("contactList");
            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys){
                let contact = new Contact();
                let contactData = localStorage.getItem(key);
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                            <td>${contact.fullName}</td>
                            <td>${contact.contactNumber}</td>
                            <td>${contact.emailAddress}</td>
                            <td></td>
                            <td></td> 
                          </tr>`;
                index++;
            }
            contactList.innerHTML= data;
        }
    }

    function DisplayAboutPage(){
        console.log("Called DisplayHomePage()");
    }

    function DisplayProductsPage(){
        console.log("Called DisplayHomePage()");
    }

    function DisplayServicesPage(){
        console.log("Called DisplayHomePage()");
    }

    function DisplayContactPage(){
        console.log("Called DisplayHomePage()");

        let sendButton = document.getElementById("sendButton");
        let subscribeButton = document.getElementById("sendButton");

        sendButton.addEventListener("click", function(){
            if(subscribeButton.checked){
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value)
                if(contact.serialize()){
                    let key = contact.fullName.substring(0,1) + Date.now();
                    localStorage.setItem(key, contact.serialize())
                }
            }
        })
    }
    function Start(){
        console.log("App Started");

        switch(document.title){

            case "Products":
                DisplayProductsPage();
                break;

            case "Services":
                DisplayServicesPage();
                break;

            case "About Us":
                DisplayAboutPage();
                break;

            case "Contact Us":
                DisplayContactPage();
                break;

            case "Contact List":
                DisplayContactListPage();
                break;
        }
    }
    window.addEventListener( "load", Start);
})(); // This is how you declare a function