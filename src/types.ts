export type AccountProfile = {
  id?: string;
  full_name: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
};

export type OrderItem = {
  id: number;
  order_id: number;
  product_id: number;
  price: number | null;
  size: string | null;
  quantity: number;
  products?: {
    id: number;
    name: string;
    slug: string;
    images: string[];
  } | null;
};

export type Order = {
  id: number;
  created_at: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  address: string;
  governorate: string | null;
  furtherInformation: string | null;
  status: string;
  town: string | null;
  paymentMethod: string;
  totalPrice: number;
  user_id: string | null;
  order_items?: OrderItem[];
};

export type ShippingInfo = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  furtherInformation?: string;
  governorate?: string;
  town?: string;
};
