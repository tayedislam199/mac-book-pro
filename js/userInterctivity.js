//memory upgrading and extra charge
function memoryUpgrade(elementId, memoryVariant) {
    const memoryUpgradeElement = document.getElementById(elementId);
    if (memoryVariant == '8gb') {
        memoryUpgradeElement.innerText = '0';

    }
    else {
        memoryUpgradeElement.innerText = '180';

    }

}
//storage upgrading and extra charge
function storageUpgrade(elementId, storageVariant) {
    const storageUpgradeElement = document.getElementById(elementId);
    if (storageVariant == '256gb') {
        storageUpgradeElement.innerText = '0';

    }
    else if (storageVariant == '512gb') {
        storageUpgradeElement.innerText = '100';

    }
    else if (storageVariant == '1TB') {
        storageUpgradeElement.innerText = '180';

    }
}

//delivery option and extra charge
function deliveryOption(elementId, date) {
    const deliveryOptionElement = document.getElementById(elementId);
    if (date == 'aug-21') {
        deliveryOptionElement.innerText = '20';
        //random comment
    }
    else {
        deliveryOptionElement.innerText = '0';

    }
}
//calculating total cost without promo code
function totalCostWithoutPromoCode() {
    const memoryUpgradecharge = parseInt(document.getElementById('memory-cost').innerText);
    const storageUpgradeCharge = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    const bestprice = parseInt(document.getElementById('best-price').innerText);
    const totalCost = memoryUpgradecharge + storageUpgradeCharge + deliveryCharge + bestprice;

    document.getElementById('total').innerText = totalCost;
    return totalCost;
}

//event handlers for all the pc upgrading button
document.getElementById('8gb-memory-upgrade').addEventListener('click', function () {
    memoryUpgrade('memory-cost', '8gb');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})
document.getElementById('16gb-memory-upgrade').addEventListener('click', function () {
    memoryUpgrade('memory-cost', '16gb');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})
document.getElementById('256gb-storage-upgrade').addEventListener('click', function () {
    storageUpgrade('storage-cost', '256gb');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})
document.getElementById('512gb-storage-upgrade').addEventListener('click', function () {
    storageUpgrade('storage-cost', '512gb');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})
document.getElementById('1TB-storage-upgrade').addEventListener('click', function () {
    storageUpgrade('storage-cost', '1TB');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})
document.getElementById('delivery-date-aug-25').addEventListener('click', function () {
    deliveryOption('delivery-charge', 'aug-25');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})
document.getElementById('delivery-date-aug-21').addEventListener('click', function () {
    deliveryOption('delivery-charge', 'aug-21');
    const cost =totalCostWithoutPromoCode();
    document.getElementById('total-including-promo-code').innerText=cost;
})

//handling promo code
document.getElementById('promo-code-applying-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    const cost = totalCostWithoutPromoCode();
    if (promoCode == 'stevekaku') {
        const discountPrice = cost * (20 / 100);
        document.getElementById('total-including-promo-code').innerText = cost - discountPrice;
    }
    else {
        document.getElementById('total-including-promo-code').innerText = cost;
    }

    document.getElementById('promo-code').value = '';
})