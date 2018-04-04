import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boards= [
      {id: 1, name: "Work"},
      {id: 2, name: "Family"},
      {id: 3, name: "Chores"}
    ];

    const lists= [
      {id: 1, name: "file reports"},
      {id: 2, name: "group meeting"},
      {id: 3, name: "QA"}
    ];
    return {boards, lists};
  }


}
