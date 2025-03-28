import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-content-box',
  standalone: false,
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.css'
})
export class ContentBoxComponent {

  songs: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.searchSongs('Top Hits');
  }

  searchSongs(query: string) {
    this.spotifyService.getSongs(query).subscribe(
      (response: any) => {
        this.songs = response.tracks.items;
        console.warn(this.songs)
      },
      error => {
        console.error('Error fetching songs:', error);
      }
    );
  }

}
