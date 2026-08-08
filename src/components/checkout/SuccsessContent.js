function SuccsessContent({ handleContinueShopping }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h2 className="text-2xl font-bold">Order complete</h2>
      <span className="text-sm">Thank you for shopping with Griffin.</span>
      <span className="font-bold text-sm">Order #0250841</span>
      <span className="text-sm">
        We&apos;ll email you when your order is on its way.
      </span>
      <button
        className="hidden lg:block w-40 bg-primary py-2 text-white "
        onClick={handleContinueShopping}
      >
        continue shopping
      </button>
    </div>
  );
}

export default SuccsessContent;
