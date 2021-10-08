
/*
for (let index = 0; index < 8; index++) {
    courseContainer.innerHTML += 
    `
    <div class="border border-yellow-400 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-yellow-500 h-12 w-12"></div>
            <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-yellow-500 rounded w-3/4"></div>
            <div class="space-y-2">
                <div class="h-4 bg-yellow-500 rounded"></div>
                <div class="h-4 bg-yellow-500 rounded w-5/6"></div>
            </div>
            </div>
        </div>
    </div>
    `
}
*/
const courseContainer = document.getElementById("course-container");

function loadCategory(evt, categoryName) {
    var btn;
    courseContainer.innerHTML = "";
    db.collection("test").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if (categoryName == doc.data().category) {
                returnRetrievedItems(doc)
            }
        })
    })
}

function filterCourseType(courseType) {
    var btnFree = document.getElementById("free");
    var btnPremium = document.getElementById("premium");
    if (courseType == true) {
        console.log("btnfree")
        btnFree.className = "rounded-full hover:border-2 hover:border-solid hover:border-gray-500 text-white w-14 h-14 bg-yellow-500 border-transparent";
        btnPremium.className = "rounded-full border-2 border-solid border-gray-500 w-14 h-14 hover:bg-yellow-500 hover:border-transparent hover:text-white ml-3";
    } else if (courseType == false) {
        console.log("premium")
        btnPremium.className = "rounded-full hover:border-2 hover:border-solid hover:border-gray-500 text-white w-14 h-14 bg-yellow-500 border-transparent ml-3";
        btnFree.className = "rounded-full border-2 border-solid border-gray-500 w-14 h-14 hover:bg-yellow-500 hover:border-transparent hover:text-white";
    }
    courseContainer.innerHTML = "";
    db.collection("test").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if (doc.data().free == courseType) {
                returnRetrievedItems(doc);
            }
        })
    })
}

function searchCourse() {
    var search = document.getElementById("search");
    courseContainer.innerHTML = "";
    db.collection("test").where("description", "==", search.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            returnRetrievedItems(doc);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

retrieveItems();
function retrieveItems(){
    courseContainer.innerHTML = "";
    db.collection("test").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            returnRetrievedItems(doc)
        })
    })
}

function returnRetrievedItems(doc) {
    var free = doc.data().free;
    var image = doc.data().image;
    var description = doc.data().description;
    var cost;
    if (free == true) {
        cost = "Free";
    } else {
        cost = "Premium";
    }
    courseContainer.innerHTML += 
    `
    <div class="bg-gray-300 h-72 rounded-2xl text-white animate-zoom" data-id="${doc.id}">
        <div class="font-bold h-56 rounded-t-xl relative" style="background-image: url(${image});">
            <img src="${image}" alt="" class="h-full rounded-t-xl w-full">
            <h5 class="float-right p-1.5 bg-yellow-500 rounded-bl-lg rounded-tr-lg absolute top-0 right-0">${cost}</h5>
        </div>
        <div class="bg-yellow-500 h-16 rounded-b-lg p-2">
            <p class="w-9/12 font-bold over break-words">${description}</p>
        </div>
    </div>
`;
}