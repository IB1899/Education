
let body     = document.querySelector("body");
let home     = document.querySelector(".hom");
let category = document.querySelector(".cat");
let about    = document.querySelector(".abo");
let courses  = document.querySelector(".cou");
let pricing  = document.querySelector(".pri");
let contact  = document.querySelector(".con");
let review   = document.querySelector(".rev");
let blogs    = document.querySelector(".blo");

// Category
category.addEventListener("click", ()=>{  body.classList.add("category") });
home.addEventListener("click", ()=>{ body.classList.remove("category")});
review.addEventListener("click", ()=>{ body.classList.remove("category")});
about.addEventListener("click", ()=>{ body.classList.remove("category")});
courses.addEventListener("click", ()=>{ body.classList.remove("category")});
contact.addEventListener("click", ()=>{ body.classList.remove("category")});
pricing.addEventListener("click", ()=>{ body.classList.remove("category")});
blogs.addEventListener("click", ()=>{ body.classList.remove("category")});

// About
about.addEventListener("click", ()=>{  body.classList.add("about") });
home.addEventListener("click", ()=>{ body.classList.remove("about")});
review.addEventListener("click", ()=>{ body.classList.remove("about")});
category.addEventListener("click", ()=>{ body.classList.remove("about")});
courses.addEventListener("click", ()=>{ body.classList.remove("about")});
contact.addEventListener("click", ()=>{ body.classList.remove("about")});
pricing.addEventListener("click", ()=>{ body.classList.remove("about")});
blogs.addEventListener("click", ()=>{ body.classList.remove("about")});

// Courses
courses.addEventListener("click", ()=>{  body.classList.add("courses") });
home.addEventListener("click", ()=>{ body.classList.remove("courses")});
review.addEventListener("click", ()=>{ body.classList.remove("courses")});
category.addEventListener("click", ()=>{ body.classList.remove("courses")});
about.addEventListener("click", ()=>{ body.classList.remove("courses")});
contact.addEventListener("click", ()=>{ body.classList.remove("courses")});
pricing.addEventListener("click", ()=>{ body.classList.remove("courses")});
blogs.addEventListener("click", ()=>{ body.classList.remove("courses")});

// Pricing
pricing.addEventListener("click", ()=>{  body.classList.add("pricing") });
home.addEventListener("click", ()=>{ body.classList.remove("pricing")});
review.addEventListener("click", ()=>{ body.classList.remove("pricing")});
category.addEventListener("click", ()=>{ body.classList.remove("pricing")});
about.addEventListener("click", ()=>{ body.classList.remove("pricing")});
contact.addEventListener("click", ()=>{ body.classList.remove("pricing")});
courses.addEventListener("click", ()=>{ body.classList.remove("pricing")});
blogs.addEventListener("click", ()=>{ body.classList.remove("pricing")});

// Contact
contact.addEventListener("click", ()=>{  body.classList.add("contact") });
home.addEventListener("click", ()=>{ body.classList.remove("contact")});
review.addEventListener("click", ()=>{ body.classList.remove("contact")});
category.addEventListener("click", ()=>{ body.classList.remove("contact")});
about.addEventListener("click", ()=>{ body.classList.remove("contact")});
pricing.addEventListener("click", ()=>{ body.classList.remove("contact")});
courses.addEventListener("click", ()=>{ body.classList.remove("contact")});
blogs.addEventListener("click", ()=>{ body.classList.remove("contact")});

// Review
review.addEventListener("click", ()=>{  body.classList.add("review") });
home.addEventListener("click", ()=>{ body.classList.remove("review")});
contact.addEventListener("click", ()=>{ body.classList.remove("review")});
category.addEventListener("click", ()=>{ body.classList.remove("review")});
about.addEventListener("click", ()=>{ body.classList.remove("review")});
pricing.addEventListener("click", ()=>{ body.classList.remove("review")});
courses.addEventListener("click", ()=>{ body.classList.remove("review")});
blogs.addEventListener("click", ()=>{ body.classList.remove("review")});

// Blogs
blogs.addEventListener("click", ()=>{  body.classList.add("blogs") });
home.addEventListener("click", ()=>{ body.classList.remove("blogs")});
contact.addEventListener("click", ()=>{ body.classList.remove("blogs")});
category.addEventListener("click", ()=>{ body.classList.remove("blogs")});
about.addEventListener("click", ()=>{ body.classList.remove("blogs")});
pricing.addEventListener("click", ()=>{ body.classList.remove("blogs")});
courses.addEventListener("click", ()=>{ body.classList.remove("blogs")});
review.addEventListener("click", ()=>{ body.classList.remove("blogs")});

//----------------------------------------------------------------------------------------//

