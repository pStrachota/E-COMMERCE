import { Nil } from '../types/CommonTypes';

export const APP_TITLE = 'E-commerce';
export const APP_DESCRIPTION = `${APP_TITLE} is a simple fullstack e-commerce website demo built with Next.js`;

export const createMockArray = (length: number) => {
  return Array.from(Array(length).keys());
};

export const isNil = (val: unknown): val is Nil => {
  return val === null || val === undefined;
};
