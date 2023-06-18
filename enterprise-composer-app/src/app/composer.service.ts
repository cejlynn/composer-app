import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
    
    constructor() {
        this.composers = [
            {
                composerId: 100, fullName: "John Williams", genre: "Film Composer"
            },
            {
                composerId: 101, fullName: "Nobuo Uematsu", genre: "Video Game Composer"
            },
            {
                composerId: 102, fullName: "Ludwig Beethoven", genre: "Classical Composer"
            },
            {
                composerId: 103, fullName: "Claude Debussy", genre: "Classical Composer"
            },
            {
                composerId: 104, fullName: "Martin O Donnell", genre: "Video Game Composer"
            },
        ];
  }

  // fliters search bar
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLocaleLowerCase().indexOf(name) > -1
        )
      )
    );
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
