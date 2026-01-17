import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basic } from "./basic/basic";
import { Datatypes } from "./datatypes/datatypes";
import { Standaloneexample } from "./standaloneexample/standaloneexample";
import { Lifecycle } from "./lifecycle/lifecycle";
import { Structuraldirectives } from "./structuraldirectives/structuraldirectives";
import { Attributedirective } from "./attributedirective/attributedirective";
import { Componentdirective } from "./componentdirective/componentdirective";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Basic, Datatypes, Standaloneexample, Lifecycle, Structuraldirectives, Attributedirective, Componentdirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularprojects');

  name="My name is IT Preneur!!!!!!!"
}
