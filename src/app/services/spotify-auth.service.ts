import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private clientId = 'c2911d0554c24feab7b0f2782a22935c';
  private clientSecret = '45500def661f489d88eced90524712d9';
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) {}

  getAccessToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    const headers = new HttpHeaders({
      Authorization:
        'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.tokenUrl, body.toString(), { headers });
  }
}
