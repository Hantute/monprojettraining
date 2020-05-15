import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptiondisabled]'        // c'est ce que l'utilise pour appeler notre directive dans le bon endroit
})
export class InscriptiondisabledDirective {

  @HostBinding('class.link-is-disabled') // Décorateur comme input et output => son rôle est de permettre d'appliquer une classe CSS suite à une conditio
  status: boolean;       // indique le status de hostbinding
  @Input()
  set appInscriptiondisabled(value) {          // correspond au selector du directive
    this.status = value;                      // 
  }

  constructor() { }

}
