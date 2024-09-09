import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../theme/shared/shared.module';
import { Router, RouterLink } from '@angular/router';
import { IProducto } from '../Interfaces/iproducto';
import { ProductoService } from '../Services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  listaproductos: IProducto[] = [];

  constructor(private productoServicio: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.cargaproductos();
  }

  cargaproductos() {
    this.productoServicio.todos().subscribe((data) => {
      this.listaproductos = data;
      console.log(data);
    });
  }

  // Navegar a la pantalla de nuevo producto
  nuevoProducto() {
    this.router.navigate(['/productos/nuevo']);
  }

  editarProducto(idProducto: number) {
    // Corregido: uso correcto de las comillas invertidas para la interpolación
    this.router.navigate([`/productos/editar/${idProducto}`]);
  }

  trackByFn() {}

  eliminar(idProducto: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoServicio.eliminar(idProducto).subscribe((data) => {
          this.cargaproductos();
        });
        Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
      } else {
        Swal.fire('Error', 'Ocurrió un error', 'error');
      }
    });
  }
}
