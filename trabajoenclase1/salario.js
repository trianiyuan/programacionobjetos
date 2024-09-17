function calculateTotalSalary(baseSalary, overtimeRate, overtimeHours) {
    
    const overtimePay = overtimeRate * overtimeHours;

    
    const totalSalary = baseSalary + overtimePay;

    return totalSalary;
}

const baseSalary = 2000; 
const overtimeRate = 20;
const overtimeHours = 15; 

const totalSalary = calculateTotalSalary(baseSalary, overtimeRate, overtimeHours);

console.log(`El salario total del empleado es: $${totalSalary}`);


let salario=200000;
let tarifa=250;