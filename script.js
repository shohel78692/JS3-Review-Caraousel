let reviews = [
    {
        id: 1,
        img: "img5.jpg",
        name: "Sally Smith",
        job: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 2,
        img: "img5.jpg",
        name: "dolly Sith",
        job: "Web Designer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 3,
        img: "img3.webp",
        name: "rally mith",
        job: "Manager",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 4,
        img: "img4.webp",
        name: "Say nith",
        job: "CEO",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 5,
        img: "img5.jpg",
        name: "pal Sitter",
        job: "data analyst",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 6,
        img: "img6.jpg",
        name: "san poker",
        job: "Writter",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 7,
        img: "img7.jpg",
        name: "mully obama",
        job: "accountant",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 8,
        img: "img8.jpg",
        name: "patty willted",
        job: "nurse ",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 9,
        img: "img9.jpeg",
        name: "harry potter",
        job: "intern",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        id: 10,
        img: "img10.jpg",
        name: "fanny jackson",
        job: "unemployed",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
];

let img = document.getElementById("img");
let names = document.getElementById("name");
let job = document.getElementById("job");
let review = document.getElementById("review");

let left = document.getElementById("left");
let right = document.getElementById("right");
let btn = document.getElementById("btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
     showPerson(currentItem);
     console.log("shohel");
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    names.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.review;
}


right.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    };
    showPerson(currentItem);
});
left.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});























