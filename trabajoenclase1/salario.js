// Función para calcular el salario total
function calculateTotalSalary(baseSalary, overtimeRate, overtimeHours) {
    // Calcular el salario por horas extras
    const overtimePay = overtimeRate * overtimeHours;

    // Calcular el salario total
    const totalSalary = baseSalary + overtimePay;

    return totalSalary;
}

// Ejemplo de uso
const baseSalary = 2000; // Salario base del empleado
const overtimeRate = 20; // Monto que cobra por hora extra
const overtimeHours = 15; // Cantidad de horas extra trabajadas

const totalSalary = calculateTotalSalary(baseSalary, overtimeRate, overtimeHours);

console.log(`El salario total del empleado es: $${totalSalary}`);
