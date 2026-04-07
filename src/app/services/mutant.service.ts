import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutantService {
  
  isMutant(dna: string[]): boolean {
    if (!this.validateDNA(dna)) {
      throw new Error('Invalid DNA sequence');
    }

    const n = dna.length;
    let sequenceCount = 0;
    
    // Check horizontal sequences
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= n - 4; j++) {
        if (this.checkSequence(dna[i], j)) {
          sequenceCount++;
          if (sequenceCount > 1) return true;
        }
      }
    }
    
    // Check vertical sequences
    for (let j = 0; j < n; j++) {
      for (let i = 0; i <= n - 4; i++) {
        if (this.checkVerticalSequence(dna, i, j)) {
          sequenceCount++;
          if (sequenceCount > 1) return true;
        }
      }
    }
    
    // Check diagonal (top-left to bottom-right)
    for (let i = 0; i <= n - 4; i++) {
      for (let j = 0; j <= n - 4; j++) {
        if (this.checkDiagonalSequence(dna, i, j, 1, 1)) {
          sequenceCount++;
          if (sequenceCount > 1) return true;
        }
      }
    }
    
    // Check diagonal (top-right to bottom-left)
    for (let i = 0; i <= n - 4; i++) {
      for (let j = 3; j < n; j++) {
        if (this.checkDiagonalSequence(dna, i, j, 1, -1)) {
          sequenceCount++;
          if (sequenceCount > 1) return true;
        }
      }
    }
    
    return false;
  }
  
  private validateDNA(dna: string[]): boolean {
    if (!dna || dna.length === 0) return false;
    
    const n = dna.length;
    
    // Check if it's a square matrix
    for (const row of dna) {
      if (row.length !== n) return false;
      
      // Check if only contains valid characters
      for (const char of row) {
        if (!['A', 'T', 'C', 'G'].includes(char)) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  private checkSequence(row: string, startIndex: number): boolean {
    const char = row[startIndex];
    return row[startIndex + 1] === char && 
           row[startIndex + 2] === char && 
           row[startIndex + 3] === char;
  }
  
  private checkVerticalSequence(dna: string[], startRow: number, col: number): boolean {
    const char = dna[startRow][col];
    return dna[startRow + 1][col] === char && 
           dna[startRow + 2][col] === char && 
           dna[startRow + 3][col] === char;
  }
  
  private checkDiagonalSequence(dna: string[], startRow: number, startCol: number, rowDir: number, colDir: number): boolean {
    const char = dna[startRow][startCol];
    return dna[startRow + rowDir][startCol + colDir] === char && 
           dna[startRow + 2 * rowDir][startCol + 2 * colDir] === char && 
           dna[startRow + 3 * rowDir][startCol + 3 * colDir] === char;
  }
}
