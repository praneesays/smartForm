import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

interface Country {
  country: string;
  code: string;
}

interface Language {
  language: string;
  code: string;
}

@Component({
  selector: 'app-locale-selector',
  templateUrl: './locale-selector.component.html',
  styleUrls: ['./locale-selector.component.scss']
})
export class LocaleSelectorComponent implements OnInit {
  localeForm!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.localeForm = this.rootFormGroup.control;
  }

  countries: Country[] = [
    { country: 'United States', code: 'US' },
    { country: 'Canada', code: 'CA' },
    { country: 'United Kingdom', code: 'GB' },
    { country: 'Germany', code: 'DE' },
    { country: 'France', code: 'FR' },
    { country: 'Spain', code: 'ES' },
    { country: 'Italy', code: 'IT' },
    { country: 'Australia', code: 'AU' },
    { country: 'Brazil', code: 'BR' },
    { country: 'India', code: 'IN' }
  ];

  languages: Language[] = [
    { language: 'English', code: 'en' },
    { language: 'Spanish', code: 'es' },
    { language: 'German', code: 'de' },
    { language: 'Hindi', code: 'hi' },
    { language: 'French', code: 'fr' },
    { language: 'Portuguese', code: 'pt' }
  ];

}
