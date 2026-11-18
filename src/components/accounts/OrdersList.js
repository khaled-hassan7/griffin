"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

// Fixed locale + timeZone so SSR and client render the same string.
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

function OrdersList({ orders }) {
  const [expandedId, setExpandedId] = useState(null);

  if (!orders.length) {
    return (
      <div className="flex flex-col items-center gap-5 text-center py-16">
        <p className="text-emptyState text-text-muted">
          You haven&apos;t placed any orders yet. Your orders will appear here
          once you make your first purchase.
        </p>
        <Button href="/products" className="bg-primary text-white w-max">
          start shopping
        </Button>
      </div>
    );
  }

  return (
    <ul>
      {orders.map((order) => {
        const isOpen = expandedId === order.id;

        return (
          <li key={order.id} className="border-b border-neutral-200">
            <button
              type="button"
              onClick={() => setExpandedId(isOpen ? null : order.id)}
              className="w-full flex items-center gap-3 py-5 text-left"
            >
              <div className="flex-1 min-w-0">
                <span className="block font-bold text-bodySmall">
                  #{order.id}
                </span>
                <span className="block text-bodySmall text-text-muted">
                  {formatDate(order.created_at)}
                </span>
              </div>
              <span className="text-bodySmall capitalize">{order.status}</span>
              <span className="text-bodySmall font-bold whitespace-nowrap">
                {`EGP ${(order.totalPrice ?? 0).toLocaleString()}`}
              </span>
              <ChevronDown
                strokeWidth={1.5}
                size={18}
                className={`shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <ul className="flex flex-col gap-4 pb-6">
                {order.order_items?.length ? (
                  order.order_items.map((item) => (
                    <li key={item.id} className="flex items-center gap-4">
                      {item.products?.images?.[1] ? (
                        <Image
                          src={item.products.images[1]}
                          alt=""
                          width={80}
                          height={120}
                          quality={90}
                          className="w-20 aspect-[2/3] object-cover"
                        />
                      ) : (
                        <div className="w-12 aspect-[2/3] bg-surface" />
                      )}
                      <div className="flex flex-col gap-0.5">
                        <span className="text-bodySmall font-bold">
                          {item.products?.name ?? "Item no longer available"}
                        </span>
                        <span className="text-bodySmall text-text-muted">
                          {`Size: ${item.size ?? "-"} · Qty: ${item.quantity}`}
                        </span>
                      </div>
                      <span className="ml-auto text-bodySmall whitespace-nowrap">
                        {`EGP ${((item.price ?? 0) * item.quantity).toLocaleString()}`}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-bodySmall text-text-muted">
                    No items recorded for this order.
                  </li>
                )}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default OrdersList;
