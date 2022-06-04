var handler = StripeCheckout.configure({
	key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
	image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
	token: function (token) {
		$('#stripeToken').val(token.id);
		$('#stripeEmail').val(token.email);
		$('#amountInCents').val(Math.floor($('#amountInDollars').val() * 100));
		$('#myForm').submit();
	},
});

$('#customButton').on('click', function (e) {
	var amountInCents = Math.floor($('#amountInDollars').val() * 100);
	var displayAmount = parseFloat(
		Math.floor($('#amountInDollars').val() * 100) / 100
	).toFixed(2);
	// Open Checkout with further options
	handler.open({
		name: 'Demo Site',
		description: 'Custom amount ($' + displayAmount + ')',
		amount: amountInCents,
	});
	e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function () {
	handler.close();
});
