"use strict";

class Contact{
    constructor(fullName  = "", contactNumber = "", emailAddress = "") {
        this._fullName = fullName
        this._contactNumber = contactNumber;
        this._emailAddress = emailAddress;
    }
    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get contactNumber() {
        return this._contactNumber;
    }

    set contactNumber(value) {
        this._contactNumber = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }

    set emailAddress(value) {
        this._emailAddress = value;
    }

    toString(){
        return `FullName ${this._fullName}\n
        ContactNumber ${this._contactNumber}\n EmailAddress ${this._emailAddress}`;
    }

    /**
     * Serialize for writing to localstorage
     */
    serialize(){
        if(this._fullName !=="" && this._contactNumber !== "" && this._emailAddress !== ""){
            return `${this.fullName}, ${this.contactNumber}, ${this.emailAddress}`;
        }
        console.error("one or more of the contact properties are missing or invalid");
        return null;
    }

    /**
     * Deserialize means to read data from localStorae
     */
    deserialize(data){
        let propertyArray = data.split(",");
        this._fullName = propertyArray[0];
        this._contactNumber = propertyArray[1];
        this._emailAddress = propertyArray[2];
    }
}