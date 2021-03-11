import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchContainer implements OnInit {
  @Output() typeAction = new EventEmitter();

  @Input() placeholder: string = 'buscar';

  private _searchSubject: Subject<string>

  constructor() {
    this._searchSubject = new Subject();
  }

  ngOnInit() {
    this._searchSubject
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.typeAction.emit({ eventType: 'SearchInputComponent', eventAction: 'inputType', value });
      })
  }

  public search({ target: { value } }) {
    this._searchSubject.next(value)
  }
}

