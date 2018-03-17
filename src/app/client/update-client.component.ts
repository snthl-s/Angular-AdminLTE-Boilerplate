import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
  templateUrl: './update-client.component.html',
})
export class UpdateClientComponent implements OnInit {


  id: number;
  data: object = {};
  clients = [];
  exist = false;
  clientObj: object = {};
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateClient(client) {
    this.clientObj = {
      "CLIENT": client.CLIENT,
      "DESCRIPTION": client.DESCRIPTION
    };
    const url = `${""}&id=${this.id}`;
    this.http.put(url, JSON.stringify(this.clientObj), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = +params['id'];
  });
    this.http.get(``).subscribe(
      (res: Response) => {
        this.clients = res.json();
        for (var i = 0; i < this.clients.length; i++) {
          if (parseInt(this.clients[i].id) === this.id) {
            this.exist = true;
            this.data = this.clients[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }
}
