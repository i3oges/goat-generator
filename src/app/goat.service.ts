import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GoatService {
  configUrl: string;
  constructor(private http: HttpClient) {}
  clientId: string = "1c259006596c052";

  getGoatList() {
    this.configUrl = `https://api.imgur.com/3/gallery/r/goats`;
    return this.http.get(this.configUrl, {
      headers: {
        Authorization: `Client-ID ${this.clientId}`
      }
    });
  }
}
