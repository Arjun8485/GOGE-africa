const Name = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const commentSection = document.getElementById("comment-section")

function postComment() {
    commentSection.innerHTML += 
    `
    <div>
        <br>
        <div class="bg-gray-400 rounded-full lg:w-20 lg:h-20 w-10 h-10 float-left mr-3 mb-3"></div>
        <p class="italic font-light">“${comment.value.trim()}” <br> <br><span>-by ${Name.value.trim()}</p>
        <br>
    </div>
    `;
}