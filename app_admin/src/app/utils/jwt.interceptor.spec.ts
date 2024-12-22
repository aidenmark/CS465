import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { JwtInterceptor } from '../utils/jwt.interceptor';

describe('JwtInterceptor', () => {
  let httpMock: HttpTestingController;

  // const interceptor: HttpInterceptorFn = (req, next) => 
  //   TestBed.runInInjectionContext(() => jwtInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    // expect(interceptor).toBeTruthy();
    // Mock the JWT token
    localStorage.setItem('token', 'your-jwt-token'); 

    // Make a test request
    const req = httpMock.expectOne('your-api-endpoint');

    // Check if the Authorization header is present and has the correct value
    expect(req.request.headers.has('Authorization')).toBeTruthy();
    expect(req.request.headers.get('Authorization')).toBe('Bearer your-jwt-token');
  });
});
