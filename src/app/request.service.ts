// request.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requests: any[] = []; // Array to store requests

  constructor() { }

  addRequest(request: any) {
    this.requests.push(request);
  }

  getRequests() {
    return this.requests;
  }

  updateRequestStatus(index: number, status: string) {
    this.requests[index].status = status;
  }
}
