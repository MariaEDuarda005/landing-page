import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule // pois estamos usando o *ngIf que vem desse import
  ],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string="";
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary"

  submit(){
    this.onSubmit.emit();
  }
}
