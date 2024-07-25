document
  .getElementById("ageCalculatorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dobInput = document.getElementById("dob").value;
    const birthDate = new Date(dobInput);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  });
