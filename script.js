function decrementHP() {
  /* get elements with the ID of HP */
  let e1 = document.getElementById ("hp");
  /* Set 'currentCount' to the text of the element */
  let currentCount = e1.innerText;

  if (currentCount == 0) {
    alert ("Congradulation!, you have won a a trip to Mars!");
    
  } else {
    /* Decrement current count and set it as the new text in our element */
    e1.innerText = -- currentCount;
  }

    /* check the hit-point count and change the text color accordingly */

  if (currentCount < 15 && currentCount > 8) {
    e1.style.color = "red";
  }

  if (currentCount < 8) {
    e1.style.color = "green";
  }

  if (currentCount < 3) {
    e1.style.color = "white";
  }


};

/* this isnt the best way of setting CSS though, it applies the styles by adding 'style' attribute, which means that it is adding 'instyling' and we prefer not to create inline styles.*/

/* we prefer to use 'classList.add()' & 'classList.remove()' methods. */