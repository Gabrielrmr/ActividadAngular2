import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CaseSingleComponent } from './case-single/case-single.component';
import { CasesComponent } from './cases/cases.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LisencesComponent } from './lisences/lisences.component';
import { PractiesAreaComponent } from './practies-area/practies-area.component';
import { PractiesSingleComponent } from './practies-single/practies-single.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Error404Component,HomeComponent,AboutComponent,BlogComponent,CaseSingleComponent,CasesComponent,ChangeLogComponent,ContactComponent,FooterComponent,HeaderComponent,LisencesComponent,PractiesAreaComponent,PractiesSingleComponent,PricingComponent,TestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadAngular';
}
