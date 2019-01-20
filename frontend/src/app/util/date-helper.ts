

export function today(): Date {
  let today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}