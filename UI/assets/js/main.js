const commentBtns = document.querySelectorAll('.reaction');
const inputFields = document.querySelectorAll('.inputField');


[...commentBtns].map(commentBtn => {
  commentBtn.addEventListener('click', () => {

    [...inputFields].map(inputField => {
      if (inputField.style.display === 'block') {

        inputField.style.display = 'none';

      } else {
        inputField.style.display = 'block';

      }


    });

  });
});

// tabs
// const tabjs = document.querySelectorAll('.tabjs');
const openTab = (event, tabName) => {
  let tabcontent = document.querySelectorAll('.tabcontent');
  [...tabcontent].map(tab => tab.style.display = "none");
  let tablinks = document.querySelectorAll(".tablinks");
  [...tablinks].map(tablink => tablink.className = tablink.className.replace(" active", ""));
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
// [...tabjs].map(tablink => {
//   console.log(tablink, 'tablink');

//   return tablink.addEventListener('click', openTab
//   )
// })
