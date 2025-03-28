import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId = 'c2911d0554c24feab7b0f2782a22935c';
  private clientSecret = '45500def661f489d88eced90524712d9';
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  // Get Token
  private getToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(this.clientId + ':' + this.clientSecret)}`
    });

    return this.http.post(this.tokenUrl, body.toString(), { headers });
  }

  // Get Songs from Spotify
  getSongs(query: string): Observable<any> {
    return new Observable(observer => {
      this.getToken().subscribe(tokenData => {
        const accessToken = tokenData.access_token;
        const headers = new HttpHeaders({
          Authorization: `Bearer ${accessToken}`
        });

        this.http.get(`${this.apiUrl}/search?q=${query}&type=track`, { headers })
          .subscribe(
            data => observer.next(data),
            error => observer.error(error)
          );
      });
    });
  }
}
