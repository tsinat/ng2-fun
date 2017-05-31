import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { EventService } from '../shared/event.service';

@Injectable() 
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: Router) {

    }

    CanActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id']);

        if(!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}