'use client';

export const getCookie = (name: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  let nameEQ = name + '=';
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
