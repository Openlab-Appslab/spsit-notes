import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/classes/note';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  notes: Note[] = [
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
    new Note('test', 'test', 'test', 1, 'test', "https://img.icons8.com/ios/50/ffffff/math.png"),
  ]
}
