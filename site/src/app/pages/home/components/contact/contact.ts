import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  data = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  showToast = false;

  constructor(private http: HttpClient) { }

  onSubmit() {

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGxACW5sl1nlOyjf8uVC9NGvr3U5u1uq8INe5IjKVSTm5ZJw/formResponse';
    form.target = 'hidden_iframe';   // ⭐ KEY POINT: prevent redirect

    form.style.display = 'none';

    const name = document.createElement('input');
    name.name = 'entry.2082921016';
    name.value = this.data.name;

    const email = document.createElement('textarea');
    email.name = 'entry.356092328';
    email.value = this.data.email;

    const phone = document.createElement('input');
    phone.name = 'entry.919457822';
    phone.value = this.data.phone;

    const msg = document.createElement('input');
    msg.name = 'entry.2090902166';
    msg.value = this.data.message;


    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(msg);

    document.body.appendChild(form);
    form.submit();

    this.data = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }

    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 10000);

  }
}
