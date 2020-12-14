import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CONSTANTS } from '../config/constants';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
	isLoggedIn: boolean = false;
	months:any;
	days: any = [];
	years: any = [];
	currentDate = new Date();
  	constructor(
		private http: HttpClient,
		private spinner: NgxSpinnerService
	) { }

	/**
	 * Get token and send it to interceptor
	 */
	getToken() {
		return localStorage.getItem('token');
	}

	/**
	 * Check if the API is required for Token
	 */
	public isAuthenticated(): boolean {
		return this.isLoggedIn;
	}
  	/**
	 * @desc Common function to call GET/POST with/without parameters
	 * @param url
	 * @param type
	 * @param data
	 * @param isLoggedIn
	 */
	makeHttpRequest(url:any, type = 'get', data:any = {}, isLoggedIn = false) {
			let httpRequest: any;
			this.isLoggedIn = isLoggedIn;
			url = CONSTANTS.API_ENDPOINT + url;

			if (type == 'post') {
				httpRequest = this.http[type](url, data);
			} else {
				httpRequest = this.http['get'](url);
			}
			(data['showSpinner'] == undefined || (data['showSpinner'] && data['showSpinner'] != false)) &&
				this.spinner.show();
			return httpRequest.pipe(
				map(res => {
					let response = res;
					(data['showSpinner'] == undefined || (data['showSpinner'] && data['showSpinner'] != false)) &&
						this.spinner.hide();
					return response;
				}),
				catchError(err => of([]))
			);
		}

	validateAllFormFields(formGroup: FormGroup) {
			//{1}
			Object.keys(formGroup.controls).forEach(field => {
				//{2}
				const control = formGroup.get(field); //{3}
				if (control instanceof FormControl) {
					//{4}
					control.markAsTouched({ onlySelf: true });
				} else if (control instanceof FormGroup) {
					//{5}
					this.validateAllFormFields(control); //{6}
				}

			});
		}

	daysInMonth(m:any, y:any) {
		switch (m) {
		case 2:
			return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
		case 4: case 6: case 9: case 11:
			return 30;
		default:
			return 31;
		}
	}

	isValidDate(d:any, m:any, y:any) {
		return m >= 1 && m < 13 && d > 0 && d <= this.daysInMonth(m, y);
	}

	setDates() {
		this.months = [ "Janaury", "February", "March", "April", "May", "June", "July", "August",
		"September", "October", "November", "December"
		];

		for (let i = 1; i <= 31; i++) {
		this.days.push(i);
		}

		for (let i = this.currentDate.getFullYear(); i >= 1920; i--) {
		this.years.push(i);
		}
		return { "days" : this.days, "months" : this.months, "years" : this.years };
	}  
}
