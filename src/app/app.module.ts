import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipe-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipe-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModules} from './app-routing.modules';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RecipeService} from './recipes/recipe.service';


// import { WineryComponent } from './winery/winery.component';
// import { ServerElementComponent } from './server-element/server-element.component';
// import { GameControlComponent } from './game-control/game-control.component';
// import { OddComponent } from './odd/odd.component';
// import { EvenComponent } from './even/even.component';
// import {ServerComponent} from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// import { BooksComponent } from './books/books.component';
// import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
     AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
    // WineryComponent,
    // ServerElementComponent,
    // GameControlComponent,
    // OddComponent,
    // EvenComponent
    // ServerComponent,
    // ServersComponent,
    // BooksComponent,
    // AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModules
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
