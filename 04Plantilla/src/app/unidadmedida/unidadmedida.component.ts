import { Component, OnInit } from '@angular/core';
import { IUnidadMedida } from '../Interfaces/iunidadmedida';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from '../theme/shared/shared.module';
import { UnidadmedidaService } from '../Services/unidadmedida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unidadmedida',
  standalone: true,
  imports: [RouterLink, SharedModule],
  templateUrl: './unidadmedida.component.html',
  styleUrls: ['./unidadmedida.component.scss']  // Corrección aquí (styleUrls en plural)
})
export class UnidadmedidaComponent implements OnInit {
  listaunidades: IUnidadMedida[] = [];

  constructor(private unidadServicio: UnidadmedidaService, private router: Router) {}

  ngOnInit(): void {
    this.cargarUnidades();
  }

  cargarUnidades() {
    this.unidadServicio.todos().subscribe((data) => {
      this.listaunidades = data;
    });
  }

  // Navega al formulario de edición de una unidad de medida
  editarUnidad(idUnidad_Medida: number): void {
    this.router.navigate([`/unidadmedida/editar/${idUnidad_Medida}`]);  // Corrección aquí
  }

  nuevaUnidad(): void {
    this.router.navigate(['/unidadmedida/nueva']);
  }

  eliminar(idUnidad_Medida: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.unidadServicio.eliminar(idUnidad_Medida).subscribe(() => {
          Swal.fire('Eliminado', 'La unidad de medida ha sido eliminada', 'success');
        
          this.listaunidades = this.listaunidades.filter(unidad => unidad.idUnidad_Medida !== idUnidad_Medida);
        });
      }
    });
  }

  actualizarUnidadActualizada(unidadActualizada: IUnidadMedida): void {
    const index = this.listaunidades.findIndex(unidad => unidad.idUnidad_Medida === unidadActualizada.idUnidad_Medida);
    if (index > -1) {
      this.listaunidades[index] = unidadActualizada;
    }
  }
}
