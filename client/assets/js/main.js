const dropInputField = document.querySelectorAll('.reactionJs');
const signup = document.querySelector('.signup');
const modals = document.querySelectorAll('.modal');
const cancelBtn = document.querySelectorAll('.cancel-btn');
const authLinks = document.querySelectorAll('.authLink');


// dropInputField.forEach( inputDrop => {
//   inputDrop.addEventListener('click', () => {
//     const inputFields = document.querySelectorAll('.inputField');
//     inputFields.forEach(inputField => {
//       inputField.classList.toggle('active');
//     })
//    })
// })
// [...commentBtns].map(commentBtn => {
//   commentBtn.addEventListener('click', () => {

//     [...inputFields].map(inputField => {
//       if (inputField.style.display === 'block') {

//         inputField.style.display = 'none';

//       } else {
//         inputField.style.display = 'block';

//       }


//     });

//   });
// });

// tabs
// const tabjs = document.querySelectorAll('.tabjs');
// const openTab = (event, tabName) => {
//   let tabcontent = document.querySelectorAll('.tabcontent');
//   [...tabcontent].map(tab => tab.style.display = "none");
//   let tablinks = document.querySelectorAll(".tablinks");
//   [...tablinks].map(tablink => tablink.className = tablink.className.replace(" active", ""));
//   document.getElementById(tabName).style.display = "block";
//   event.currentTarget.className += " active";
// }
// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.tabpane');
// tabs.addEventListener('click', e => {
//   if (e.target.tagName == "A") {
//     const targetPanel = document.querySelector(e.target.dataset.target);
//     panels.forEach(panel => {
//       if (panel == targetPanel) {
//         panel.classList.add('active');
//       } else {
//         panel.classList.remove('active');

//       }
//     })
//   }
// })
// const openTab = event => {
//   let tablinks = document.querySelectorAll('.tablinks');
//   for (let i = 0; i < tablinks.length; i++) {
//     tablinks[i].addEventListener('click', () => {
//       const tabsContainer = tablinks[i].parentElement;
//       const tab = document.querySelector('.tab');
//       const tabNumber = a.dataset.forTab;
//     })
//   }
 
// }
// const navTab = document.getElementById('nav-tab');
// navTab.addEventListener('click', openTab, false);
/**
 * Display the signup form
 *
 * @param {null}
 *
 * @returns signup modal
 */
const displaySignUp = () => signup.style.display = 'flex';

[...authLinks].map(authLink => {
  authLink.addEventListener('click', displaySignUp);
});
/**
 * Makes the closeIcon re-usable
 *
 * @param {null}
 *
 * @returns
 */
  
[...cancelBtn].map((cancel) => {
  cancel.addEventListener('click', () => {
    const divToClose = cancel.closest('.target-js');
    divToClose.style.display = 'none';
  });
});

// [...tabjs].map(tablink => {
//   console.log(tablink, 'tablink');

//   return tablink.addEventListener('click', openTab
//   )
// })
// const navbar = document.getElementById('fixbar');
// window.onscroll = function () {
//   if (window.pageYOffset >= 100) {
//     navbar.style.boxShadow = 'rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px';
//   } else {
//     navbar.style.boxShadow = '0px';
//   }
// };

// const getPosts = async () => {
//   const response = await fetch(`http://localhost:3000/posts`);
//   const posts = response.json();
//   console.log(posts);
// }
// getPosts();

document.onreadystatechange = async () => {
  if (document.readyState === 'complete') {
    const url = 'http://localhost:3000/posts';
    const response = await fetch(url, {
      method: 'GET',
    });
    const posts = await response.json();
    const cardColumns = document.querySelector('.central-column');
    console.log(posts);
    [...posts].map(post => {
  
      cardColumns.innerHTML += `
         <div class="card">
          <div class="p-20">
            <h4 class="card-title">${post.title}</h1>
              <div class="flex-start">
                <div>
                  <img src=${post.avatar} class="card-image" alt="">
                </div>
                <div class="ml-10">
                  <div class="card-username"><a href="profile.html">${post.creator}</a></div>
                  <div class="date-span mt--5">${post.created_at}</div>
                </div>
              </div>
              <div class="card-body">
                <p>${post.body}....<a href="#">More</a></p>
              </div>
              <div class="space-between">
                <div class="reactions flex-start">
                  <div class="reaction">
                    <span class="reaction-icon">
                      &#128077;
                    </span>
                    <span class="reaction-type">Like</span>
                    <span class="reaction-count">${post.like}</span>
                  </div>
                  <div class="reaction ml-20">
                    <span class="reaction-icon">&#128172;</span>
                    <span class="reaction-type">Comments</span>
                    <span class="reaction-count">${post.comments.length}</span>
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropdown-ellipsis">&#8943;</div>
                  <div class="dropdown-content">
                    <a class="#"> Edit &#128221;</a>
                    <a class=""> Delete &#128221;</a>
                    <a class=""> Bookmark &#128221;</a>
                  </div>
                </div>
              </div>
          </div>
          <div class="bg-gray bt-1">
            <div class="p-20">
              <div class="inputField">
                <div class="flex-start mt-10">
                  <div class="">
                    <img src="./assets/images/girl.png" class="card-image" alt="">
                  </div>
                  <div class="ml-10 mt-3">
                    <form>
                      <input type="text" class="form-control" placeholder="Add comment here">
                    </form>
                  </div>
                </div>
              </div>
              <div class="flex-start">
                <div class="">
                  <img src="./assets/images/student.png" class="card-image" alt="">
                </div>
                <div class="ml-10">
                  <div class="card-username">Wiz Sullivan</div>
                  <div class="date-span mt--5">11 May</div>
                </div>
              </div>
              <div class="card-body">
                
              </div>
              <div class="space-between pb-10">
                <div class="reactions flex-start">
                  <div class="reaction font-14">
                    <span class="reaction-icon">
                      &#128077;
                    </span>
                    <span class="reaction-type">Like</span>
                    <span class="reaction-count">67</span>
                  </div>
                  <div class="reaction reactionJs font-14 ml-20">
                    <span class="reaction-icon">&#8624;</span>
                    <span class="reaction-type">Reply</span>
                    <span class="reaction-count">67</span>
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropdown-ellipsis">&#8943;</div>
                  <div class="dropdown-content">
                    <a class="#"> Edit &#128221;</a>
                    <a class="#">Delete &#128221;</a>
                    <a class="#">Bookmark &#128221;</a>
                  </div>
                </div>
              </div>
              <div class="reply ml-20">
                <div class="flex-start inputField mt-10">
                  <div class="">
                    <img src="./assets/images/user.png" class="card-image" alt="">
                  </div>
                  <div class="ml-10 mt-3">
                    <form>
                      <input type="text" class="form-control" placeholder="Add comment here">
                    </form>
                  </div>
                </div>
                <div class="flex-start">
                  <div class="">
                    <img src="./assets/images/student.png" class="card-image" alt="">
                  </div>
                  <div class="ml-10">
                    <div class="card-username">Wiz Sullivan</div>
                    <div class="date-span mt--5">11 May</div>
                  </div>
                </div>
                <div class="card-body">
                  <p class="font-14">
                    ${post.comments.map(comment => comment.commentBody)}
                  </p>
                </div>
                <div class="space-between pb-10">
                  <div class="reactions flex-start">
                    <div class="reaction font-14">
                      <span class="reaction-icon">
                        &#128077;
                      </span>
                      <span class="reaction-type">Like</span>
                      <span class="reaction-count">67</span>
                    </div>
                    <div class="reaction font-14 ml-20">
                      <span class="reaction-icon">&#8624;</span>
                      <span class="reaction-type">Reply</span>
                      <span class="reaction-count">67</span>
                    </div>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown-ellipsis">&#8943;</div>
                    <div class="dropdown-content">
                      <a class="#"> Edit &#128221;</a>
                      <a class="#">Delete &#128221;</a>
                      <a class="#">Bookmark &#128221;</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    })
  } 
  return null;
}

// const getPost = async () => {
//   const postId = window.location.search.split('')[1];
//   console.log(postId);
//   const url = `http://localhost:3000/posts/${postId}`;
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json, text/plain',
//       }
//     });
// }
// getPost();