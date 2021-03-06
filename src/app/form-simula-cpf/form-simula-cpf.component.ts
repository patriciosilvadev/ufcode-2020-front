import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form-simula-cpf',
  templateUrl: './form-simula-cpf.component.html',
  styleUrls: ['./form-simula-cpf.component.scss']
})
export class FormSimulaCpfComponent implements OnInit {

  banco;
  usuario_cpf;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      banco
    },
    private authService: AuthService,
    public dialogRef: MatDialogRef<FormSimulaCpfComponent>
  ) {

    this.banco = data.banco;
  }

  ngOnInit(): void { }

  close(): void {
    this.dialogRef.close({

    });
  }

  verificaCPF() {

    console.log(this.usuario_cpf);

    this.authService.verificarCPF(this.usuario_cpf).subscribe(res => {
      if (res) {
        this.dialogRef.close({
          verificar: true,
          cadastrar: !res['ok'],
          usuario_cpf: this.usuario_cpf,
        });
      }
    }, error => {

    })
  }
}
