import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public editTrip(trip: Trip) {
    console.log('Editing trip:', trip); // Debugging log
    localStorage.removeItem('tripCode'); // Clear previous value
    localStorage.setItem('tripCode', trip.code); // Store current tripCode
    console.log('Stored tripCode in localStorage:', trip.code); // Debugging log
    this.router.navigate(['edit-trip']); // Navigate to edit-trip route
  }
}