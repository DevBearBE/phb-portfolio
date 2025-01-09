"use server";

import { cookies } from "next/headers";

const COOKIE_TTL = 1000 * 60 * 60 * 24; // One day

type CookieOptions = {
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
};

export const getCookieValue = async (
  cookieKey: string,
): Promise<string | undefined> => {
  const cookieStore = await cookies();

  return cookieStore.get(cookieKey)?.value;
};

export const addCookie = async (
  cookieKey: string,
  payload: string,
  options?: CookieOptions,
): Promise<void> => {
  const cookieStore = await cookies();

  cookieStore.set(cookieKey, payload, {
    httpOnly: true,
    maxAge: COOKIE_TTL,
    path: "/",
    sameSite: "lax",
    ...options,
  });
};

export const removeCookie = async (cookieKey: string): Promise<void> => {
  const cookieStore = await cookies();

  if (!cookieStore.has(cookieKey)) return;

  cookieStore.delete(cookieKey);
};
