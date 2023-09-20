import { NextRequest } from 'next/server';

export const urlRequestIncludes = (req: NextRequest, url: string) => {
  return req.url.includes(url);
};
