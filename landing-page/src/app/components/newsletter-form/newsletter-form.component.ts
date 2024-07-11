import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor() {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    console.log(this.newsletterForm.value)
  }

  // onSubmit(){
  //   this.loading.set(true);
  //   if(this.newsletterForm.valid){
  //     this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
  //       next: () => {
  //         this.newsletterForm.reset();
  //         this.loading.set(false);
  //       },
  //       error: () => this.loading.set(false)
  //     })
  //   }
  // }
}
