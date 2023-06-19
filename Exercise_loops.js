seatCount = 4;

if(seatCount >= 2 && seatCount < 5){
    costPerTicket = 9;
    totalPrice = 0;
    discount = 0;
    discountedPrice = 0;
    for(let i = 1; i<=seatCount;i++){
        switch(i){
            case 1: 
                discount = 5;
                discountedPrice = costPerTicket - costPerTicket * discount/100;
                totalPrice += discountedPrice;
                break;
            case 2:
                discount = 7;
                discountedPrice = costPerTicket - costPerTicket * discount/100;
                totalPrice += discountedPrice;
                break;
            case 3:
                discount = 9;
                discountedPrice = costPerTicket - costPerTicket * discount/100;
                totalPrice += discountedPrice;
                break;
            case 4:
                discount = 11;
                discountedPrice =costPerTicket - costPerTicket * discount/100;
                totalPrice += discountedPrice;
                break;
            default:
                console.log("Booking is not allowed")
        }
        console.log(`Ticket for Customer${i} gets ${discount}% discount!, Cost is: \$${discountedPrice}`);
        //console.log(totalPrice);
        
    }
    console.log(`For ${seatCount} " tickets, you need to pay: $" ${totalPrice} " instead of $" ${seatCount*costPerTicket}`);
}else if(seatCount >= 6){
    console.log("Booking is not allowed.");
} 