export const card = () => {
  const menu = [
    {
      id: 1,
      name: 'Saveurs du marché',
      price: '19€',
      starter: 'Seasonal vegetable',
      main: 'Herb-roasted chicken with baby potatoes',
      dessert: 'Homemade apple tart',
      drink: 'Your choice!',
    },
    {
      id: 2,
      name: 'Dolce Vita',
      price: '22€',
      starter: 'Tomato mozzarella bruschetta',
      main: 'Gratinated bolognese lasagna',
      dessert: 'Coffee tiramisu',
      drink: 'Your choice!',
    },
    {
      id: 3,
      name: 'Tradition Française',
      price: '26€',
      starter: 'Eggs mayonnaise and crispy salad',
      main: 'Beef bourguignon with homemade mashed potatoes',
      dessert: 'Vanilla crème brûlée',
      drink: 'Your choice!',
    },
    {
      id: 4,
      name: 'Océan de Fraîcheur',
      price: '28€',
      starter: 'Lemon-cured smoked salmon',
      main: 'Sea bream fillet, fragrant rice and grilled vegetables',
      dessert: 'Chocolate mousse',
      drink: 'Your choice!',
    },
    {
      id: 5,
      name: 'Végétarien Gourmand',
      price: '21€',
      starter: 'Warm goat cheese and walnut salad',
      main: 'Mushroom and parmesan risotto',
      dessert: 'Panna cotta with red berries',
      drink: 'Your choice!',
    },
    {
      id: 6,
      name: 'Signature du Chef',
      price: '30€',
      starter: 'Foie gras with brioche toast',
      main: 'Duck breast with honey sauce and dauphinoise gratin',
      dessert: 'Molten chocolate fondant',
      drink: 'Your choice!',
    },
  ];
  const drinks = [
    {
      name: 'Coca',
      price: '2€',
    },
    {
      name: 'Oasis',
      price: '2€',
    },
    {
      name: 'Ice tea',
      price: '2€',
    },
  ];
  console.log(menu);
  const content = document.getElementById('content');
  content.innerHTML = `
        <h1>Card</h1>
        <div class='itemCard'>
            <h2>Menus</h2>
            <div class='menus'>
                ${menu
                  .map(
                    (item) => `
                    <div class='menu'>
                        <div class='info'>
                            Name : ${item.name}<br>
                            Price : ${item.price}<br>
                            Starter : ${item.starter}<br>
                            Main :${item.main}<br>
                            Dessert : ${item.dessert}<br>
                            Drink : ${item.drink}<br>
                        </div>
                    </div>`
                  )
                  .join('')}
            </div>
        </div>
        <div class='itemCard'>
            <h2>Drinks</h2>
            <div class='menus'>
                ${drinks
                  .map(
                    (item) => `
                    <div class='menu'>
                        <div class='info'>
                            Name : ${item.name}<br>
                            Price : ${item.price}<br>
                        </div>
                    </div>`
                  )
                  .join('')}
            </div>
        </div>
    `;
};
