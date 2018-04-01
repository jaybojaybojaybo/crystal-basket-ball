import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';
import { ListService } from "../list.service";
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getLists();
    let testlists = this.getLists();
    console.log(testlists);
  }

  getLists(): void {
    this.listService.getLists()
      .subscribe(lists => this.lists = lists);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.listService.addList({ name } as List)
      .subscribe(list => {
        this.lists.push(list);
      });
  }

  delete(list: List): void {
    this.lists = this.lists.filter(h => h !== list);
    this.listService.deleteList(list).subscribe();
  }
}
