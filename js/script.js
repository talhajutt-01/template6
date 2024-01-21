const title = document.getElementById('title');


const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const heading = document.getElementById('heading');


const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');

const se0 = document.getElementById('se0');
const se1 = document.getElementById('se1');
const se2 = document.getElementById('se2');
const se3 = document.getElementById('se3');
const se4 = document.getElementById('se4');
const se5 = document.getElementById('se5');
const se6 = document.getElementById('se6');
const se7 = document.getElementById('se7');
const se8 = document.getElementById('se8');
const se9 = document.getElementById('se9');
const se10 = document.getElementById('se10');
const se11 = document.getElementById('se11');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');

const w0 =document.getElementById('w1');
const w1 =document.getElementById('w2');
const w2 =document.getElementById('w2');
const w3 =document.getElementById('w3');
const w4 =document.getElementById('w4');
const w5 =document.getElementById('w5');
const w6 =document.getElementById('w6');
const w7 =document.getElementById('w7');
const w8 =document.getElementById('w8');
const w9 =document.getElementById('w9');

const te0 = document.getElementById('te0');
const te1 = document.getElementById('te1');
const te2 = document.getElementById('te2');
const te3 = document.getElementById('te3');
const te4 = document.getElementById('te4');
const te5 = document.getElementById('te5');
const te6 = document.getElementById('te6');
const te7 = document.getElementById('te7');
const te8 = document.getElementById('te8');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const c11 = document.getElementById('c11');
const c12 = document.getElementById('c12');


const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');
const b12 = document.getElementById('b12');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');

const g0 = document.getElementById('header');
const g1 = document.getElementById('service');
const g2 = document.getElementById('about');
const g3 = document.getElementById('why');
const g4 = document.getElementById('team');
const g5 = document.getElementById('client');
const g6 = document.getElementById('info');
const g7 = document.getElementById('footer');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');
const img16 = document.getElementById('img16');
const img17 = document.getElementById('img17');
const img18 = document.getElementById('img18');
const img19 = document.getElementById('img19');
const img20 = document.getElementById('img20');
const imgbg = document.getElementById('imgbg');



// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}


  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);

            // Update content based on the current page
            updateContent(title, mergedData.title.title);

            updateContent(heading, mergedData.nav.heading);

            updateLinkContent(nav0, mergedData.nav.nav0);
            updateLinkContent(nav1, mergedData.nav.nav1);
            updateLinkContent(nav2, mergedData.nav.nav2);
            updateLinkContent(nav3, mergedData.nav.nav3);
            updateLinkContent(nav4, mergedData.nav.nav4);
            updateLinkContent(nav5, mergedData.nav.nav5);

            updateContent(s0, mergedData.slide.s0);
            updateContent(s1, mergedData.slide.s1);
            updateContent(s2, mergedData.slide.s2);
            updateContent(s3, mergedData.slide.s3);
            updateContent(s4, mergedData.slide.s4);
            updateContent(s5, mergedData.slide.s5);
            updateContent(s6, mergedData.slide.s6);
            updateContent(s7, mergedData.slide.s7);
            updateContent(s8, mergedData.slide.s8);

            updateContent(se0, mergedData.service.se0);
            updateContent(se1, mergedData.service.se1);
            updateContent(se2, mergedData.service.se2);
            updateContent(se3, mergedData.service.se3);
            updateContent(se4, mergedData.service.se4);
            updateContent(se5, mergedData.service.se5);
            updateContent(se6, mergedData.service.se6);
            updateContent(se7, mergedData.service.se7);
            updateContent(se8, mergedData.service.se8);
            updateContent(se9, mergedData.service.se9);
            updateContent(se10, mergedData.service.se10);
            updateContent(se11, mergedData.service.se11);
            
            updateContent(a0, mergedData.about.a0);
            updateContent(a1, mergedData.about.a1);
            updateContent(a2, mergedData.about.a2);
            updateContent(a3, mergedData.about.a3);
            updateContent(a4, mergedData.about.a4);
            updateContent(a5, mergedData.about.a5);
            
            updateContent(w0, mergedData.why.w0);
            updateContent(w1, mergedData.why.w1);
            updateContent(w2, mergedData.why.w2);
            updateContent(w3, mergedData.why.w3);
            updateContent(w4, mergedData.why.w4);
            updateContent(w5, mergedData.why.w5);
            updateContent(w6, mergedData.why.w6);
            updateContent(w7, mergedData.why.w7);
            updateContent(w8, mergedData.why.w8);
            updateContent(w9, mergedData.why.w9);
         
            updateContent(te0, mergedData.team.te0);
            updateContent(te1, mergedData.team.te1);
            updateContent(te2, mergedData.team.te2);
            updateContent(te3, mergedData.team.te3);
            updateContent(te4, mergedData.team.te4);
            updateContent(te5, mergedData.team.te5);
            updateContent(te6, mergedData.team.te6);
            updateContent(te7, mergedData.team.te7);
            updateContent(te8, mergedData.team.te8);

            updateContent(c1, mergedData.client.c1);
            updateContent(c2, mergedData.client.c2);
            updateContent(c3, mergedData.client.c3);
            updateContent(c4, mergedData.client.c4);
            updateContent(c5, mergedData.client.c5);
            updateContent(c6, mergedData.client.c6);
            updateContent(c7, mergedData.client.c7);
            updateContent(c8, mergedData.client.c8);
            updateContent(c9, mergedData.client.c9);
            updateContent(c10, mergedData.client.c10);
            updateContent(c11, mergedData.client.c11);
            updateContent(c12, mergedData.client.c12);
            
            updateContent(b0, mergedData.info.b0);
            updateContent(b1, mergedData.info.b1);
            updateContent(b2, mergedData.info.b2);
            updateContent(b3, mergedData.info.b3);
            updateContent(b4, mergedData.info.b4);
            updateContent(b5, mergedData.info.b5);
            updateContent(b6, mergedData.info.b6);
            updateLinkContent(b7, mergedData.info.b7);
            updateLinkContent(b8, mergedData.info.b8);
            updateLinkContent(b9, mergedData.info.b9);
            updateLinkContent(b10, mergedData.info.b10);
            updateLinkContent(b11, mergedData.info.b11);
            updateContent(b12, mergedData.info.b12);

       
            updateContent(f0, mergedData.footer.f0);
            updateContent(f1, mergedData.footer.f1);

            updateBackgroundColor(g0, mergedData.color.header);
            updateBackgroundColor(g1, mergedData.color.service);
            updateBackgroundColor(g2, mergedData.color.about);
            updateBackgroundColor(g3, mergedData.color.why);
            updateBackgroundColor(g4, mergedData.color.team);
            updateBackgroundColor(g5, mergedData.color.client);
            updateBackgroundColor(g6, mergedData.color.info);
            updateBackgroundColor(g7, mergedData.color.footer);
    


            updateImageSrc(img1, mergedData.images.img1);
            updateImageSrc(img2, mergedData.images.img2);
            updateImageSrc(img3, mergedData.images.img3);
            updateImageSrc(img4, mergedData.images.img4);
            updateImageSrc(img5, mergedData.images.img5);
            updateImageSrc(img6, mergedData.images.img6);
            updateImageSrc(img7, mergedData.images.img7);
            updateImageSrc(img8, mergedData.images.img8);
            updateImageSrc(img9, mergedData.images.img9);
            updateImageSrc(img10, mergedData.images.img10);
            updateImageSrc(img11, mergedData.images.img11);
            updateImageSrc(img12, mergedData.images.img12);
            updateImageSrc(img13, mergedData.images.img13);
            updateImageSrc(img14, mergedData.images.img14);
            updateImageSrc(img15, mergedData.images.img15);
            updateImageSrc(img16, mergedData.images.img16);
            updateImageSrc(img17, mergedData.images.img17);
            updateImageSrc(img18, mergedData.images.img18);
            updateImageSrc(img19, mergedData.images.img19);
            updateImageSrc(img20, mergedData.images.img20);
            updateImageSrc(imgbg, mergedData.images.imgbg);
            
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'about.html') {

            } else if (fileName === 'service.html') {

            } else if (fileName === 'team.html') {

            } else if (fileName === 'why.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});