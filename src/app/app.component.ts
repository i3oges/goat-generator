import { Component, OnInit } from "@angular/core";
import { GoatService } from "./goat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  goats: string[];
  goatsShowing: string[] = [];
  goatCounter = 0;

  constructor(private goatService: GoatService) {}

  getNextGoat() {
    console.log(this.goats.data[this.goatCounter].link);
    this.goatsShowing.push(this.goats.data[this.goatCounter]);
    console.log(this.goatsShowing);
    this.goatCounter++;
  }

  ngOnInit() {
    this.goatService.getGoatList().subscribe(goats => {
      this.goats = goats;
    });
  }
}
