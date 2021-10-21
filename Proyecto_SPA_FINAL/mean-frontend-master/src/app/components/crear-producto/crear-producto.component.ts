import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo ='Crear Persona';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Documento: ['', Validators.required],
      Fecha: ['', Validators.required],
      Email: ['', Validators.required],
      Telefono: ['', Validators.required],
      Usuario: ['', Validators.required],
      Password: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('Nombre')?.value,
      apellido: this.productoForm.get('Apellido')?.value,
      documento: this.productoForm.get('Documento')?.value,
      fecha: this.productoForm.get('Fecha')?.value,
      email: this.productoForm.get('Email')?.value,
      telefono: this.productoForm.get('Telefono')?.value,
      usuario: this.productoForm.get('Usuario')?.value,
      password: this.productoForm.get('Password')?.value,

    }

    if(this.id !== null){
      // Editamos persona
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
        this.toastr.info('La persona fue actualizada con exito!', 'Persona Actualizada!');
        this.router.navigate(['/']);
      }, error => {
        console.error(error);
        this.productoForm.reset();
      })
    } else{
      // Agregamos Persona
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        this.toastr.success('La persona fue registrado con exito!', 'Producto Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.error(error);
        this.productoForm.reset();
      })
    }

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Persona';
      this._productoService.obtenerProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          Nombre: data.nombre,
          Apellido: data.apellido,
          Documento: data.documento,
          Fecha: data.fecha,
          Email: data.email,
          Telefono: data.telefono,
          Usuario: data.usuario,
          Password: data.password,
        })
      })
    }
  }
}
