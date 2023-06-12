import dayjs from 'dayjs';

export const formatStringToDate = (date: Date) =>
  dayjs(date).format('DD.MM.YYYY');
