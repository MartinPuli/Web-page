import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActualizacionesComponent } from './actualizaciones/actualizaciones.component';
import { LogrosComponent } from './general/logros/logros.component';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterOutlet, ProductosComponent, LogrosComponent, ActualizacionesComponent, HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'web-page' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('web-page');
  });

  it('should exist app-productos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-productos')).toBeTruthy();
  });

  it('should exist app-logros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-logros')).toBeTruthy();
  });

  it('should exist app-actualizaciones', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-actualizaciones')).toBeTruthy();
  });
});
