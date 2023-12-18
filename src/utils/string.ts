export function trimText(text: string, limit: number = 20): string {
  if (text.split(/\s+/).length <= 20) {
    return text;
  }

  return text.split(/\s+/).slice(0, limit).join(' ') + ' ....';
}
