import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
			<button (click)="onClickMe()">Click me!!</button>
			<p>{{clickMessage}}</p>
			<input (keyup)="onKey($event)">
			<p>{{values}}</p>
			<h1>{{title}}</h1>
			<ul>
				<p *ngIf="Subjects.length > 3" >Lot of things to learn</p>
				<li *ngFor="let sub of Subjects">
					<b><i>{{sub}}</i></b>
				</li>
			</ul>
			<h1>Wanna learn more? Add more!!<h1>
			<input #newSubject
				(keyup.enter)="addSubject(newSubject.value)"
				(blur)="addSubject(newSubject.value); newSubject.value='' ">
			<p></p>
			<button (click)="counter()">CLICK ME</button>
			<p *ngIf="count>0">{{count}}</p>
		`
})
export class AppComponent {
  title = 'Skills to master';
  Subjects=["HTML","CSS","Angular","Typescript","Bootstrap"]; 
  getTitle(){
	return this.title;
}
	clickMessage = '';

    onClickMe() {
    this.clickMessage = 'Hi there!';
    }
	values = '';

 	onKey(event: any) { 
    this.values += event.target.value + ' | ';
    }
	addSubject(newSubject: string){
		if(newSubject){
			this.Subjects.push(newSubject);
		}
	}
	count=0;
	counter(){
		this.count++;
	}
}
