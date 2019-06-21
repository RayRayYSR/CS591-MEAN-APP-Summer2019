import { Component } from '@angular/core';
import {CONTACT} from './models/contactModel';
import { ContactService} from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CS591 PS6';
  contacts :any = {};

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts=> {
        this.contacts = contacts;
        console.log(`Contacts: ${this.contacts}`)
      });
  }


  displayData() {
    for (var i = 0; i < this.contacts.length; i++) {
      //console.log(this.contacts.length);
      if (document.forms["form1"]["beer"].value==this.contacts[i][0]) {
        document.getElementById('data_place').innerHTML = this.contacts[i][1];
        break;
      }
    }
  }

  constructor(private contactService: ContactService) {

  }
  ngOnInit() {
    this.getContacts();
  }
}
