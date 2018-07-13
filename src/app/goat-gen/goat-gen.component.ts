import { Component, OnInit, Input } from "@angular/core";
import { GoatService } from "../goat.service";

@Component({
  selector: "goat-gen",
  templateUrl: "./goat-gen.component.html",
  styleUrls: ["./goat-gen.component.css"]
})
export class GoatGenComponent {
  @Input() goat: string;

  ngOnInit() {
    console.log(this.goat);
  }
}
