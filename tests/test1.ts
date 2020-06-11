// import { Selector, ClientFunction } from 'testcafe';

fixture(`Checkout `).page(`https://www.bloomandwild.com/send-flowers`);

// // const handleWarnings = ClientFunction(() => {
// //   console.error = msg => {
// //     console.log('error is', msg);
// //     throw new Error(msg);
// //   };
// //   console.warn = msg => {
// //     console.log('warn is', msg);
// //     throw new Error(msg);
// //   };
// // });

test("Basic Checkout", async (t) => {
  await t
    // Carousel
    .click(
      'bw-product-carousel bw-product-card [bwtrackas="checkout.carousel.carouselProduct.carouselSend"]'
    )
    .wait(5 * 1000)
    // Address Details
    .typeText('bw-recipient-search [formcontrolname="name"]', "Tom Ardern")
    .typeText('bw-recipient-search [name="addressSearch"]', "16 CR4 2HQ")
    .wait(500)
    .click("bw-recipient-search .address-search-results .dropdown-item")
    .wait(500)

    // User DEtails
    .typeText('bw-user-details [formcontrolname="name"]', "Tom Ardern")
    .typeText(
      'bw-user-details [formcontrolname="email"]',
      "tom.ardern@gmail.com"
    )
    .wait(2 * 1000)

    .click('[bwtrackas="checkout.orderDetails.continueToPayment"]')
    .wait(5 * 1000);
  // // Payment
  // .switchToIframe('bw-card-entry iframe')
  // .typeText('[name="cardnumber"]', '4242 4242 4242 4242')
  // .typeText('[name="exp-date"]', '10/28')
  // .typeText('[name="cvc"]', '123')
  // .switchToMainWindow()
  // .click('[bwtrackas="checkout.payment.pay.payNowCard"]')

  // // Confirmation
  // .expect(Selector('bw-confirmation .confirmation-order').exists)
  // .ok()
  // .wait(5 * 1000);
});
