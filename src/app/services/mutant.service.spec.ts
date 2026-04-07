import { TestBed } from '@angular/core/testing';
import { MutantService } from './mutant.service';

describe('MutantService', () => {
  let service: MutantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isMutant', () => {
    it('should return true for mutant DNA with horizontal sequence', () => {
      const dna = ['AAAA', 'TGCA', 'TGCA', 'TGCA'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should return true for mutant DNA with vertical sequence', () => {
      const dna = ['ATGC', 'ATGC', 'ATGC', 'ATGC'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should return true for mutant DNA with diagonal sequence (top-left to bottom-right)', () => {
      const dna = ['ATGC', 'TATC', 'GCAT', 'CATA'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should return true for mutant DNA with diagonal sequence (top-right to bottom-left)', () => {
      const dna = ['CGTA', 'AGTC', 'TCAG', 'ATCG'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should return true for example mutant DNA', () => {
      const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should return false for human DNA', () => {
      const dna = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'CGCCTA', 'TCACTG'];
      expect(service.isMutant(dna)).toBe(false);
    });

    it('should return false for DNA with no sequences', () => {
      const dna = ['ATGC', 'CGAT', 'GCAT', 'ATCG'];
      expect(service.isMutant(dna)).toBe(false);
    });

    it('should return true for DNA with multiple sequences', () => {
      const dna = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should throw error for invalid DNA - non-square matrix', () => {
      const dna = ['ATGC', 'CGAT', 'GCAT'];
      expect(() => service.isMutant(dna)).toThrow('Invalid DNA sequence');
    });

    it('should throw error for invalid DNA - invalid characters', () => {
      const dna = ['ATGC', 'CGAT', 'GCXT', 'ATCG'];
      expect(() => service.isMutant(dna)).toThrow('Invalid DNA sequence');
    });

    it('should throw error for invalid DNA - empty array', () => {
      const dna: string[] = [];
      expect(() => service.isMutant(dna)).toThrow('Invalid DNA sequence');
    });

    it('should throw error for invalid DNA - null input', () => {
      expect(() => service.isMutant(null as any)).toThrow('Invalid DNA sequence');
    });

    it('should handle edge case - minimum size 4x4 with sequence', () => {
      const dna = ['ATGC', 'ATGC', 'ATGC', 'ATGC'];
      expect(service.isMutant(dna)).toBe(true);
    });

    it('should handle edge case - minimum size 4x4 without sequence', () => {
      const dna = ['ATGC', 'CGAT', 'GCAT', 'ATCG'];
      expect(service.isMutant(dna)).toBe(false);
    });

    it('should handle larger matrices efficiently', () => {
      const dna = [
        'ATGCGATGCGATG',
        'CAGTGCGATCGAT',
        'TTATGTGATCGAT',
        'AGAAGGGATCGAT',
        'CCCCTAGATCGAT',
        'TCACTGGATCGAT',
        'ATGCGATGCGATC',
        'CAGTGCGATCGAT',
        'TTATGTGATCGAT',
        'AGAAGGGATCGAT',
        'CCCCTAGATCGAT',
        'TCACTGGATCGAT',
        'ATGCGATGCGATC',
        'CAGTGCGATCGAT',
        'TTATGTGATCGAT'
      ];
      expect(service.isMutant(dna)).toBe(true);
    });
  });
});
