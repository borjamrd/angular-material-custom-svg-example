import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CustomIcon, customIcons } from '../custom-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-sections',
  imports: [CommonModule, MatIconModule, HttpClientModule],
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  providers: [HttpClient],
  standalone: true,
})
export class SectionsComponent implements OnInit {
  sections = [
    {
      name: 'Icons',
      class: 'material-icons-round',
      items: ['home', 'search'],
    },
    {
      name: 'Symbols (new)',
      class: 'material-symbols-rounded',
      items: ['home', 'search'],
    },
    {
      name: 'Custom SVG',
      class: '',
      items: ['home', 'search'],
    },
  ];
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.createIcons();
  }
  createIcons() {
    customIcons.forEach((icon: CustomIcon) => {
      console.log(icon.path);
      this.matIconRegistry.addSvgIcon(
        icon.svg,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
  ngOnInit() {}
}
