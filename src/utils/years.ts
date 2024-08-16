
export function getMyAge() {
    const birthDate = new Date(2005, 0, 24); // Enero es el mes 0
    const today = new Date();

    let currentAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    
    // Ajuste si la fecha actual es antes del cumpleaños de este año
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        currentAge--;
    }
    return currentAge
}