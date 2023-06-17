import dayjs from 'dayjs';

export const formatDateToString = (date: Date) =>
  dayjs(date).format('DD.MM.YYYY');
