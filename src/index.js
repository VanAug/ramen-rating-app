const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "assets/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 4, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "assets/nirvana.jpg", rating: 7, comment: "Meaty" },
    { id: 5, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "assets/gyukotsu.jpg", rating: 6, comment: "Wonderful" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "assets/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "assets/naruto.jpg", rating: 8, comment: "Very rich" },
];


function displayRamens(ramens) {
    const ramenMenu = document.getElementById("display-ramen");
    
    ramens.forEach(ramen => {
        const img = document.createElement("img");

        img.src = ramen.image;
        img.alt = ramen.name;

        img.style.height = "150px"
        img.style.cursor = "pointer"; 
        img.style.margin = "10px"; 

        img.addEventListener("click", () => handleClick(ramen))

        ramenMenu.appendChild(img);
    });
}
displayRamens(ramens);

function handleClick(array) {
    const clickRamen = document.getElementById("main-display");
    const ramenDetail = document.getElementById("ramen-detail")
    
    clickRamen.innerHTML = `
        <div class = "image-container">
            <img src="${array.image}" alt="${array.name}">
            <div class = "overlay">
                <h2>${array.name}</h2>
                <h3>${array.restaurant}</h3>
            <div>
        <div
    `;

    ramenDetail.innerHTML = `
        <p><strong>Rating:<strong><p>
        <p><strong>${array.rating} /10<strong><p>

        <p><strong>Comment:<strong><p>
        <p><strong>${array.comment}<strong><p>
    `
}
