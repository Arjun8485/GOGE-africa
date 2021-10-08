const nav = document.querySelector('nav');
var CurrentPage = location.href.split('/').pop();


nav.innerHTML = `
<div class="flex py-7 xl:px-12 px-6 shadow-md">
<div class="">
    <img src="icons/Logo.svg" alt="" style="width: 160px; height: 40px;">
</div>
<!--Nav for larger screens-->
<div class="ml-auto lg:flex hidden flex-wrap nav-link-color">
    <a class="xl:mx-5 lg:mx-3 my-auto" id="index" href="index.html">Home</a>
    <a class="xl:mx-5 lg:mx-3 my-auto" id="course" href="course.html">Courses</a>
    <a class="xl:mx-5 lg:mx-3 my-auto" id="blog" href="blog.html">Blog</a>
    <a class="xl:mx-5 lg:mx-3 my-auto" id="about" href="about-us.html">About us</a>
    <a class="xl:mx-5 lg:mx-3 my-auto" href="">Contact us</a>
    <img src="icons/Add to cart.svg" alt="" class="-mt-4 xl:mx-5 lg:mx-3">
    <button class="xl:mx-5 lg:mx-3 nav-button-bg focus:outline-none px-6 py-4 text-white rounded-full hover:opacity-80">Be a contribuor</button>
    <button class="xl:mx-5 lg:mx-3 nav-button-bg focus:outline-none px-6 py-4 text-white rounded-full hover:opacity-80">Log in</button>
</div>
<!--Nav for smaller screens-->
<div class="ml-auto lg:hidden block">
    <div style="font-size:30px;cursor:pointer" onclick="openNav()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </div>
</div>
</div>

<div id="mySidenav" class="sidenav bg-yellow-100 lg:hidden">
<a href="javascript:void(0)" class="closebtn p-8" onclick="closeNav()">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
</a>
<a href="index.html" class="hover:text-yellow-500 mt-10">Home</a>
<a href="course.html" class="hover:text-yellow-500">Courses</a>
<a href="blog.html" class="hover:text-yellow-500">Blog</a>
<a href="about-us.html" class="hover:text-yellow-500">About us</a>
<a href="#" class="hover:text-yellow-500">Contact us</a>
<button class="nav-button-bg my-4 focus:outline-none w-6/12 py-4 text-white rounded-full block mx-auto">Be a contribuor</button>
<button class="nav-button-bg my-4 focus:outline-none w-6/12 py-4 text-white rounded-full block mx-auto">Log in</button>
</div>
`;

function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.width = "0";
}


if (CurrentPage == "index.html") {
    document.getElementById("index").className += " font-extrabold";
} else if (CurrentPage == "about-us.html") {
    document.getElementById("about").className += " font-extrabold";
} else if (CurrentPage == "course.html") {
    document.getElementById("course").className += " font-extrabold";
} else if (CurrentPage == "blog.html") {
    document.getElementById("blog").className += " font-extrabold"
}