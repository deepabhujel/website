import { Component } from '@angular/core';
import { Router } from 'express';
import { RouterLink, ROUTES } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
