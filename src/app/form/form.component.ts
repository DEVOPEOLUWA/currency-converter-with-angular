import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  amount = 1;
  from = 'EUR';
  to = 'USD';
  rates: { [key: string]: number };

  GetAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }
  loadRates() {
    this.service
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.rates));
  }
  constructor(private service: MyserviceService) {}

  isShowDiv = false;
  isShow = false;
  function() {
    if (this.from === this.to) {
      this.isShowDiv = true;
    } else {
      this.isShow = true;
    }
  }
  convert(): number {
    return this.amount * this.rates[this.to];
  }
  ngOnInit(): void {
    this.loadRates();
  }
}
