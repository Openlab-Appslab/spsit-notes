import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/classes/note';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  showModal: boolean = false;

  branches = ['INTELIGENTNÉ TECHNOLÓGIE', 'ELEKTROTECHNIKA', 'INFORMAČNÉ A SIEŤOVÉ TECHNOLÓGIE', 'MECHATRONIKA', 'STROJÁRSTVO', 'LOGISTIKA', 'TECHNICKÉ LÝCEUM']
  teachers = [];
  file: any;
  notes: Note[] = [
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
  ]

  fileName = '';

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('tumbnail', file, );

    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
    document.querySelector('.notes')?.classList.toggle('blur');
    
  }


}
