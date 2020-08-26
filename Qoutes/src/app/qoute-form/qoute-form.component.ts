import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoutes } from '../qoute';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQoute = new Qoutes(0, "", "", new Date());
  @Output() addQoute = new EventEmitter<Qoutes>();

  submitQoute() {
    this.addQoute.emit(this.newQoute);
  }

  constructor() { }

  ngOnInit() {
  }

}