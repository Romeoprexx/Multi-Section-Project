const ul = document.querySelector('#unordered');
const li = document.querySelector('#list');

const listedItems = document.createElement('li');
listedItems.innerHTML = `
<li class="links"><a href="#home" class="is active">Home</a></li>
<li class="links"><a href="#gifts" class="is">Gifts </a></li>
<li class="links"><a href="#destinations" class="is">Destinations </a></li>
<li class="links"><a href="#movies" class="is"> Movies</a></li>
<li class="links"><a href="#books" class="is">Books</a></li>
<li class="links"><a href="#about" class="is">About</a></li>`; 




li.append(listedItems);
ul.appendChild(li);



/* Explanation:
1. I already had an unordered list with id "unOrdered". so i got the id via querryselector.. const ul = document.querySelector('#unordered');
2. I already had a list with id "list". so i got the id via querryselector.. const li = document.querySelector('#list');
3. Created a list(li) called listItems..const listedItems = document.createElement('li');
listedItems.innerHTML = `
4. Used innerHTML to modify the content of the lists.
5. Appended the listedItems to the list... li.append(listedItems);
6. Appended the lists as a child of the ul...ul.appendChild(li);
*/