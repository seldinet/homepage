export function addPrefix(url: string) {
  return `${process.env.PUBLIC_URL}${url}`;
}
