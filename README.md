<h1>Thunk Redux Practice Project</h1>

<p> React-based application that helps users manage their products. In this application, Redux and Thunk are used to perform asynchronous data operations.

</p>

<h2>Features</h2>

<list>

- Thunk Usage:

Thunk is utilized for managing asynchronous operations and is effectively used in the following components:

1- ProductList Component
Actions: getData
This component displays the product list and uses the getData function to fetch product data from the API. Thunk makes this operation asynchronous and manages the loading state.

2- Cart Component
Actions: getCart, addToBasket, updateItem, deleteItem
The Cart component allows users to view and manage their cart. Here, the getCart function is used to retrieve items from the cart via the API. Additionally, addToBasket, updateItem, and deleteItem functions are utilized to add, update, or remove products from the cart.

3- RestaurantList Component
Actions: getData
This component is used to display the restaurant list. The getData function is also employed here to fetch restaurant data from the API.

</list>

<h2>Preview:</h2>

![](image.gif)
