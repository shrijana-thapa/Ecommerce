import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { authInterceptor } from './auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthInterceptor (class)', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true, // ✅ important! allows multiple interceptors
    }
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add Authorization header when token exists', () => {
    localStorage.setItem('authToken', '123');

    http.get('/test').subscribe();

    const req = httpMock.expectOne('/test');
    expect(req.request.headers.get('Authorization')).toBe('Bearer 123');
  });

  it('should not add Authorization header when token does not exist', () => {
  localStorage.removeItem('authToken');

  http.get('/test').subscribe();

  const req = httpMock.expectOne('/test');
  expect(req.request.headers.has('Authorization')).toBeFalse();
});

  it('should not add Authorization header when token is empty string', () => {
    localStorage.setItem('authToken', '');  // simulate empty token

    http.get('/test').subscribe();

    const req = httpMock.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeFalse();

    req.flush({});
  });

});
