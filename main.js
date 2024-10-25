function calculateRisk() {
    const leverage = parseFloat(document.getElementById('leverage').value);
    const deposit = parseFloat(document.getElementById('deposit').value);
    const stopPercent = parseFloat(document.getElementById('stop').value);

    // Проверка, что все значения введены корректно
    if (isNaN(leverage) || isNaN(deposit) || isNaN(stopPercent)) {
        alert("Пожалуйста, введите все значения.");
        return;
    }

    // Рассчитываем риск на сделку
    const riskAmount = (deposit * leverage * (stopPercent / 100)).toFixed(2);

    // Расчет убытка от всего депозита с учетом плеча в процентах
    const totalLossPercent = (stopPercent * leverage).toFixed(2);

    // Вывод результатов
    document.getElementById('result').innerText = `${riskAmount} $`;
    document.getElementById('totalLossPercent').innerText = `${totalLossPercent}%`;
}
