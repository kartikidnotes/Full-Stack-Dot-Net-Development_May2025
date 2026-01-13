import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basic } from "./basic/basic";
import { Datatypes } from "./datatypes/datatypes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Basic, Datatypes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularprojects');

  name="My name is IT Preneur!!!!!!!"
}
