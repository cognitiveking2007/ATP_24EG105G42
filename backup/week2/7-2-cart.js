//ii. cart.js - Shopping cart operations
import { getProductById, checkStock } from './7-1-product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";
  if (!checkStock(productId, quantity)) return "Not enough stock";

  const existing = cartItems.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }
  return "Added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.product.id !== productId);
  return "Removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(i => i.product.id === productId);
  if (!item) return "Item not in cart";
  if (!checkStock(productId, newQuantity)) return "Not enough stock";
  item.quantity = newQuantity;
  return "Quantity updated";
}

export function getCartItems() {
  return cartItems;
}

export function getCartTotal() {
  return cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

export function clearCart() {
  cartItems = [];
}

