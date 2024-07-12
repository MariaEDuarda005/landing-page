import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BenefitComponent } from '../benefit/benefit.component';
import { FooterComponent } from '../footer/footer.component';

// O decorator @Component é usado para definir as propriedades do componente
@Component({
  selector: 'app-home', // como vou referenciar esse compenente em outro componente
  standalone: true, // indica que pode ser usado sem ser declarado em um módulo Angular.
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterFormComponent, BenefitComponent, FooterComponent], // importar outros módulos ou componentes que este componente pode usar.
  providers: [], // refistrar serviços que o componente ou seus descendentes podem injetar através de injeção de dependencia 
  templateUrl: './home.component.html', 
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
