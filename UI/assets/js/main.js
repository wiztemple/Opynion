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
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.tabpane');
tabs.addEventListener('click', e => {
  if (e.target.tagName == "A") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(panel => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');

      }
    })
  }
})
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