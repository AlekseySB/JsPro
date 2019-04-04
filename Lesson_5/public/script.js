



const API_URL = "http://localhost:3000";
const urlSingle = 'single_page.html';


const app = new Vue({
  el: '#app',
  data: {
 
  show: false,
  searchString: "",

    products: [
     {
        title: 'Футболка',
        price: 50,
        urlSingle: 'single_page.html',
        img: 'img/1.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'Блузка',
        price: 50,
        urlSingle: 'single_page.html',
        img: 'img/2.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'Куртка',
        price: 50,
        urlSingle: 'single_page.html',
        img: 'img/Layer%204.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'Платье',
        price: 50,
        urlSingle: 'single_page.html',
        img: 'img/4.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'Платье2',
        price: 50,
        urlSingle: 'single_page.html',
        img: 'img/5.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'Пиджак',
        price: 50,
        urlSingle: 'single_page.html',
        img: 'img/6.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    }
         
    ],
  },
computed: {
    btnText: function() {
      if(this.show) {
        return 'Закрыть корзину'
      }
      
      return 'Открыть корзину'
    },
    filteredProducts: function () {
            var products_array = this.products,
                searchString = this.searchString;

            if(!searchString){
                return products_array;
            }

            searchString = searchString.trim().toLowerCase();

            products_array = products_array.filter(function(products){
                if(products.title.toLowerCase().indexOf(searchString) !== -1){
                    return products;
              

                }
            })

            // Возвращает массив с отфильтрованными данными.
            return products_array;;
        }
   
  },

  methods: {
    handleButtonClick() {
      const title = prompt('Название товара');
      const price = prompt('Цена товара');
      const img = prompt('Введите путь к картинке');
     

      this.products.push({img, title, price });

      
    },

},


 
 



 
  


});