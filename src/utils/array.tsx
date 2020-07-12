export const position = (arr: any[], item: any) => {
  const pos = arr.indexOf(item) + 1;
  return `${pos}º`
}