export function formatDateTime(
  dateTimeString: string = '2024-02-21 14:00',
  locale: string = 'es',
  options: Intl.DateTimeFormatOptions = {}
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };
  const mergedOptions: Intl.DateTimeFormatOptions = { ...defaultOptions, ...options };

  const date = new Date(dateTimeString + 'Z');
  const formattedDateTime = new Intl.DateTimeFormat(locale, mergedOptions).format(date);

  return formattedDateTime;
}
