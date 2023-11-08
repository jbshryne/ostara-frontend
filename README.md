# Ostara Tree Crystals (Blog Site)

**Live Site**: [https://ostara-tree-crystals.onrender.com/](https://ostara-tree-crystals.onrender.com/)

For my Project #4, I decided to build a companion "shell" site (focusing on the Blog) for my wife's online crystal and jewelry retial store, [Ostara Tree Crystals](https://ostaratreecrystals.square.site/). The site is built with React and Django, and uses Django REST Framework to serve the data from the backend.

For MVP, I created and implemented one full CRUD model (Posts) and a custom User model. Bonus goals I reached were adding a second model (Tags) with a many-to-many relationship to the Posts model, and implementing React Router to allow for multiple pages.

## Technologies Used

### Frotend:

- React
- React Router
- CSS

### Backend:

- Django
- Django REST Framework
- PostgreSQL

## Unfinished Business

- Home page needs hero image and content.

- The transparent images over the Blog post headers are test images. I need to put in real ones, and designate either a random image associator for new posts, or let you choose and put that field on the Post model.

- The last thing I did was begin to add & integrate Tags to group blog posts by topic. I was able to add the Tag model to the backend, and the frontend currently displays the tags for each post. I would like to add the ability to click on a Tag and see all the posts that have that Tag, as well as add & edit tags for each post (for admins).
