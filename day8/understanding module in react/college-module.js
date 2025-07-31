let myFees = 0;

function payFee(payment) {
  console.log(`your fee ${payment} is paid`);
  myFees = payment;
}

function getFee() {
  return myFees;
}

export { payFee, getFee };