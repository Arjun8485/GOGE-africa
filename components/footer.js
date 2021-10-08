const footer = document.querySelector('footer');
footer.innerHTML += 
`
<div class="flex lg:flex-row flex-col lg:justify-between justify-center p-14">

<div class="flex lg:w-2/12 flex-col text-center my-4">
    <img src="icons/Logo.svg" alt="" style="max-width: 300px;" class="mx-auto">
    <p>Semaj Africa is an online education platform that delivers video courses, programs and resources.</p>
    <img src="icons/Social_Icons#2.svg" alt="">
</div>

<div class="flex flex-col lg:w-2/12 text-center my:4">
    <a class="font-bold">Quicklinks</a>
    <a href="index.html">Home</a>
    <a href="">Courses</a>
    <a href="">Blog</a>
    <a href="about-us.html">About us</a>
    <a href="">Contact us</a>
</div>

<div class="flex flex-col lg:w-2/12 text-center my-4">
    <a class="font-bold">Contact us</a>
    <p>
        (+55) 254. 254. 254 <br>
        Info@lsemajafrica.com <br>
        Helios Tower 75 Tam Trinh Hoang <br>
        Mai - Ha Noi - Viet Nam
    </p>
</div>

<div class="lg:w-2/12 text-center my-4">
    Terms and Conditions
    <br>
    Faq
</div>
</div>

<div class="flex justify-between bg-black text-white px-10 py-5">
<p>All Right Reserved | GOGE AFRICA 2019</p>
<p>Privacy Policy Site Credit</p>
</div>
`;
console.log(footer)