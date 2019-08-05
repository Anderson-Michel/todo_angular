import { TestBed } from '@angular/core/testing';

import { TarefaServicesService } from './tarefa-services.service';

describe('TarefaServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaServicesService = TestBed.get(TarefaServicesService);
    expect(service).toBeTruthy();
  });
});
