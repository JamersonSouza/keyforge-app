import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { HomeComponent } from 'src/app/modules/keyforge-generate/pages/home/home.component';
import { ListComponent } from 'src/app/modules/keyforge-generate/pages/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    CheckboxModule,
    ProgressSpinnerModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule

  ],
  providers:[MessageService]
})
export class SharedModuleModule { }
