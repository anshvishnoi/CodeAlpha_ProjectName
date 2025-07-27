document.getElementById('calculateBtn').addEventListener('click', calculateAge);

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('ageResult').textContent = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date();

    if (dob > currentDate) {
        document.getElementById('ageResult').textContent = "Date of birth cannot be in the future.";
        return;
    }

    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days = lastDayOfPrevMonth - dob.getDate() + currentDate.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('ageResult').textContent = `${years} years, ${months} months, and ${days} days old.`;
}
