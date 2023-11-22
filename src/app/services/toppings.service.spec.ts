import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ToppingsService } from './toppings.service';
import { Topping } from '../models/topping.model';

describe('ToppingsService', () => {
  let service: ToppingsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ToppingsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getToppings should return toppings list', (done: DoneFn) => {
    const mock: Topping[] = [
      {
        id: 1,
        name: 'Cheese',
        price: 2,
      },
      {
        id: 2,
        name: 'Bacon',
        price: 2,
      },
    ];

    service.getToppings().subscribe((toppings) => {
      expect(toppings).toEqual(mock);
      done();
    });

    const req = controller.expectOne(`${service.apiBase}/udhTkG/toppings`)
    expect(req.request.method).toBe('GET')
    
    req.flush(mock)
    controller.verify()
  });
});
