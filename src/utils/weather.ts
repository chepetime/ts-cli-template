import fetch from 'cross-fetch';

export async function getWeather() {
  const response = await fetch('https://v2.wttr.in');
  const data = await response.text();
  return data;
}
