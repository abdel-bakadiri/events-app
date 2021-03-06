import { ListEventsService } from './list-events.service';
import { Component, OnInit } from '@angular/core';
import { EventIt } from '../../models/event';
import { range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'event-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  title: string = 'International IT Events';
  widthImage = 50;
  heightImage = 50;
  marginImage = 2;
  showImage = true;
  theRatingStars: number;
  errorMessage: string;
  private _filteredByName = '';
  public get filteredByName() {
    return this._filteredByName;
  }
  public set filteredByName(value) {
    const filterLowerCased = value.toLocaleLowerCase();
    this.filteredEvents = this.events.filter((eventIt) =>
      eventIt.name.toLocaleLowerCase().includes(filterLowerCased)
    );
    this._filteredByName = value;
  }
  filteredEvents: EventIt[] = [];
  events: EventIt[] = [];

  constructor(private listEventsService: ListEventsService) {}

  ngOnInit(): void {
    this.listEventsService.getEvents().subscribe({
      next: (eventsIt) => {
        this.events = eventsIt;
        this.filteredEvents = this.events;
      },
      error: (errMessage) => {
        this.errorMessage = errMessage;
      },
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onGetRatingStars(ratingStars: number) {
    this.theRatingStars = ratingStars;
  }
}
