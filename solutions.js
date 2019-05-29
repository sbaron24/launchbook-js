// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName("nav")[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sidebar = document.getElementById("sidebar-left");

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName("pages")[0];
document.getElementsByClassName("groups")[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let sidebarFirstH5 = sidebar.getElementsByClassName("favorites")[0].getElementsByTagName("h5")[0];
sidebarFirstH5.innerText = "Least Favs";

// Exercise 5): Find the first of the ads in the sidebar and hide it.
firstAd = document.getElementsByClassName("ad-slot")[0];
firstAd.style.visibility = "hidden";

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAd.style.visibility = "visible";

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document.getElementsByClassName("ad-slot")[0].getElementsByTagName("img")[0].src = "http://placebear.com/200/300";

// Exercise 8): Find Sam's post and change its text to something incredible.
posts = document.getElementById("list-of-posts").getElementsByClassName("media-body");
lastPost = posts[posts.length - 1];
lastPost.getElementsByTagName("p")[0].innerText = "Sam is 47 ft. tall.";

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
firstPost = document.getElementById("list-of-posts").getElementsByTagName("li")[0];
firstPost.className += 'post-liked';

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
secondPost = document.getElementsByClassName("post-actions")[1];
shareLink = secondPost.getElementsByTagName("li")[2];
shareLink.className += "post-shared";
