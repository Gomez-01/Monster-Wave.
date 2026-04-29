import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
    CardModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  drinks: MonsterDrink[] = [
    { id: 1, name: 'Monster Energy Original Green', flavor: 'Classic Citrus', sugarFree: false, price: 10.49, release: 2002 },
    { id: 2, name: 'Monster Energy Zero Sugar', flavor: 'Classic Citrus', sugarFree: true, price: 11.49, release: 2023 },
    { id: 3, name: 'Monster Dragon Ice Tea', flavor: 'Lemon Tea', sugarFree: false, price: 11.49, release: 2019 },
    { id: 4, name: 'Monster Ultra White', flavor: 'Light Citrus', sugarFree: true, price: 11.49, release: 2012 },
    { id: 5, name: 'Juice Monster Rio Punch', flavor: 'Papaya Cream', sugarFree: false, price: 11.49, release: 2024 }
  ];

  formModel: MonsterFormModel = this.emptyForm();
  editingId: number | null = null;
  private nextId = 6;

  saveDrink(): void {
    const { name, flavor } = this.formModel;

    if (!name.trim() || !flavor.trim()) return;

    if (this.editingId) {
      this.drinks = this.drinks.map(d =>
        d.id === this.editingId ? { ...d, ...this.formModel } : d
      );
    } else {
      this.drinks.unshift({
        id: this.nextId++,
        ...this.formModel
      });
    }

    this.cancelEdit();
  }

  startEdit(d: MonsterDrink): void {
    this.editingId = d.id;
    this.formModel = { ...d };
    delete (this.formModel as any).id;
  }

  cancelEdit(): void {
    this.editingId = null;
    this.formModel = this.emptyForm();
  }

  deleteDrink(id: number): void {
    this.drinks = this.drinks.filter(d => d.id !== id);
    if (this.editingId === id) this.cancelEdit();
  }

  trackById = (_: number, d: MonsterDrink) => d.id;

  private emptyForm(): MonsterFormModel {
    return {
      name: '',
      flavor: '',
      sugarFree: false,
      price: 0,
      release: new Date().getFullYear()
    };
  }
}

interface MonsterFormModel {
  name: string;
  flavor: string;
  sugarFree: boolean;
  price: number;
  release: number;
}

interface MonsterDrink extends MonsterFormModel {
  id: number;
}