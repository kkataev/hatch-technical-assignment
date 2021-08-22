const nf = new Intl.NumberFormat('en-US');

export const formatNumber = (no: number): string => nf.format(no);

export default {
  formatNumber,
};
