export function hexToRGBA(hex: string, alpha: number): string {
  hex = hex.replace("#", "");
  const r: number = parseInt(hex.substring(0, 2), 16);
  const g: number = parseInt(hex.substring(2, 4), 16);
  const b: number = parseInt(hex.substring(4, 6), 16);
  alpha = Math.min(1, Math.max(0, alpha));
  const rgba: string = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return rgba;
}
