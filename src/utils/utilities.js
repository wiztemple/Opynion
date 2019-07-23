export const truncatePost = (body) => {
   const defaultLength = 300;
  //  let truncatedString = body.substr(0, defaultLength);
  let newString;
   if(body.length > defaultLength) {
     newString = body.substr(0, defaultLength);
   } else {
     newString = body;
   }
  return newString;
}

export const formatLongNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}


const autoExpand = (field) => {
  // Reset field height
  field.style.height = 'inherit';
  // Get the computed styles for the element
  let computed = window.getComputedStyle(field);
  // Calculate the height
  let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10)
    + field.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
  field.style.height = height + 'px';
};
document.addEventListener('input', function (event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);

