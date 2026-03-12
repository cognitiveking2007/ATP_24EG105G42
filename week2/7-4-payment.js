//iv. payment.js - Payment processing
import { reduceStock } from './7-1-product.js';
import { getCartItems, getCartTotal, clearCart } from './7-2-cart.js';
import { applyDiscount } from './7-3-discount.js';

export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  let subtotal = getCartTotal();
  let discount = 0;
  let finalTotal = subtotal;

  if (couponCode) {
    const result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    finalTotal = result.finalTotal;
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  items.forEach(i => reduceStock(i.product.id, i.quantity));
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total: finalTotal,
    paymentMethod,
    status: 'success',
    message: 'Order placed successfully'
  };
}

export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}

function generateOrderId() {
  return 'ORD' + Date.now();
}
