import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;
  snapped!: boolean;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.snapped = false;
  }

  onSnap() {
    if (this.snapped == false) {
      this.faceSnap.snaps++;
      this.snapped = true;
      this.buttonText = "Snapped";
    } else {
      this.faceSnap.snaps--;
      this.snapped = false;
      this.buttonText = 'Oh Snap!';
    }
  }
}
