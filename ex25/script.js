function calculateAge(birthYear, birthMonth) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    
    var age = currentYear - birthYear;
    var ageMonths = (age * 12) + (currentMonth - birthMonth);
    
    if (currentMonth < birthMonth) {
      age--;
      ageMonths = (age * 12) + (currentMonth - birthMonth + 12);
    }
    
    return {
      years: age,
      months: ageMonths
    };
  }
  
    document.getElementById("submitBtn").addEventListener("click", function() {
    var birthYear = parseInt(document.getElementById("birthYear").value);
    var birthMonth = parseInt(document.getElementById("birthMonth").value);
    
    var age = calculateAge(birthYear, birthMonth - 1);
    
    document.getElementById("result").innerHTML = "Você tem: " + age.years + " anos e " + (age.months % 12) + " meses.";
  });
  
    document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("birthYear").value = "";
    document.getElementById("birthMonth").value = "";
    document.getElementById("result").innerHTML = "";
  });