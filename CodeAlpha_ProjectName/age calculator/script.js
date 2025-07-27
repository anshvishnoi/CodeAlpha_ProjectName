function calculateage() {
    const dobInput = document.getelementById('dob').value;
    const dob = new date(dobinput);
    const currentdate = new date();

    const ageinmilliseconds = currentdate - dob;
    const ageinyears = ageinmilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = math.floor(ageinyears);

    currentDate.setfullyear(currentdate.getfullyear() - age);
    const monthdiff = currentdate.getmonth() - dob.getmonth();

    let months = monthdiff;
    if (currentDate.getdate() < dob.getdate()) {
        months--;
 }
    let days = currentdate.getdate() - dob.getdate();
    if (days < 0) {
        const lastdayofmonth = new date(currentdate.getfullyear(), currentDate.getMonth(), 0).getDate();
        days = lastdayofmonth - dob.getdate() + currentdate.getDate();
    }
  document.getelementbyid('ageresult').textcontent = `${age} years, ${months} months, ${days} days,`;
}