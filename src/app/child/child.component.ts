import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  favoriteColorControl = new FormControl('');
  favoriteColor = '';

  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {
      this.userName = model;
  }

  onSubmit() {
    this.userNameChange.emit(this.userName);
  }

  constructor() { }

  ngOnInit() {
  }

}
