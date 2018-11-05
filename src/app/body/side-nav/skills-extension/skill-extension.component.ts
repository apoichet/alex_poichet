import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SkillExtension} from './skill-extension';

@Component({
  selector: 'app-skill-extension',
  template: `<div (click)="onClick()">
    <div class="custom-checkbox" id="skill-color-box" [style.background-color]="color" ></div>
    <label>{{skillName}}</label>
  </div>`,
  styles: ['#skill-color-box { width: 15px; height: 15px; float: left; margin-right: 10px; margin-top: 5px; border-radius: 3px;}']
})
export class SkillExtensionComponent implements OnInit, OnChanges {
  color: String;
  @Input() skillCheck: Boolean;
  @Input() skillName: String;
  @Input() skillColor: String;
  @Output() skillSelected: EventEmitter<Boolean> = new EventEmitter();

  changeColor() {
    this.color = this.skillCheck ? this.skillColor : '#c8c0c9';
  }

  onClick() {
    this.skillCheck = !this.skillCheck;
    this.skillSelected.emit(this.skillCheck);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }

  ngOnInit(): void {
    this.changeColor();
  }
}
