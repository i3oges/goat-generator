import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GoatGenComponent } from "./goat-gen/goat-gen.component";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule
} from "@angular/material";
import { GoatService } from "./goat.service";

@NgModule({
  declarations: [AppComponent, GoatGenComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [GoatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
