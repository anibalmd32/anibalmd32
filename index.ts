import homePage from "./index.html"
import contactPage from "./contact.html"

Bun.serve({
  routes: {
    "/": homePage,
    "/contact": contactPage,
  },
  development: true,
})

console.log("Server running on http://localhost:3000")
