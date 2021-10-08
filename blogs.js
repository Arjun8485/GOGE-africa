const blogListContainer = document.getElementById('blog-list-container');
const blogListPage = document.getElementById('blog-list-page');
const blogContainer = document.getElementById('blog-container');

retrieveItems();
function retrieveItems(){
    blogListContainer.innerHTML = "";
    db.collection("blogs").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            returnRetrievedItems(doc)
        })
    })
}

function returnRetrievedItems(doc) {
    var author = doc.data().author;
    var image = doc.data().image;
    var description = doc.data().description;
    var date = doc.data().date;
    var title = doc.data().title;
    var comments = doc.data().comment;
    var blogContent = doc.data().blogContent;
    var commentAuthor = doc.data().commentAuthor;
    blogListContainer.innerHTML += 
    `
    <div class="w-full rounded-xl m-5" data-id="${doc.id}">
        <img src="${image}" alt="" class="rounded-t-3xl h-80 w-full">
        <div class="h-96 bg-gradient-to-tr from-yellow-400 to-yellow-500 p-10 rounded-b-xl">
            <h3 class="font-bold text-3xl">
                ${title}
            </h3>
            <br>
            <p class="font-normal">${date} - by ${author}</p>
            <br><br>
            <p>${description}</p>
            <br>
            <button class="text-yellow-500 bg-white rounded-full py-3 px-12 text-lg hover:opacity-80" onclick="showBlog('${doc.id}')">Read more</button>
        </div>
        
    </div>
`;

blogContainer.innerHTML += 
`
<div class="hidden" id="${doc.id}">
    <h3 class="font-bold text-3xl text-yellow-500 text-center">${title}</h3>
    <br>
    <p class="text-right italic">- by ${author}</p>
    <br><br>
    <p class="font-light">${blogContent}</p>
    <button onclick="hideBlog('${doc.id}')" class="fixed bottom-0 right-0 text-white bg-yellow-500 py-3 px-6 rounded-tl-xl">Head back ← </button>
</div>
`;
}

function showBlog(docId) {
    blogListPage.style.display = "none";
    var blog = document.getElementById(docId);
    blog.style.display = "block";
}
function hideBlog(docId) {
    blogListPage.style.display = "block";
    var blog = document.getElementById(docId);
    blog.style.display = "none";
}