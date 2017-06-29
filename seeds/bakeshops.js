exports.seed = function (knex, Promise) {
  return knex('bakeshops').del()
    .then(function () {
      return knex('bakeshops').insert([

        {bakeshop_id: 3301, bakeshop_name: 'Leeds Street Bakery', bakeshop_logo: 'http://www.leedsstbakery.co.nz/assets/img/75121.jpg', bakeshop_img:'http://www.leedsstbakery.co.nz/assets/img/75130.jpg', bakeshop_url: 'http://www.leedsstbakery.co.nz/', bakeshop_address: '6G/14 Hannah Factory Laneway, Te Aro, Wellington 6011', bakeshop_hours: 'Monday-Friday: 7:30am-3:30pm, Saturday: 8am-4pm, Sunday: Closed', bakeshop_info:"Leeds St Bakery began as a part of Ti Kouka Cafe. The reputation of their delicious baked goods spread far and wide, which ultimately lead to the opening of Leeds St Bakery in 2013. Their freshley baked breads are to die for, and that salted caramel cookie will blow your damn mind."},

        {bakeshop_id: 3302, bakeshop_name: 'Louis Sergeant Sweet Couture', bakeshop_logo: 'http://louissergeant.co.nz/wp-content/uploads/2013/10/louis-sergeant-logo-374.png', bakeshop_img:'', bakeshop_url: 'http://louissergeant.co.nz/', bakeshop_address: '146 Featherston St Wellington New Zealand', bakeshop_hours: 'Monday-Friday: 9am-5pm, Saturday-Sunday: 9am-5:30pm', bakeshop_info: "The incredible and innovative French-inspired desserts crafted by Louis Sergeant's pastry chefs are beyond compare. From the light and delicate macarons and cream puffs, to the divinely rich L'intense Chocolate Cake, you'll need to prepare your tastebuds for this experience. Are you even WORTHY of the glory?!" }
      ]);
    });
};
