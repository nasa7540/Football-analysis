// امكانية تحديث هذي البيانات بناء على نتايج وتحليلات حيه وحقيقية
// 
const matchData = {
    formationStrength: 85,
    winProbability: 70,
    lossProbability: 30,
    teamStrength: 80,
    injuryLikelihood: 10
  };
  
  // تحديث البيانات المعروضة في الصفحة
  document.getElementById('formation-strength').textContent = matchData.formationStrength + '%';
  document.getElementById('win-probability').textContent = matchData.winProbability + '%';
  document.getElementById('loss-probability').textContent = matchData.lossProbability + '%';
  document.getElementById('team-strength').textContent = matchData.teamStrength + '%';
  document.getElementById('injury-likelihood').textContent = matchData.injuryLikelihood + '%';