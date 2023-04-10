import { Id } from '@/types/CommonTypes';

export type Product = {
  id: Id;
  category: {
    title: string;
    value: string;
  };
  description: string;
  image: string;
  price: number;
  title: string;
};
