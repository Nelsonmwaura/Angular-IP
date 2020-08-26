import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Qoutes } from '../qoute';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {


  @Input() qoute:Qoutes;
  @Output() isComplete = new EventEmitter<boolean>();

  qoutesComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  qouteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
