

function renderBlogCarousel() {

  let blogPosts = document.querySelectorAll(".blog-block");

  for (let i = 3; i < blogPosts.length; i++) {
    const invisibleBlogPost = blogPosts[i];
    invisibleBlogPost.style.display = "none";
  }

  function rotateCarousel() {

    const blogContainer = document.querySelector("#blog_block");
    blogPosts = document.querySelectorAll(".blog-block");


    const firstBlog = blogPosts[0];

    // console.log(blogPosts);

    // blogPosts[0].style.marginLeft = `-100%`;
    // document.getElementById('s4-ca').style.marginLeft = "0";

    firstBlog.style.display = "none";

    firstBlog.remove()
    const newBlog = blogPosts[3];

    newBlog.style.display = "block";
    // blogPosts[1].classList.add('.blog-animation');
    blogContainer.appendChild(firstBlog);



  }

  setInterval(rotateCarousel, 6000);

}

export { renderBlogCarousel };