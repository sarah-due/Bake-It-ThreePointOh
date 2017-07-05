exports.seed = function (knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipe_id: 1, category_id: 2201, recipe_name: 'Chocolate Layer Cake', chef_name: 'Ina Garten aka The Barefoot Contessa', recipe_image_url: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/3/22/0/ig0807_cake.jpg.rend.hgtvcom.616.462.jpeg', recipe_ingredients: '1 3/4 cups flour, plus more for dusting cake pans, 2 cups sugar, 3/4 cups cocoa powder, 2 teaspoons baking soda, 1 teaspoon baking powder, 1 teaspoon kosher salt, 1/2 cup oil, 2 large eggs, 1 teaspoon vanilla extract, 1 cup hot, strong coffee', recipe_method:
        'Preheat oven to 350°F. Butter two 8-in cake pans and dust with flour. Combine all dry ingredients in the bowl of a stand mixer and mix until combined. In a small bowl, combine buttermilk, oil, eggs, and vanilla. Pour buttermilk mixture into dry ingredients and beat just until smooth. Add coffee and mix just until incorporated. Divide batter, which will be incredibly runny, evenly between the two pans. Bake for 35 to 40 minutes until a toothpick stuck in the center of each cake comes out clean. Remove from oven and allow to cool in the pans for 10-15 minutes before turning out onto a wire rack to cool completely. Frost cakes as desired.', recipe_comments: "Don't even think about disgracing Ina by using average vanilla or cocoa in this recipe."},

        {recipe_id: 2, category_id: 2206, recipe_name: 'Chocolate Babka', chef_name: 'Yotam Ottolenghi', recipe_image_url: 'https://s-media-cache-ak0.pinimg.com/736x/b7/72/40/b77240543b30f884bf75e11539915c77.jpg', recipe_ingredients: 'For the dough: 4 cups flour, plus extra for dusting, 1/2 cup superfine sugar, 2 teaspoons fast-rising active dry yeast, grated zest of 1 small lemon, 3 free-range eggs, 1/2 cup water, rounded 1/4 tsp salt, 150 g unsalted butter, at room temperature, cut into 3/4-inch / 2cm cubes, sunflower oil, for greasing, For the chocolate filling: Scant 1/2 cup confectioners’ sugar, 1/3 cup cocoa powder, 130 g good-quality dark chocolate, melted, 120 g unsalted butter, melted, 1 cup pecans, coarsely chopped, 2 tbsp superfine sugar, For the sugar syrup: 2/3 cup water, 1 1/4 cups superfine sugar', recipe_method: "",
        recipe_comments: "It's heaven."},

        {recipe_id: 3, category_id: 2202, recipe_name: 'Crack Pie', chef_name: 'Christina Tosi', recipe_image_url: 'http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/6/20/0/CC_momofuku-milk-bar-crack-pie-recipe_s4x3.jpg.rend.hgtvcom.616.462.jpeg', recipe_ingredients: 'Crack and pie', recipe_method: 'It is long.', recipe_comments: "You will quickly learn where this pie got its name." },

        {recipe_id: 4, category_id: 2205, recipe_name: 'English Toffee', chef_name: 'Alyssa', recipe_image_url: 'http://cdn.skim.gs/image/upload/v1456338340/msi/beer-almond-brittle_ou1bvd.jpg', recipe_ingredients: "1 cup toasted almonds, 1 cup butter, cut into 1-inch cubes, 1 cup sugar, 1/4 teaspoon salt, 1 teaspoon vanilla, 2 cups milk chocolate chips, 1/4 cup finely chopped pecans", recipe_method:
        "Line a baking sheet with foil and place the almonds in a single layer on the foil - space them out as best you can. Add sugar, butter, vanilla, and salt to a large sauce pan (at least 2-quarts and it needs to have a thick bottom - not a thin metal one or your toffee will burn!) and melt over medium heat, stirring throughout. When ingredients are completely melted, continuously stir and gradually increase heat to medium-high. Keep stirring, stirring, stirring for 9-15 minutes until the toffee is a golden brown color. As soon as it reaches that color, quickly pour over almonds in your prepared pan. Allow to cool for about 2-3 minutes, then sprinkle with chocolate chips. Allow to sit for another couple of minutes so the chocolate chips will melt, then spread over the toffee. Sprinkle with chopped pecans and allow to cool completely. After toffee and chocolate and completely cooled, use a butter knife to break apart the toffee. Store in an airtight container at room temperature.", recipe_comments: "Toffee. It's everyone's favourite holiday treat." },

        {recipe_id: 5, category_id: 2205, recipe_name: 'Hokey Pokey', chef_name: 'Rachel', recipe_image_url: 'http://www.madefromscratch.co.nz/wp-content/uploads/2013/10/18.jpg', recipe_ingredients: '5 tablespoons white sugar, 2 tablespoons golden syrup, 1 teaspoon baking soda', recipe_method: 'Line a baking tray with baking paper and set aside. Add the sugar and golden syrup to a medium sauce pan and place over a low heat - stir constantly until the sugar dissolves. Increase the heat and bring to the boil for around two minutes - stir if needed to stop it from burning. Remove from heat and add the baking soda, stir quickly until the mixture froths up and all of the ingredients are combined. Pour onto the baking tray lined with paper - you don’t want to spread it too thin. Allow to cool until hard before breaking into pieces.', recipe_comments: "New Zealand's favourite!"},

        {recipe_id: 6, category_id: 2206, recipe_name: 'Focaccia Bread', chef_name: 'Me', recipe_image_url: 'https://static1.squarespace.com/static/51ed598ee4b06aef3d5282fa/51f13f32e4b0737722a97e9b/54f06150e4b06321d3003ea1/1446131725425/Foccacia-15Feb-8949-Edit.jpg', recipe_ingredients: 'For the dough: 4 cups flour, plus extra for dusting, 1/2 cup superfine sugar, 2 teaspoons fast-rising active dry yeast, grated zest of 1 small lemon, 3 free-range eggs, 1/2 cup water, rounded 1/4 tsp salt, 150 g unsalted butter, at room temperature, cut into 3/4-inch / 2cm cubes, sunflower oil, for greasing, For the chocolate filling: Scant 1/2 cup confectioners’ sugar, 1/3 cup cocoa powder, 130 g good-quality dark chocolate, melted, 120 g unsalted butter, melted, 1 cup pecans, coarsely chopped, 2 tbsp superfine sugar, For the sugar syrup: 2/3 cup water, 1 1/4 cups superfine sugar', recipe_method: "",
        recipe_comments: "It's heaven."},

        { recipe_id: 7, category_id: 2206, recipe_name: 'Traditional Baguettes', chef_name: "Dr. Bread", recipe_image_url: "https://s-media-cache-ak0.pinimg.com/736x/f5/95/aa/f595aafe443c1a43ec23a7167daff149.jpg", recipe_ingredients: "Bread", recipe_method: "Make bread", recipe_comments: "it's bread" },

        { recipe_id: 8, category_id: 2202, recipe_name: 'Raspberry Rhubarb Pie', chef_name: "Mrs. Pie Lady", recipe_image_url: "https://images.food52.com/FIP8cC-VAFBB0FtoRB0vkXHi708=/753x502/255f3851-9437-47bf-a595-beaa27bea4b5--RaspberryRhubarbPieBakedStyled.jpg", recipe_ingredients: "Pie", recipe_method: "Make pie", recipe_comments: "it's pie" },

        { recipe_id: 9, category_id: 2203, recipe_name: 'Chocolate Chip Cookies', chef_name: "Mr.Cookerson", recipe_image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGdPLQMjOo0AHKJbJ4q1Gaqm8Q6SVqLlAr6Qu0zjFLRj6MEMCfw",
          recipe_ingredients: "Cookies", recipe_method: "Make cookies", recipe_comments: "it's cookies" },

        { recipe_id: 10, category_id: 2204, recipe_name: 'Chocolate Mousse', chef_name: "Bullwinkle", recipe_image_url: "http://img.taste.com.au/I3x-cteh/taste/2010/01/chocolate_mousse_in_minutes_1980x1320-117905-1.jpg", recipe_ingredients: "Chocolate and mooses", recipe_method: "Make the mousse", recipe_comments: "it's moussey"},

        { recipe_id: 11, category_id: 2207, recipe_name: 'Pop Tarts!', chef_name: "Patty Pastry",
          recipe_image_url: "http://c06352e9238d9d2a61cb-8a886d762570dee9ec4262596df361b5.r49.cf1.rackcdn.com/wp-content/uploads/cherry-pastries-horizontal-beauty.jpg", recipe_ingredients: "Pastry",
          recipe_method: "Make pastry",
          recipe_comments: "it's pastry"
        },
        { recipe_id: 12, category_id: 2208, recipe_name: 'Blueberry Ice Cream', chef_name: "Ben and or Jerry", recipe_image_url: "http://www.theprairiehomestead.com/wp-content/uploads/2015/08/blueberry-cheesecake-ice-cream-recipe.jpg", recipe_ingredients: "Ice cream", recipe_method: "Make ice cream", recipe_comments: "it's creamy"
        },
        { recipe_id: 13, category_id: 2209, recipe_name: 'Chocolate Sauce', chef_name: "Saucy McSaucerson",
          recipe_image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5rJXo52G1TQeewDXOXA-myaV-3BUtfGVO8LNDK7mK1k3wztp", recipe_ingredients: "Chocolate", recipe_method: "Make sauce", recipe_comments: "it's saucy"
        },

        { recipe_id: 14, category_id: 2208, recipe_name: 'Ice Cream Sandwiches', chef_name: "Ice Cream Man", recipe_image_url: "https://www.turkeyhill.com/images/ice-cream-recipes.jpg", recipe_ingredients: "Ice cream", recipe_method: "Make ice cream", recipe_comments: "it's creamy and sandwich-y"
        },

        { recipe_id: 15, category_id: 2203, recipe_name: 'Peanutbutter Cookies', chef_name: 'Dr. P. E. Nut III',
          recipe_image_url: "http://relish.com/wp-content/uploads/2011/07/24894_peanut_butter_cookie-670x405.jpg", recipe_ingredients: "Cookies", recipe_method: "Make cookies", recipe_comments: "They're cookies!"
        },

        { recipe_id: 16, category_id: 2203, recipe_name: 'Raspberry Crumble Bars', chef_name: 'Mr. Raspberry', recipe_image_url: "http://assets.epicurious.com/photos/55ac4e7398d8666b6dcdac5a/master/pass/EP_15072015_BARCOOKIE_strawberrybuckweatbars_6x4.jpg", recipe_ingredients: "Cookies", recipe_method: "Make cookies", recipe_comments: "it's cookies"
        },

        { recipe_id: 17, category_id: 2203, recipe_name: 'Raspberry Macarons', chef_name: 'Frenchy McFrenchface', recipe_image_url: "https://static1.squarespace.com/static/56315ccee4b068a9afd70559/t/56b94c4eb09f955797c21fef/1454984283286/Raspberry+Macarons", recipe_ingredients: "Cookies", recipe_method: "Make cookies", recipe_comments: "it's cookies"
        },

        { recipe_id: 18, category_id: 2206, recipe_name: 'Classic Brioche', chef_name: "Dr. Bread",
          recipe_image_url: "http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/brioches__ttes_39328_16x9.jpg", recipe_ingredients: "Bread", recipe_method: "Make bread", recipe_comments: "it's bread"
        },

        { recipe_id: 19, category_id: 2206, recipe_name: 'Farmhouse Bread', chef_name: "Dr. Bread", recipe_image_url: "https://s-media-cache-ak0.pinimg.com/736x/35/f5/4a/35f54a72b2d52285299c70f4a3ed5708.jpg", recipe_ingredients: "Bread", recipe_method: "Make bread", recipe_comments: "it's bread"
        },

        {recipe_id: 20, category_id: 2201, recipe_name: 'Caramel Cheesecake', chef_name: 'Cake', recipe_image_url: 'http://www.cheriseharper.com/wp-content/uploads/CheeseCake_0019.jpg', recipe_ingredients: 'Cake', recipe_method:
        ''},

        {recipe_id: 21, category_id: 2201, recipe_name: 'Funfetti Cake', chef_name: 'Cake', recipe_image_url: 'http://cakemerchant.com/wp-content/uploads/Funfetti-Cake-14.jpg', recipe_ingredients: 'Cake', recipe_method:
        ''},

        {recipe_id: 22, category_id: 2201, recipe_name: 'Carrot Cake', chef_name: 'Cake', recipe_image_url: 'https://s-media-cache-ak0.pinimg.com/736x/15/9b/b6/159bb68fc66af879842cb66ac43c2741.jpg', recipe_ingredients: 'Cake', recipe_method:
        ''},

        {recipe_id: 23, category_id: 2202, recipe_name: 'Pecan Pie', chef_name: 'Pie', recipe_image_url: 'http://cf.bojongourmet.com/wp-content/uploads/2015/11/bourbon-sorghum-pecan-pie-gluten-free-lede.jpg', recipe_ingredients: 'Pecans', recipe_method:
        ''},

        {recipe_id: 24, category_id: 2202, recipe_name: 'Rustic Stone Fruit Tart', chef_name: 'Tart', recipe_image_url: 'http://www.seriouseats.com/images/2015/09/20150919-food-styling-6.jpg', recipe_ingredients: 'Fruit', recipe_method:
        ''},

        {recipe_id: 25, category_id: 2205, recipe_name: 'Vanilla Bean Marshmallows', chef_name: 'Stay Puff', recipe_image_url: 'http://img.taste.com.au/F30k2Kmy/taste/2016/11/vanilla-bean-marshmallows-88604-1.jpeg', recipe_ingredients: 'Vanilla and marshmallows', recipe_method:
        ''},

        {recipe_id: 26, category_id: 2205, recipe_name: 'Pistachio Nougat', chef_name: 'Chef', recipe_image_url: 'https://s-media-cache-ak0.pinimg.com/originals/f2/10/2b/f2102bbebed4685f4a85e23eacae02ef.jpg', recipe_ingredients: 'Fruit and Pistachios', recipe_method:
        ''},

        {recipe_id: 27, category_id: 2204, recipe_name: 'Classic Creme Brulee', chef_name: 'Chef Creme', recipe_image_url: 'https://static01.nyt.com/images/2016/11/15/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-articleLarge.jpg', recipe_ingredients: 'Cream and Sugar', recipe_method:
        ''},

        {recipe_id: 28, category_id: 2204, recipe_name: 'Bread Pudding', chef_name: 'Chef ', recipe_image_url: 'https://static01.nyt.com/images/2015/05/20/dining/20HIT_BREADPUDD/20HIT_BREADPUDD-superJumbo.jpg', recipe_ingredients: 'Cream and Sugar', recipe_method:
        ''},

        {recipe_id: 29, category_id: 2208, recipe_name: 'Blueberry Semifreddo', chef_name: 'Chef ', recipe_image_url: 'https://d104wv11b7o3gc.cloudfront.net/wp-content/uploads/2015/06/coconut-cream-semifreddo-with-blueberrirs-2.jpg', recipe_ingredients: 'Cream and Sugar', recipe_method:
        ''},

        {recipe_id: 30, category_id: 2209, recipe_name: 'Mirror Glaze', chef_name: 'Chef ', recipe_image_url: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-05/22/16/campaign_images/buzzfeed-prod-fastlane-03/this-mirror-glaze-cake-is-literally-insane-2-11739-1495483324-0_dblbig.jpg', recipe_ingredients: 'Sugar', recipe_method:
        ''},

        {recipe_id: 31, category_id: 2209, recipe_name: 'Italian Buttercream', chef_name: 'Chef ', recipe_image_url: 'https://images.food52.com/hQidB6pPqSlI3Q1kuN2PamtlLTk=/fit-in/800x0/21d71efc-e4fd-45ac-81e8-fac1cb1342b9--2013-1104_finalist_pink-peppercorn-buttercream-icing-133.jpg', recipe_ingredients: 'Sugar', recipe_method:
        ''},

        {recipe_id: 32, category_id: 2209, recipe_name: 'Salted Caramel', chef_name: 'Chef ', recipe_image_url: 'https://static01.nyt.com/images/2015/10/12/dining/12CHOCPANCAKES3/12CHOCPANCAKES3-articleLarge.jpg', recipe_ingredients: 'Sugar', recipe_method:
        ''}

      ]);
    });
};
