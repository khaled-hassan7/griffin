import Button from "../ui/Button";

function CartFooter({ cart, closeCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="px-4 pb-4 bg-white font-bold border-t border-text-muted">
      <div className="py-4 text-summaryLabel">
        <div className="flex justify-between">
          <span>sales tax</span>
          <span>included</span>
        </div>
        <div className="flex justify-between">
          <span>total</span>
          <span>{totalPrice.toLocaleString()} LE</span>
        </div>
      </div>
      <Button
        href="/checkout"
        className="w-full  bg-primary text-white"
        onClick={closeCart}
      >
        check out
      </Button>
    </div>
  );
}

export default CartFooter;
