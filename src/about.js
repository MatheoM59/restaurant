export const about = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
        <h1>Contact</h1>

        <div class='cardContact'>
            <div class='open'>
                <h2>Opening Days</h2>
                <p>Monday-Sunday</p>
            </div>
            <div class='contact'>
                <h2>Contact US</h2>
                <p>Phone number : 00.00.00.00.00</p>
                <p>Mail : odin@odinmail.com</p>
                <p>Instagram : @theOdinRestaurant</p>
            </div>
            <div class='find'>
                <h2>Find US</h2>
                <p>1st, Odin City</p>
            </div>
        </div>
    `;
};
