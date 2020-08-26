import { Qoutes } from './../qoute';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoute: Qoutes[] = [
    new Qoutes(1, 'We are but lost without God', '― Nelson mwaura '),
    new Qoutes(2, 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.', '― Albert Einstein'),
    new Qoutes(3,'If I were a tree, I would have no reason to love a human.', ' ― Maggie Stiefvater, The Raven Boys'), 
    new Qoutes(4, 'When a poet digs himself into a hole, he doesnt climb out.He digs deeper, enjoys the scenery, and comes out the other side enlightened.','― Sonnie Karenju'),
    new Qoutes(5, 'If you cannot hold me in your arms, then hold my memory in high regard. And if I cannot be in your life ,then at least let me live in your heart.','― Derrick misati'),
    new Qoutes(6, 'If you’re searching for a quote that puts your feelings into words – you won’t find it .You can learn every language and read every word ever written – but you’ll never find what’s in your heart.How can you ? ','― Nelson Mwaura'),
  ];

  toggleDetails(index){
    this.qoute[index].showDescription = !this.qoute[index].showDescription;
  }

  completeQoutes(isComplete, index){
    if (isComplete) {
      this.qoute.splice(index,1);
    }
  }

  AuthorDetails(index){
    this.qoute[index].showDescription = !this.qoute[index].showDescription;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
