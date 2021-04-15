

function renderBlogCarousel() {


  function rotateCarousel() {

    const blogContainer = document.querySelector("#blog_block");
    let blogPosts = document.querySelectorAll(".blog-block");

    for (let i = 0; i < 3; i++) {
      const visibleBlogPost = blogPosts[i];
      visibleBlogPost.style.display = "block";
    }

    for (let i = 3; i < blogPosts.length; i++) {
      const invisibleBlogPost = blogPosts[i];
      invisibleBlogPost.style.display = "none";
    }


    const firstBlog = blogPosts[0];

    blogPosts[0].remove();
    blogContainer.appendChild(firstBlog);





    // blogPosts.style.marginLeft = `-${firstBlog}00%`;
  }

  setInterval(rotateCarousel, 2000);

}

export { renderBlogCarousel };