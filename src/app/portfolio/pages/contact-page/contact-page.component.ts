import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarMenuComponent } from '../../components/nav-bar-menu/nav-bar-menu.component';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  imports: [NavBarMenuComponent, RouterOutlet, ContactComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {}
