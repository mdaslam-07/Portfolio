// Shared page-scroll lock. Several overlays can be open at once (for example a
// certificate image on top of the CodeChef panel); the page only scrolls again
// when the last one has closed, whatever order they close in.
let count = 0;
let original = "";

export function lockScroll() {
  if (count === 0) {
    original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  count += 1;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    count -= 1;
    if (count === 0) document.body.style.overflow = original;
  };
}
