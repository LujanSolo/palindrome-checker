const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let text = textInput.value;
  console.log(text)

  if(!text){
    alert('Please input a value');
  } else {
    let cleanText = text.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reverseText = cleanText.split("").reverse().join("");
    result.classList.remove("hidden");
    if(cleanText === reverseText){
      result.innerHTML = `<p>${text} is a palindrome</p>`;
    } else{
      result.innerHTML = `<p>${text} is not a palindrome</p>`;
    }
  }
});
//* Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
