import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, UserService } from 'src/app/api/user.service'

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {

  results: Observable<any>;
  searchTerm: '';
  type: SearchType = SearchType.all;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.userService.searchData(this.searchTerm, this.type);
  }

}
