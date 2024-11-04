import { KeyforgeServiceService } from './../../services/keyforge-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { KeyforgeData } from '../../model/keyforge-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  passwordForm: FormGroup;
  generatedPassword: string = '';
  keyforgeData! : KeyforgeData;
  isLoading: boolean = false;
  showGeneratedPassword: boolean = false;



  constructor(
    private formBuilder: FormBuilder,
    private keyForgeService : KeyforgeServiceService,
    private msg : MessageService,
  ) {
    this.passwordForm = this.formBuilder.group({
      passwordLength: [''],
      includeUppercaseLetters: [false],
      includeLowercaseLetters: [false],
      includeNumbers: [false],
      includeSpecialCharacters: [false]
    });
  }


  generatePassword(): void {
   this.isLoading = true;
    this.keyforgeData = this.passwordForm.value;
    this.keyForgeService.generatePassword(this.keyforgeData).subscribe({
      next: res => {
        this.msg.add({severity: 'success', summary: 'Sucesso', detail: 'Senha gerada!'});
        this.showGeneratedPassword = true;
        this.generatedPassword = res.generatedPassword;
        this.isLoading = false;
      },
      error: err => {
        this.msg.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao gerar a senha.' });
        this.isLoading = false;
      }
    });
  }

  isGeneratePasswordButtonEnabled(): boolean {
    const { passwordLength, includeUppercaseLetters, includeLowercaseLetters, includeNumbers, includeSpecialCharacters } = this.passwordForm.value;
    const isAnyCheckboxChecked =
      includeUppercaseLetters ||
      includeLowercaseLetters ||
      includeNumbers ||
      includeSpecialCharacters;
    return passwordLength > 0 && isAnyCheckboxChecked;
  }

  clearPassword(): void{
    this.showGeneratedPassword = false;
  }

  copyToClipboard(): void{
    if(this.generatedPassword){
      navigator.clipboard.writeText(this.generatedPassword).then( () => {
        this.msg.add({severity: 'info', summary: 'Sucesso', detail: 'Senha copiada com suceso!'});
      }).catch(error => {
        this.msg.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao copiar a senha!' });
      });
    }
  }

}
