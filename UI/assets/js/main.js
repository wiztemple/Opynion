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
