import { HelperService } from './helper.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	  setUserDetailsInHeader$: Observable<any>;
    private variableSubject = new Subject<any>();

  constructor(
    public helperService: HelperService
  ) {
		this.setUserDetailsInHeader$ = this.variableSubject.asObservable();
   }

	/**
	 * @desc Updating user details in header.
	 */

  setUserDetails(data:any) {
    this.variableSubject.next(data);
  }

	/**
	 * @desc Calling api for register user.
	 */

	register(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"auth/user",
			"post",
			data
		);
	}

	/**
	   * @desc API for save user disability.
	   */
	userDisability(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/userDisability",
			"post",
			data,
			true
		);
	}

	/**
	   * @desc Calling api for for user login with username/email and password
	*/
	login(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/login",
			"post",
			data
		);
	}

	/**
	 * @desc Function is used to check a user is logged in or not called every time
	 * 		 when a user performs any activity in application
	 */
	checkLogin(): Observable<any> {
		return this.helperService.makeHttpRequest(
			"auth/checkLogin",
			"post",
			{},
			true
		);
	}

	/**
	 * @desc Logout function for each user.
	 */
	logout(): Observable<any> {
		return this.helperService.makeHttpRequest(
			"auth/logout",
			"get",
			{},
			true
		);
	}

	/**
	 * @desc Calling api for date of birth of user.
	 */
	dob(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/dob",
			"post",
			data,
			true
		);
	}

	/**
	 * @desc Calling api for date of birth of user.
	 */
	zipCode(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/zipCode",
			"post",
			data,
			true
		);
	}

	/**
	 * @desc Get user addition details.
	 */
	getParticipantDetails(): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/getParticipantDetails",
			"get",
			{},
			true
		);
	}

	/**
	 * @desc Get user profile details.
	 */
	getProfileDetails(type): Observable<any>{
		return this.helperService.makeHttpRequest(
			"user/getProfileDetails",
			"post",
			type,
			true
		);
	}

	/**
	 * @desc Get user profile details.
	 */
	getParticipantProfile(): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/userProfile",
			"get",
			{},
			true
		);
    }

    /**
	 * @desc Get peer profile details.
	 */
	getPeerProfile(peerId): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/userProfile/"+peerId,
			"get",
			{},
			true
		);
	}

    /**
	 * @desc Function is used to show participant parameters.
	 */
	getParticipantParams(type): Observable<any>{
		return this.helperService.makeHttpRequest(
			"user/getParticipantParams",
			"post",
			type,
			true
		);
	}

	/**
	 * @desc Function is used to show participant parameters.
	 */
	saveParticipantParams(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/saveParticipantParams",
			"post",
			data,
			true
		);
	}

	/**
	 * @desc Function is used to save participant details.
	 */
	saveParticipantDetails(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/saveParticipantDetails",
			"post",
			data,
			true
		);
	}

	/**
	 * @desc Function is used to show participant parameters.
	 */
	saveUserProfileDetails(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/saveUserProfileDetails",
			"post",
			data,
			true
		);
	}

	/**
	 * @desc update session in each 10sec
	 */

	updatesessionTime(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"auth/updateSessionTime",
			"post",
			data,
			true
		);
    }

    /**
	 * @desc Function is used to get param.
	 */
	getParams(): Observable<any>{
		return this.helperService.makeHttpRequest(
			"user/getParams",
			"get",
			{},
			true
		);
    }

    /**
	 * @desc Function is used to get peer user list.
	 */
	getPeerList(data): Observable<any>{
		return this.helperService.makeHttpRequest(
			"user/getPeerList",
			"post",
			data,
			true
		);
    }

    /**
	 * @desc Function is used to get favorite list.
	 */
	getFavoriteList(): Observable<any>{
		return this.helperService.makeHttpRequest(
			"user/getFavoriteList",
			"get",
			{},
			true
		);
    }

    /**
	 * @desc save or delete favorite.
	 */

	favorite(data): Observable<any> {
		return this.helperService.makeHttpRequest(
			"user/favorite",
			"post",
			data,
			true
		);
	}  
}
