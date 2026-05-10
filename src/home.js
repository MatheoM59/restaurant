import restauImg from './restau.png';
export const home = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <h1>The Odin's eat</h1>
  <p>Best restaurant in The Odin World</p>
  <p>Book a table: 00.00.00.00.00</p>
  
  <img src="${restauImg}" alt="Image du restaurant" />`;
};
