import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MutantService } from '../services/mutant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dnaInput: string = '';
  dnaArray: string[] = [];
  isMutant: boolean | null = null;
  isLoading: boolean = false;
  error: string = '';
  gridSize: number = 6;
  
  constructor(private mutantService: MutantService) {}
  
  onDNAInput(event: any): void {
    this.error = '';
    this.isMutant = null;
    
    const input = event.target.value.toUpperCase();
    this.dnaInput = input;
    
    // Parse input into array
    const rows = input.split(',').map(row => row.trim()).filter(row => row);
    
    // Validate grid format
    if (rows.length > 0) {
      const expectedLength = rows[0].length;
      const isValid = rows.every(row => 
        row.length === expectedLength && 
        /^[ATCG]+$/.test(row)
      );
      
      if (isValid) {
        this.dnaArray = rows;
        this.gridSize = rows.length;
      } else {
        this.dnaArray = [];
        if (input.length > 0) {
          this.error = 'Formato inválido. Use letras A,T,C,G separadas por comas. Ej: ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG';
        }
      }
    } else {
      this.dnaArray = [];
    }
  }
  
  analyzeDNA(): void {
    if (this.dnaArray.length === 0) {
      this.error = 'Por favor ingrese una secuencia de ADN válida';
      return;
    }
    
    this.isLoading = true;
    this.error = '';
    
    try {
      setTimeout(() => {
        this.isMutant = this.mutantService.isMutant(this.dnaArray);
        this.isLoading = false;
      }, 500);
    } catch (error) {
      this.error = 'Error al analizar el ADN: ' + (error as Error).message;
      this.isLoading = false;
    }
  }
  
  clearInput(): void {
    this.dnaInput = '';
    this.dnaArray = [];
    this.isMutant = null;
    this.error = '';
    this.gridSize = 6;
  }
  
  loadExample(isMutantExample: boolean): void {
    if (isMutantExample) {
      this.dnaInput = 'ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG';
    } else {
      this.dnaInput = 'ATGCGA,CAGTGC,TTATTT,AGACGG,CGCCTA,TCACTG';
    }
    this.onDNAInput({ target: { value: this.dnaInput } });
  }
  
  getCellClass(row: number, col: number): string {
    if (this.dnaArray.length === 0) return '';
    
    const char = this.dnaArray[row][col];
    const baseClasses = 'w-12 h-12 flex items-center justify-center text-lg font-bold rounded transition-all duration-300';
    
    const colorMap: { [key: string]: string } = {
      'A': 'bg-red-100 text-red-700 hover:bg-red-200',
      'T': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      'C': 'bg-green-100 text-green-700 hover:bg-green-200',
      'G': 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
    };
    
    return `${baseClasses} ${colorMap[char] || 'bg-gray-100 text-gray-700'}`;
  }
}
