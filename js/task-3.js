const sortByDescendingFriendCount = (users) =>
  users.toSorted((a, b) => b.friends.length - a.friends.length);

/*Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів. 
const sortByDescendingFriendCount = (users) =>

Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).
users.toSorted((a, b) => b.friends.length - a.friends.length);*/
