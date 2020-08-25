import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qoutes: Qoute[] = [
    new Qoute(1, 'We are but lost without God'),
    new Qoute(2, 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.'),
    new Qoute(3,'If I were a tree, I would have no reason to love a human.'), 
    new Qoute(4, 'When a poet digs himself into a hole, he doesnt climb out.He digs deeper, enjoys the scenery, and comes out the other side enlightened.'),
    new Qoute(5, 'If you cannot hold me in your arms, then hold my memory in high regard. And if I cannot be in your life ,then at least let me live in your heart.'),
    new Quote(6, 'If you’re searching for a quote that puts your feelings into words – you won’t find it .You can learn every language and read every word ever written – but you’ll never find what’s in your heart.How can you ? ')
  ];
}
