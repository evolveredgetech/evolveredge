import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { AboutUs } from "./components/about-us/about-us";
import { OurService } from "./components/our-service/our-service";
import { Gallary } from "./components/gallary/gallary";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, AboutUs, OurService, Gallary, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
