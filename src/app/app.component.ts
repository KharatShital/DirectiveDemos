import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'DirectiveDemo';
  showSecret=false;
  log:any=[]

  onToggleDetails(){
    this.showSecret =!this.showSecret;
    this.log.push(this.log.length + 1)
  }
}
