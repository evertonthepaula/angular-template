import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

// ACTIONS
import { Logout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-header-container',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderContainer implements OnInit {
  constructor(private store: Store) { }

  ngOnInit() { }

  logout(){
    this.store.dispatch(new Logout());
  }
}

