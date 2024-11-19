import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // @Input({required:true}) size!: {width: string, height: string}
  // @Output() sizeChange = new EventEmitter<{width:string; height:string}>();

  // Instead of creating seperate Input and Output we can use the model to create the custom 2 way binding
  size = model.required<{width:string; height:string}>();
  onReset() {
    this.size.set({
      width: '200',
      height: '100',
    })
  }
}
