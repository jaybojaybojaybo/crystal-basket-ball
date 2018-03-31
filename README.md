# Crystal Basket Ball
#### by Jasun Feddema

## Description
Crystal Basket Ball: Like a traditional NBA center in the low post, this app makes a huuuuuge pivot.
What started out as a statistics drive basketball performance prediction app, is now recreating the Trello app to help the app creator finish the app they are attempting to make.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

##User Stories

* As a user, I want to create boards for projects that I need to complete.
* As a user, I want to add lists to the boards to represent phases of my project.
* As a user, I want to add cards to my lists that represent each task that must be completed within the umbrella board.
* As a user, I want to add, delete, update, and get details on every board, list, and card.
* As a user, I want to move cards from one list to another.
* As a user, I want to see the % of completeness of my boards.
* As a user, I want a record of all completed tasks and projects.

##Specs

* User can create a new board from the dashboard homepage:
  - example input:
      - user clicks button to create new boards.
      - user inputs "Work" as the board's name.
  - example output:
      - on user dashboard, "Work" displays as a board.

* User can create a new list inside the board:
  - example input:
      - user selects "Edit" button within a board div
      - user enters "To Do" as a list
  - example output:
      - within the "Work" board's details page is a new "To Do" list

* User can create a new card inside the list:
  - example input:
      - user selects "Add Card" button within the "To Do" list div
      - user inputs "file reports" task to create a card
  - example output:
      - there is a new "file reports" card inside the "To Do" list

* User can move a card into a new list:
  - example input:
      - user has created a "completed" list under the "Work" board
      - user clicks and drags the "file reports" card into the "completed" list
  - example output:
      - within the "Work" board, "To Do" list is empty and "completed" has the "file reports" card inside it

* User can delete or update every board, list, or card
  - example input:
      - user presses "delete" button on a board, list, or card
  - example output:
      - the item is deleted.
      - the respective board is no longer on the dashboard
      - the respective list is no longer in its respective board
      - the respective card is no longer in its respective list

  - example input:
      - user presses "edit" button on a board, list, or card
      - user enters "stuff" as the new name
  - example output:
      - board's name appears as "stuff"
      - list's name appears as "stuff"
      - card's name appears as "stuff"

* User can see completion statistics on the dashboard
  - example input:
      - Within the "Work" board, user has moved 3 of 4 total cards into the "completed" list
  - example output:
      - "Completed: 75%" will show up as a detail on the "Work" board's div on the dashboard

* User can see completed boards on the "Wall of Completion"
  - example input:
      - Within the "Work" board, user has put 4 of 4 total cards into the "completed" list
  - example output:
      - Entire "Work" board has been moved to the "Wall of Completion" dashboard

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
