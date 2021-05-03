export const convertMinutesToHours = (time?: number): string => {
  if (!time) return "";

  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const renderHours = hours < 1 ? "" : `${hours}h`;
  const renderMinutes =
    minutes < 10 && hours >= 1 ? `0${minutes}min` : `${minutes}min`;
  return `${renderHours}${renderMinutes}`;
};
