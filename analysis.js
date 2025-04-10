document.getElementById('matchForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const teamName = document.getElementById('teamName').value.trim();
    const opponentName = document.getElementById('opponentName').value.trim();
  
    if (teamName && opponentName) {
      // هنا يمكنك إضافة الكود لجلب وتحليل بيانات المباريات السابقة
      // على سبيل المثال، استخدام API للحصول على نتائج المباريات
  
      // بيانات وهمية للتحليل
      const teamPerformance = Math.random() * 100;
      const opponentPerformance = Math.random() * 100;
  
      const analysisResult = document.getElementById('analysisResult');
      analysisResult.style.display = 'block';
      analysisResult.innerHTML = `
        <h3>تحليل المباراة بين ${teamName} و ${opponentName}</h3>
        <p><strong>أداء فريقك:</strong> ${teamPerformance.toFixed(2)}%</p>
        <p><strong>أداء الفريق المنافس:</strong> ${opponentPerformance.toFixed(2)}%</p>
        <p><strong>التوصيات:</strong></p>
        <ul>
          <li>تحسين الدفاع وزيادة الضغط على الفريق المنافس.</li>
          <li>التركيز على استغلال الكرات الثابتة لزيادة فرص التسجيل.</li>
          <li>مراقبة اللاعبين الرئيسيين في الفريق المنافس والحد من تأثيرهم.</li>
        </ul>
      `;
    } else {
      alert('يرجى إدخال أسماء الفريقين.');
    }
  });