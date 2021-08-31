const login_button = document.getElementById('loginId');
var s = 0;
login_button.addEventListener('click', () => {
    const login_area = document.getElementById('login-area');
    const transaction_area = document.getElementById('transactionId');
    login_area.style.display = "none";
    transaction_area.style.display = "block";
});

$("#deposit-btn-id").click(() => {
    if ($(".deposit-input-text").val() != ''  ) {
        const deposit_amount = parseFloat($(".deposit-input-text").val());
        const previous_deposit = parseFloat($('#deposit-amount-id').text());

        $('#deposit-amount-id').text(deposit_amount + previous_deposit);
        var balance = parseFloat($("#balance-id").text());
        $('#balance-id').text(balance + deposit_amount);
        $('.deposit-input-text').val('');
    } else {
        $('#alert-deposit').css('display','inline').fadeOut(2000);
    }
});

$("#withdraw-btn-id").click(() => {
    if ($(".withdraw-input-text").val() != ''  ) {
        const withdraw_amount = parseFloat($(".withdraw-input-text").val());
        var balance = parseFloat($("#balance-id").text());
        if (withdraw_amount < balance) {
            const previous_withdraw = parseFloat($('#withdraw-amount-id').text());
            $('#withdraw-amount-id').text(previous_withdraw + withdraw_amount);
            $('#balance-id').text(balance - withdraw_amount);
            $('.withdraw-input-text').val('');
        } else {
            $('#alert-withdraw').css('display', 'inline').text('insuficient balance').fadeOut(2000);
            $('.withdraw-input-text').val('');
        }
    } else {
        $('#alert-withdraw').css('display','inline').fadeOut(2000);
    }
});