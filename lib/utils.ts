import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function getReq() {
  const response = await fetch("http://localhost:3000/api/todo", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${""}`,
    },
  });
  return await response.json();
}

export interface Product {
  id: number;
  name: string;
  isExpensive: boolean;
  price: number;
}

export function createProducts(): Product[] {
  console.log("Creating Products");
  const products: Product[] = [];

  for (let i = 0; i < 10000; i++) {
    const price = Math.floor(Math.random() * 1000);
    products.push({
      id: i + 1,
      price: price,
      isExpensive: price > 500 ? true : false,
      name: `${i + 1} Product Name`,
    });
  }

  return products;
}


