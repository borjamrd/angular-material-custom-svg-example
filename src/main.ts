import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SectionsComponent } from './components/sections/sections.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SectionsComponent],
  providers: [],
  template: `
    <h1> {{ name }}!</h1>
    <app-sections />
  `,
})
export class App {
  name = 'New Angular Symbols and custom svg icons';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(HttpClientModule)],
});
