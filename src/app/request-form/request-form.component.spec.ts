import { Component } from '@angular/core';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {
  startLocation: string = '';
  endLocation: string = '';
  availableSeats: number = 0;
  phoneNumber: string = '';
  requests: any[] = [];
  isChatEnabled: boolean = true; // Assuming chat is enabled by default

  submitForm() {
    const request = {
      startLocation: this.startLocation,
      endLocation: this.endLocation,
      availableSeats: this.availableSeats,
      phoneNumber: this.phoneNumber,
      status: 'Open',
      acceptedRequests: 0
    };
    this.requests.push(request);
    this.clearForm();
  }

  clearForm() {
    this.startLocation = '';
    this.endLocation = '';
    this.availableSeats = 0;
    this.phoneNumber = '';
  }

  acceptRequest(request: any) {
    request.acceptedRequests++;
    if (request.acceptedRequests === request.availableSeats) {
      request.status = 'Closed';
    }
    this.availableSeats--; // Decrease available seats counter
  }
}
