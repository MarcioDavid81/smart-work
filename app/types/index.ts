export interface Epi {
    id: number;
    name: string;
    description: string;
    certification: string;
    supplier: string;
    expiration: string;
    quantity: number;
  }

  export interface Employee {
    id: number;
    name: string;
    phone: string;
    department: string;
    employer: string;
    status: string;
  }

  export type EmployeeBasic = Pick<Employee, "id" | "name">;

  export interface EpiEntry {
    id: number;
    epiId: number;
    employeeId: number;
    quantity: number;
    date: string;
  }

  export interface EpiExit {
    id: number;
    epiId: number;
    epi: {
      name: string;
    }
    employeeId: number;
    employee: {
      name: string;
    }
    quantity: number;
    date: string;
  }