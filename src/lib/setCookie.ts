'use client';

export const setCookie = (name: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  let expires = '';

  const date = new Date();
  date.setTime(date.getTime() + 31536000);
  expires = '; expires=' + date.toUTCString();

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};
