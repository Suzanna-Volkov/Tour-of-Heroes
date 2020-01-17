import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of} from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: Send the message _after_ fetching the heroes.
    this.messageService.add('HeroService: Heroes have been fetched!');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: Hero id=${id} has been fetched!`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
