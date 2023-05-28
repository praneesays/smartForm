import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguageSubject = new BehaviorSubject<string | null>(null);
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  constructor() {
    this.loadSelectedLanguage();
  }

  loadSelectedLanguage() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.selectedLanguageSubject.next(JSON.parse(storedLanguage));
    }
  }

  setSelectedLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
  }

  clearSelectedLanguage() {
    this.selectedLanguageSubject.next(null);
    localStorage.removeItem('selectedLanguage');
  }
}
